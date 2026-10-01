#!/usr/bin/env python3
"""Extract the framework tables from Poppler's positioned XML output."""

import json
import re
import shutil
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Kompetenční rámec SŠ.pdf"
OUTPUT = ROOT / "src" / "data" / "framework.json"
TABLE_PAGES = (6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 19, 20, 21, 22, 24, 25, 26, 28, 29, 30)
AREA_NAMES = {
    1: "Obsah vyučovaného oboru a jeho didaktické zprostředkování",
    2: "Plánování výuky",
    3: "Podmínky pro učení",
    4: "Podpora učení",
    5: "Zpětná vazba a hodnocení",
    6: "Profesní spolupráce, profesní sebepojetí, profesní rozvoj a péče o sebe",
}
AREA_INTRO_PAGES = {1: 5, 2: 9, 3: 14, 4: 18, 5: 23, 6: 27}
COMPETENCE_NAMES = {
    "1.1": "Rozumím vyučovaným oborům a dále se v nich rozvíjím",
    "1.2": "Zprostředkovávám obsah vyučovaného oboru",
    "2.1": "Nastavuji cíle výuky",
    "2.2": "Plánuji metody výuky",
    "2.3": "Připravuji výukové materiály",
    "2.4": "Plánuji rozvržení času",
    "2.5": "Individualizuji plán výuky",
    "3.1": "Buduji prostředí důvěry",
    "3.2": "Udržuji bezpečné prostředí",
    "4.1": "Zprostředkovávám výukové cíle a ověřuji, jak jim žáci a žákyně rozumí",
    "4.2": "Využívám výukové strategie podporující učení žáků a žákyň",
    "4.3": "Vedu výuku s ohledem na aktuální situaci ve třídě",
    "4.4": "Podporuji autoregulaci učení žáků a žákyň",
    "5.1": "Poskytuji průběžnou zpětnou vazbu",
    "5.2": "Využívám různorodé metody a formy hodnocení",
    "5.3": "Svou okamžitou zpětnou vazbou podporuji učení žáků a žákyň",
    "6.1": "Spolupracuji s ostatními",
    "6.2": "Plánuji a realizuji svůj profesní rozvoj",
    "6.3": "Pečuji o sebe",
}


def text_of(element):
    return "".join(element.itertext()).strip()


def lines_of(page):
    return [
        {
            "top": int(element.get("top")),
            "left": int(element.get("left")),
            "height": int(element.get("height")),
            "width": int(element.get("width")),
            "text": text_of(element),
        }
        for element in page.findall("text")
        if text_of(element)
    ]


def criterion_ids(lines):
    rotated = sorted(
        (line for line in lines if line["left"] < 55 and line["width"] == 0),
        key=lambda line: line["top"],
    )
    if len(rotated) % 3:
        raise ValueError(f"Unexpected vertical criterion numbering: {rotated}")
    result = []
    for index in range(0, len(rotated), 3):
        parts = rotated[index:index + 3]
        identifier = "".join(part["text"] for part in reversed(parts))
        if not re.fullmatch(r"[1-6]\.[1-5]\.[1-9]", identifier):
            raise ValueError(f"Invalid criterion ID {identifier!r}")
        result.append(identifier)
    return result


def body_lines(lines, page_number):
    start = 385 if page_number in (11, 12, 13) else 440
    return [
        line for line in lines
        if line["top"] > start
        and line["left"] >= 50
        and line["width"] > 0
        and not line["text"].startswith(("ÚROVEŇ", "MINDSET"))
        and not re.match(r"^[1-6]\.[1-5]\s", line["text"])
    ]


def row_intervals(lines, count, page_number):
    intervals = sorted((line["top"], line["top"] + line["height"]) for line in lines)
    clusters = []
    for top, bottom in intervals:
        if clusters and top - clusters[-1][1] <= 6:
            clusters[-1][1] = max(bottom, clusters[-1][1])
        else:
            clusters.append([top, bottom])
    # A stray glyph at the end of criterion 2.1.3 closes the whitespace gap.
    if page_number == 10 and len(clusters) == count - 1:
        merged = clusters.pop()
        clusters.extend(([merged[0], 1040], [1041, merged[1]]))
    if len(clusters) != count:
        raise ValueError(f"Page {page_number}: {len(clusters)} row bands for {count} IDs: {clusters}")
    return clusters


def column_for(left):
    for index, boundary in enumerate((265, 595, 930, 1265, 1630)):
        if left < boundary:
            return index
    return 5


def join_lines(lines):
    ordered = sorted(lines, key=lambda line: (line["top"], line["left"]))
    output = ""
    for line in ordered:
        part = re.sub(r"\s+", " ", line["text"]).strip()
        if not part:
            continue
        if not output:
            output = part
        elif output.endswith("-") and part[:1].islower():
            output += part
        else:
            output += " " + part
    return output


def prose_paragraphs(page, *, min_top=180, max_left=None):
    lines = [
        line for line in lines_of(page)
        if line["top"] >= min_top
        and line["width"] > 0
        and (max_left is None or line["left"] < max_left)
    ]
    columns = (
        sorted((line for line in lines if line["left"] < 1050), key=lambda line: (line["top"], line["left"])),
        sorted((line for line in lines if line["left"] >= 1050), key=lambda line: (line["top"], line["left"])),
    )
    paragraphs = []
    for column in columns:
        group = []
        previous_top = None
        for line in column:
            if previous_top is not None and line["top"] - previous_top > 45 and group:
                paragraphs.append(join_lines(group))
                group = []
            group.append(line)
            previous_top = line["top"]
        if group:
            paragraphs.append(join_lines(group))
    return paragraphs


def extract_tables(root):
    criteria = []
    for page in root.findall("page"):
        number = int(page.get("number"))
        if number not in TABLE_PAGES:
            continue
        lines = lines_of(page)
        identifiers = criterion_ids(lines)
        body = body_lines(lines, number)
        bands = row_intervals(body, len(identifiers), number)
        for identifier, (top, bottom) in zip(identifiers, bands):
            cells = [[] for _ in range(6)]
            for line in body:
                if top <= line["top"] <= bottom:
                    cells[column_for(line["left"])].append(line)
            values = [join_lines(cell) for cell in cells]
            if any(not value for value in values):
                raise ValueError(f"Page {number}, {identifier}: missing cell {values}")
            competence_id = ".".join(identifier.split(".")[:2])
            criteria.append({
                "id": identifier,
                "competenceId": competence_id,
                "title": values[0],
                "levels": values[1:5],
                "mindset": values[5],
                "sourcePage": number,
            })
    return criteria


def main():
    with tempfile.TemporaryDirectory() as directory:
        path = Path(directory) / "framework.xml"
        subprocess.run(
            ["pdftohtml", "-xml", "-hidden", "-i", "-nodrm", str(SOURCE), str(path)],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        root = ET.parse(path).getroot()
    criteria = extract_tables(root)
    ids = [item["id"] for item in criteria]
    if len(criteria) != 61 or len(ids) != len(set(ids)):
        raise ValueError(f"Expected 61 unique criteria, got {len(criteria)} rows and {len(set(ids))} IDs")
    if set(item["competenceId"] for item in criteria) != set(COMPETENCE_NAMES):
        raise ValueError("Competence IDs differ from the source inventory")
    clipped = next(item for item in criteria if item["id"] == "2.1.3")
    # The last word is visibly clipped in the supplied PDF (p. 10).
    if not clipped["levels"][3].endswith("gradaci ílů"):
        raise ValueError("The known clipped source line has changed; review the correction")
    clipped["levels"][3] = clipped["levels"][3].removesuffix("gradaci ílů") + "gradaci cílů."
    pages = {int(page.get("number")): page for page in root.findall("page")}
    output = {
        "version": "Pracovní verze, 1. 10. 2026",
        "areas": [
            {
                "id": str(i),
                "title": name,
                "intro": prose_paragraphs(pages[AREA_INTRO_PAGES[i]], max_left=1050 if i == 1 else None),
                "sourcePage": AREA_INTRO_PAGES[i],
            }
            for i, name in AREA_NAMES.items()
        ],
        "competences": [
            {"id": identifier, "areaId": identifier[0], "title": title}
            for identifier, title in COMPETENCE_NAMES.items()
        ],
        "criteria": criteria,
        "examples": [],
        "editorialCorrections": [
            "2.1.3, úroveň 3: V PDF je na konci buňky oříznutý začátek slova „cílů“; na webu je doplněno „c“ a koncová tečka."
        ],
        "background": prose_paragraphs(pages[2], min_top=190),
        "methodology": prose_paragraphs(pages[3], min_top=190),
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    public_pdf = ROOT / "public" / "kompetencni-ramec-ss.pdf"
    public_pdf.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(SOURCE, public_pdf)
    subprocess.run(
        ["pdftoppm", "-f", "1", "-l", "1", "-scale-to", "720", "-png", "-singlefile", str(SOURCE), str(ROOT / "public" / "ramec-titulni-strana")],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    print(f"Wrote {len(criteria)} criteria to {OUTPUT}")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, subprocess.CalledProcessError) as error:
        print(error, file=sys.stderr)
        sys.exit(1)

#!/usr/bin/env python3
"""Check generated routes, fragments and criterion content without a browser."""

import json
import os
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
owner, _, repository = os.environ.get("GITHUB_REPOSITORY", "").partition("/")
default_base = repository if owner and repository and repository != f"{owner}.github.io" else ""
BASE = os.environ.get("BASE_PATH", default_base).strip("/")


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.duplicate_ids = set()
        self.links = []
        self.levels = 0
        self.hidden_levels = 0
        self.mindsets = 0
        self.framework_areas = 0
        self.criterion_links = set()

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        identifier = values.get("id")
        if identifier:
            if identifier in self.ids:
                self.duplicate_ids.add(identifier)
            self.ids.add(identifier)
        if tag in ("a", "link") and values.get("href"):
            self.links.append(values["href"])
            if tag == "a" and "/kriteria/" in values["href"]:
                self.criterion_links.add(urlsplit(values["href"]).path)
        if tag == "script" and values.get("src"):
            self.links.append(values["src"])
        if tag == "img" and values.get("src"):
            self.links.append(values["src"])
        if values.get("data-level-panel") is not None:
            self.levels += 1
            if "hidden" in values:
                self.hidden_levels += 1
        if tag == "details" and "framework-area" in values.get("class", "").split():
            self.framework_areas += 1
        if identifier == "mindset":
            self.mindsets += 1


def main():
    data = json.loads((ROOT / "src/data/framework.json").read_text(encoding="utf-8"))
    assert len(data["areas"]) == 6
    assert len(data["competences"]) == 19
    assert len(data["criteria"]) == 61
    assert len({item["id"] for item in data["criteria"]}) == 61
    assert all(len(item["levels"]) == 4 and all(item["levels"]) and item["mindset"] for item in data["criteria"])
    files = list(DIST.rglob("*.html"))
    parsed = {}
    for path in files:
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8"))
        parsed[path] = parser
    errors = []
    for path, page in list(parsed.items()):
        if page.duplicate_ids:
            errors.append(f"{path}: duplicate IDs {sorted(page.duplicate_ids)}")
        if "/kriteria/" in str(path) and (page.levels != 4 or page.mindsets != 1):
            errors.append(f"{path}: expected 4 levels and one mindset")
        if "/kriteria/" in str(path) and page.hidden_levels:
            errors.append(f"{path}: levels must be visible without interaction")
        for href in page.links:
            url = urlsplit(href)
            if url.scheme or url.netloc:
                continue
            if href.startswith("#"):
                target = path
            elif href.startswith("/"):
                prefix = f"/{BASE}/" if BASE else "/"
                if not href.startswith(prefix):
                    errors.append(f"{path}: URL missing base prefix: {href}")
                    continue
                relative = unquote(url.path[len(prefix):])
                target = DIST / relative
                if target.is_dir() or not target.suffix:
                    target = target / "index.html"
            else:
                target = path.parent / unquote(url.path)
            if not target.exists():
                errors.append(f"{path}: missing target {href}")
            elif url.fragment and target.suffix == ".html":
                if target not in parsed:
                    target_page = PageParser()
                    target_page.feed(target.read_text(encoding="utf-8"))
                    parsed[target] = target_page
                if url.fragment not in parsed[target].ids:
                    errors.append(f"{path}: missing fragment {href}")
    explorer = parsed[DIST / "ramec" / "index.html"]
    if explorer.framework_areas != 6 or len(explorer.criterion_links) != 61:
        errors.append("Framework explorer must expose six areas and direct links to all 61 criteria")
    home = parsed[DIST / "index.html"]
    if home.framework_areas != 6 or len(home.criterion_links) != 61:
        errors.append("Home page must expose six areas and direct links to all 61 criteria")
    ordered = sorted(data["criteria"], key=lambda item: tuple(map(int, item["id"].split("."))))
    prefix = f"/{BASE}" if BASE else ""
    for index, criterion in enumerate(ordered):
        route = criterion["id"].replace(".", "-")
        page = parsed[DIST / "kriteria" / route / "index.html"]
        neighbors = [item for item in (ordered[index - 1] if index else None, ordered[index + 1] if index + 1 < len(ordered) else None) if item]
        expected = {f"{prefix}/kriteria/{item['id'].replace('.', '-')}/" for item in neighbors}
        if page.criterion_links != expected:
            errors.append(f"{route}: expected previous/next links {sorted(expected)}")
    if errors:
        print("\n".join(errors[:40]), file=sys.stderr)
        print(f"{len(errors)} validation errors", file=sys.stderr)
        return 1
    prefix = f"/{BASE}/" if BASE else "/"
    print(f"Validated {len(files)} HTML pages, 61 criteria and internal links (base {prefix}).")
    return 0


if __name__ == "__main__":
    sys.exit(main())

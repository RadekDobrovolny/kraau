# KRAAU: digitální kompetenční rámec SŠ

Statický web v Astro pro práci s Kompetenčním rámcem studentů a studentek učitelství pro střední školy. Návrh produktu je v [PRD.md](PRD.md).

## Spuštění

```sh
npm install
npm run dev
```

Lokálně se web otevře na adrese z výstupu Astro (standardně `http://localhost:4321/`). Produkční build včetně kontroly obsahu, odkazů a hledání:

```sh
npm run build
```

## Obsah

`src/data/framework.json` obsahuje šest oblastí, devatenáct kompetencí a 61 kritérií. Vznikl ze zdrojového PDF pomocí:

```sh
python3 scripts/extract_framework.py
```

Skript vyžaduje Poppler (`pdftohtml`) a zároveň aktualizuje kopii PDF v `public/`. Obsahové kolekce Astro kontrolují povinná pole; build kontroluje počty, vazby, vygenerované stránky a odkazy. Zdroj je pracovní dokument. Před veřejným vydáním je nutné dokončit redakční kontrolu všech deskriptorů proti PDF a potvrdit definitivní znění s garantem. Jediná provedená textová oprava je popsána na stránce „O projektu“ a v `editorialCorrections` datového souboru.

Ukázky z praxe zatím nebyly dodány ani schváleny. Stránka ukázek a místa u úrovní proto zobrazují pravdivý prázdný stav.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` staví a nasazuje web při pushi do větve `main`. V nastavení repozitáře je potřeba zvolit **Pages → Source: GitHub Actions**. Konfigurace Astro odvozuje adresu a cestu z `GITHUB_REPOSITORY`; u projektového webu nastaví `base` na název repozitáře. Pro vlastní doménu lze při buildu nastavit `SITE_URL` a `BASE_PATH=/`.

Příklad lokální kontroly projektové cesty:

```sh
SITE_URL=https://example.github.io BASE_PATH=/kraau npm run build
```

Repozitář zatím není propojený s GitHubem; workflow se spustí až po jeho vytvoření a nahrání projektu.

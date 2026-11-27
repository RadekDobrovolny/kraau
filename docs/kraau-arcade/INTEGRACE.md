# KRAAU Arcade 0.2.0 – integrace do Skrytého kurikula

Větev: `preview/kraau-arcade-020` (vývojový náhled, nenasazeno). Stav obsahu: `draft_review_required`.

## Shrnutí

- Stránka `/easter-egg/` má v náhledu sekci `#arcade` s katalogem šesti her (mezi přehledem „Co všechno se na webu skrývá“ a Akademickým alibistou).
- **Každá hra má vlastní stránku** `/easter-egg/hry/<slug>/`: `praxe-na-druhou`, `kraaule`, `souvislosti`, `didaktris`, `sborovna`, `simsborovna`. Stránka má drobečkovou navigaci (Úvod › Easter egg › KRAAU Arcade › hra), nadpis a pravidla, herní plochu, vazbu na rámec a odkazy na ostatní hry, předchozí/další a zpět do herny. Funguje tlačítko Zpět v prohlížeči, každou hru lze sdílet odkazem.
- **Důvod změny:** v balíčku se hry otevíraly uvnitř herny na jedné dlouhé stránce, takže pod Sborovnou byla dál vidět Slučovačka a Alibista (dnes Praxe na druhou). Zadání povoluje podstránky, „pokud to vyžaduje informační architektura“; to je tento případ.
- **Praxe na druhou** (dříve Slučovačka, přejmenováno na přání zadavatele) je přesunutá beze změny logiky do komponenty `src/components/MergeGame.astro` (markup i skript 1:1, rekord `kraau:slucovacka:nejlepsi`). V produkci je dál vložená na stránce Easter egg pod kotvou `#hra`; v náhledu má vlastní stránku. Tajné heslo „2048“ ve vyhledávání vede v náhledu na její stránku, v produkci na `#hra`.
- Akademický alibista a Sborovna nesmrtelných zůstávají na stránce Easter egg, nedotčené. Pexeso není.

## Publikační brána

Neschválený obsah se do produkčního buildu nedostane (ověřeno: v `dist` není herní JS, data ani stránky `easter-egg/hry/`; stránka Easter egg je shodná s dosavadní, včetně Slučovačky na `#hra`):

- `astro.config.mjs`, integrace `kraau-arcade-gate`: mimo `astro dev` a bez `PUBLIC_KRAAU_ARCADE_PREVIEW=true` nahradí `Arcade.astro` prázdnou `ArcadeDisabled.astro`.
- `src/lib/arcade.ts` (`arcadePreviewEnabled`): řídí katalog na stránce Easter egg, `getStaticPaths` herních stránek (v produkci prázdné) a odkaz hesla „2048“.

Náhled s reálnou base path:

```sh
GITHUB_REPOSITORY=radekdobrovolny/kraau PUBLIC_KRAAU_ARCADE_PREVIEW=true npx astro build
GITHUB_REPOSITORY=radekdobrovolny/kraau npx astro preview
# http://localhost:4321/kraau/easter-egg/#arcade
```

### Po odborném schválení

1. Recenzent projde `CONTENT-REVIEW.md` a `knowledge-review.json`; `reviewStatus` v `knowledge.js` změnit až po schválení (a znovu vyexportovat JSON).
2. V `.github/workflows/deploy.yml` přidat do kroku buildu `env: PUBLIC_KRAAU_ARCADE_PREVIEW: 'true'` (nebo bránu odstranit a v `src/lib/arcade.ts` vrátit `true`).
3. Zvážit zkrácení upozornění pod hrami (věta „Vývojový náhled 0.2.0…“ v katalogu je už odstraněná na přání zadavatele).
4. Merge do `main` → workflow nasadí. Nic z toho zatím neproběhlo.

## Změněné a nové soubory

| Soubor | Změna |
|---|---|
| `src/components/arcade/Arcade.astro` | Atributy `base` a `game`; výchozí `reviewPreview=false` zachováno. |
| `src/components/arcade/ArcadeDisabled.astro` | Nové: prázdná náhrada pro produkční build. |
| `src/components/arcade/games.js` | Nové: katalog her (název, typ, pravidla, vazby, slug) pro modul i stránky. Název hry Praxe na druhou je zde, v `MergeGame` a na stránce Easter egg. |
| `src/components/arcade/arcade.css` | Přepsáno na tokeny webu; dialog, ovládání Didaktrisu, nové prvky. |
| `src/components/arcade/arcade.js` | Cílené úpravy, herní pravidla beze změny (viz Vylepšení). |
| `src/components/arcade/knowledge.js` | Oprava překlepu v názvu 1.2.4 (shodně s `editorialCorrections` webu). |
| `src/components/MergeGame.astro` | Nové: Praxe na druhou (dříve Slučovačka) vyjmutá ze stránky Easter egg beze změny. |
| `src/pages/easter-egg/index.astro` | Katalog herny v náhledu; jinak beze změny obsahu. |
| `src/pages/easter-egg/hry/[hra].astro` | Nové: stránky her (jen v náhledu, `noindex`, mimo mapu webu). |
| `src/lib/arcade.ts` | Nové: přepínač náhledu. |
| `src/lib/hiddenCurriculum.ts` | Odkaz hesla „2048“ podle režimu. |
| `astro.config.mjs` | Integrace `kraau-arcade-gate`. |
| `docs/kraau-arcade/` | Revizní podklady z balíčku, tato zpráva, screenshoty. Mimo `public/`. |

Globální CSS (`src/styles/global.css`) ani layout webu se nezměnily.

## Vizuální sladění

- **Barvy:** `--ka-*` přemapované na `--muni-blue`, `--muni-blue-dark`, `--arts-blue`, `--soft`, `--line`, `--muted`. Ilustrace karet a plátno Didaktrisu používají modrou plochu a barvy fakult MU jako deska hry Praxe na druhou.
- **Tvar:** ostré rohy, bez stínů a gradientů (výjimkou je stín modálního dialogu, stejný jako u mobilního menu webu).
- **Typografie:** písmo webu, proložené verzálky Muni pro „eyebrow“ prvky, nadpisy v MUNI modré.
- **Komponenty:** tlačítka = `.button` / `.button--light`; karty, reflexe a seznam „Další hry“ = vzhled `.egg-list`; stránky her = `page-heading` + `Breadcrumbs` webu.
- **Tmavý režim:** odstraněn (web ho nemá).
- **KRAAULE:** správně = MUNI modrá, jinde = žlutá, chybí = šedá; vždy i symbol ✓ / ↔ / · a aria popis.
- **Rozvržení:** katalog 3 × 2 (2 sloupce do 900 px, 1 do 560 px); kotvy a fokus mají `scroll-margin-top` kvůli lepivé hlavičce.
- **Nadtitulky:** „Reigns / dilemata“ → „Dilemata“, „Pedagogické Tamagotchi“ → „Virtuální praxe“ (názvy cizích her zná jen část publika).

## Vylepšení (implementováno)

1. **Samostatné stránky her** (viz Shrnutí).
2. **Didaktris na mobilu:** ovládání v jedné řadě šesti tlačítek se symboly (popisky v `aria-label`, na desktopu i text); tah prstem po plátně posouvá po buňkách, tah dolů zrychluje, rychlý tah dolů položí, klepnutí otočí. Plátno má `touch-action: none`, mimo něj stránka scrolluje normálně. Po startu se na mobilu herní plocha posune pod hlavičku; celá hra (plátno, statistiky, ovládání) se vejde do 390 × 844.
3. **Sborovna – balanc (návrh k revizi):** každá situace stojí 2 body z „běžného provozu“ (mimo energii) a nad 70 se kladný posun půlí. Ukazatele se drží zhruba v pásmu 70–85 místo stropu 100 po deseti situacích. Pravidlo je v textu pod ukazateli. Volby dál nejsou řazeny podle kvality; zachována je i shoda dopadů obou variant kromě energie.
4. **Sborovna – shrnutí roku:** kolikrát hráč zvolil energeticky náročnější a úspornější variantu, kolikrát byly stejné a kolik přestávek na obnovu si vzal, s reflektivní otázkou a výslovně bez hodnocení kvality.
5. **Souvislosti:** po prvním omylu se objeví „Proč by to mohlo dávat smysl?“: zopakuje hráčovu čtveřici, vysvětlí, že jiné třídění může být obhajitelné, vypíše zbývající hlediska rámce a vyzve k pojmenování vlastní souvislosti jednou větou.
6. **KRAAULE:** po dohrání tlačítka „Trénovat další slovo“ a „Zkopírovat výsledek“ (mřížka 🟦🟨⬜ bez prozrazení slova).
7. **Potvrzení restartu:** vlastní modální dialog ve stylu webu (nativní `<dialog>`: fokus, Esc, zrušení) místo `window.confirm()`; nově se potvrzuje i restart rozehrané hry Didaktrisu (hra se během dotazu pozastaví).
8. **Skloňování hlášek** („4 písmena“, „1 volný blok“, „za 4 pokusy“).

Neimplementováno záměrně: odkaz z kritérií na hernu (hlavní web má zůstat seriózní; zvážit po schválení) a zkrácení upozornění pod hrami (jsou potřeba pro revizi).

## Výsledky testů

Provedeno (build s base `/kraau/`, Chromium v náhledovém panelu, desktop a 390 × 844):

- `astro check`: 0 chyb, 0 varování. `astro build`: OK. `node scripts/check_search.mjs`: OK (305 záznamů).
- Produkční build bez příznaku: žádný herní kód, data ani stránky `easter-egg/hry/`; Praxe na druhou na `#hra`, heslo „2048“ vede na `#hra`.
- Data: 19 kompetencí a 61 kritérií odpovídá `framework.json` (ID, názvy, přiřazení, strany PDF); 267 odkazů na ID platných; PDF bajtově shodné s `public/kompetencni-ramec-ss.pdf`; `knowledge.js` = `knowledge-review.json`.
- Katalog: všech 6 odkazů na stránky her vrací 200; drobečková navigace a „Další hry“ na stránkách her.
- KRAAULE: chybná délka, opakovaná písmena, diakritika, prohra, reflexe s odkazy, obnova slova dne po reloadu, tréninkový režim, kopírování výsledku, „Trénovat další slovo“.
- Souvislosti: všech 5 sad, správné řešení, omyl s vysvětlením (zůstává otevřené i po promíchání), odhalení.
- Didaktris: bot 60 bloků s rotacemi a nárazy do stěny, 20 řádků, úroveň 5, rekord; pauza a obnovení; po odchodu neběží časovač. Na 390 px: posun tahem, otočení klepnutím, položení rychlým tahem dolů; 6 tlačítek v jedné řadě, celá hra ve výřezu, bez přetečení.
- Sborovna: 24 unikátních dilemat s mindsetem a odkazy; průběh ukazatelů s novým balancem (např. 76/86/19/73 na konci roku); shrnutí roku; dialog: otevření, zrušení, Esc, potvrzení, vycentrování.
- SimSborovna: 10 dní, závěr, deník (testováno v minulém kole; změněn jen dialog restartu).
- Praxe na druhou na vlastní stránce: ovládání, rekord v původním klíči, fotka 2048 s base path. Alibista generuje výmluvy. Konami kód (skutečné klávesy) zapne God Mode. `/kabinet/` přesměrovává.

Neprovedeno / omezení:

- `scripts/validate_site.py` (součást `npm run build`): na testovacím stroji chybí Python; v CI (Ubuntu) poběží.
- Skutečný telefon (gesta byla testována simulovanými dotykovými událostmi), čtečka obrazovky, Safari a Firefox.
- Tajná sedmá oblast a úroveň 4 (soubory beze změny, znovu netestováno).
- Odborná revize obsahu a nového balancu Sborovny.

## Nesrovnalosti v datech

- **1.2.4:** balík měl „ZPROSTŘEDOVÁVÁM“ (překlep z PDF), web má opraveno. Sjednoceno podle webu v `knowledge.js` i `knowledge-review.json`.
- `KNOWLEDGE.reference.url` míří na produkční PDF; herna na webu používá base path a primárně odkazuje na stránku kritéria. Samostatná ukázka (bez `base`) se chová původně.
- Jiné rozdíly nenalezeny.

## Heuristická analýza (Nielsen, závažnost 0–4)

Smysl integrace: ano. Skryté kurikulum už má hravý tón; herna rozšiřuje stejnou myšlenku (odměna za zvídavost) a každou hru vrací k rámci odkazem na kritérium. Riziko je obsahové: herní čísla mohou působit jako hodnocení, proto texty opakovaně říkají, že nejde o měření.

| # | Heuristika | Zjištění | Záv. | Stav |
|---|---|---|---|---|
| 1 | Viditelnost stavu | Skóre, pokusy, den, situace a ukazatele vidět; stavové zprávy přes `role=status`. | 0 | OK |
| 2 | Shoda se skutečností | „Reigns“ a „Tamagotchi“ v nadtitulcích. | 1 | Opraveno |
| 3 | Kontrola a svoboda | Nativní `confirm()`; hry na jedné stránce bez vlastní adresy a historie. | 2 | Opraveno |
| 4 | Konzistence | Cizí vzhled modulu (zaoblení, zelená, tmavý režim). | 3 | Opraveno |
| 5 | Prevence chyb | Restart Didaktrisu bez potvrzení. | 1 | Opraveno |
| 6 | Rozpoznání místo vybavování | Ovládání Didaktrisu jen v aria-label plátna. | 1 | Opraveno (stavový text) |
| 7 | Flexibilita | Klávesnice i dotyk, nově gesta. | 0 | OK |
| 8 | Estetika a minimalismus | Dlouhá stránka se všemi hrami; mnoho upozornění. | 2 | Stránky opraveny, upozornění po schválení |
| 9 | Zotavení z chyb | Gramatika hlášek. | 2 | Opraveno |
| 10 | Nápověda | Chybělo vysvětlení u omylu v Souvislostech. | 1 | Opraveno |

Další nálezy: Didaktris se na mobilu nevešel na obrazovku (2, opraveno); Sborovna narážela na strop 100 (1, opraveno, k revizi).

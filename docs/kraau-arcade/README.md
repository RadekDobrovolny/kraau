# KRAAU Arcade 0.2.0 — vývojový náhled pro odbornou revizi

Primární zdroj: uživatelem dodaný Kompetenční rámec studentů a studentek učitelství pro střední školy, pracovní verze 2026 (31 stran, 19 kompetencí, 61 kritérií). Ministerský rámec není primárním zdrojem herních vazeb. `knowledge.js` je zdroj runtime; `knowledge-review.json` je identický datový export. `CONTENT-REVIEW.md` obsahuje celý revidovaný herní obsah, `COVERAGE.md` tematické pokrytí, `CHANGELOG.md` přemapování. Každá položka má konkrétní kritéria s číslem stránky PDF. Mindset u Sborovny je autorská otázka, nikoli citace. SimSborovna a Sborovna nejsou hodnoticí nástroje; číselné důsledky jsou herní fikcí, rozdíly voleb nejsou empirické pořadí kvality.

## Integrace s Claude Code
1. Pracuj ve vývojové větvi. Ověř, že data webu odpovídají přesně dodanému pracovnímu PDF, případné rozdíly zaznamenej. PDF odkazy používají `#page=N`; přesné lokální odkazy na kritéria doplň pouze podle skutečných rout webu.
2. Zkopíruj `src/components/arcade/` do Astro projektu. Zachovej původní Slučovačku, její klíče úložiště a ostatní easter eggy. Vlož `<Arcade reviewPreview={true} mergeHref="#slucovacka" />` do vývojové stránky, kotvu uprav podle skutečného webu. Bez `reviewPreview` je komponenta skrytá.
3. Zkontroluj vizuální sladění, mobilní ovládání, správnost přesměrování, sestavení projektu a funkčnost původních easter eggů. Nová verze používá pro KRAAULE a obě simulace klíče `.020` (staré stavy zůstávají zachovány); rekord Didaktrisu zůstává.
4. Odborný recenzent ověří každou definici, vazbu, sadu a dilema; zejména alternativní řešení souvislostí a otázky mindsetu. Nejde o odborně validovaný nástroj. Po schválení změň stav položek a až poté zpřístupni hernu. Automaticky nepublikuj.

Herní obsah: 24 slov (bez úplného českého slovníku), pět sad Souvislostí, 24 dilemat Sborovny (všech 19 kompetencí jako primární vazby), 9 aktivit a 12 událostí SimSborovny, Didaktris. Slučovačka se připojuje odkazem na originál, není v samostatné ukázce. Stav uložen místně, žádná síťová databáze. Obsah je přípravný a čeká na odborné připomínky.

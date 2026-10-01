# PRD: Digitální kompetenční rámec pro studující učitelství SŠ

**Stav:** návrh produktu pro první veřejnou verzi, revidovaná informační architektura po zpětné vazbě  
**Zdroj obsahu:** `Kompetenční rámec SŠ.pdf` (pracovní verze z 1. 10. 2026)  
**Zadání platformy:** `KRAAU_navrh_digitalni_platformy.docx`

## 1. Účel a hranice produktu

Vytvořit veřejně dostupný statický web, na kterém lze s kompetenčním rámcem **pracovat**, nejen jej číst. Návštěvník má snadno najít konkrétní oblast, kompetenci nebo kritérium, porozumět rozdílům mezi úrovněmi 0–3, přečíst související mindset a případně otevřít autentickou ukázku z praxe. Web musí být srozumitelný i bez předchozí znalosti struktury KRAAU.

Web slouží především studujícím učitelství, vysokoškolským vzdělavatelům, provázejícím učitelům a dalším lidem zapojeným do pedagogických praxí. Podporuje individuální reflexi i společný rozhovor nad pozorovatelným profesním jednáním. Úrovně se **neprezentují jako známky, žebříček ani definitivní hodnocení osoby**.

První verze neobsahuje účty, ukládání osobních záznamů, sebehodnoticí skóre ani administraci obsahu v prohlížeči. Datový model a stabilní identifikátory však mají umožnit pozdější doplnění soukromé sebereflexe nebo uložených položek bez změny veřejných URL.

### Obsahový rozsah

Zdrojové PDF obsahuje 6 oblastí, 19 kompetencí a podle číslování 61 kritérií. Každé kritérium má text pro čtyři úrovně (0, 1, 2, 3) a mindset. Počet i přiřazení položek se musí potvrdit při redakčním převodu z PDF; tento součet není náhradou kontroly obsahu. Součástí webu budou také úvodní metodické texty, popisy oblastí, odkazy na použité zdroje a informace o původu rámce.

1. Obsah vyučovaného oboru a jeho didaktické zprostředkování
2. Plánování výuky
3. Podmínky pro učení
4. Podpora učení
5. Zpětná vazba a hodnocení
6. Profesní spolupráce, profesní sebepojetí, profesní rozvoj a péče o sebe

## 2. Klíčové situace použití

| Uživatel | Potřeba | Navržená cesta |
| --- | --- | --- |
| Studující | Porozumět jednomu kritériu a možnostem dalšího rozvoje | Hledání nebo oblast → kompetence → kritérium → srovnání úrovní, mindset, ukázky |
| Provázející učitel | Otevřít přesný deskriptor při zpětné vazbě | Hledání podle pojmu či čísla → trvalý odkaz na kritérium nebo konkrétní úroveň |
| Vysokoškolský vzdělavatel | Najít související kritéria pro plánování výuky a praxí | Přehled oblastí → kompetence → seznam kritérií; kombinované filtry |
| Nový návštěvník | Pochopit, co úrovně znamenají a jak s nimi zacházet | „Jak s rámcem pracovat“ → ukázka čtení jednoho kritéria → samotný rámec |

Úspěšná hlavní cesta trvá nejvýše několik kroků: návštěvník začne tématem z výuky nebo výběrem jedné ze šesti oblastí. V přehledu rozbalí oblast a otevře přímo konkrétní kritérium; nemusí navštěvovat samostatnou stránku kompetence ani číst metodický text.

## 3. Informační architektura

**Hlavní navigace:** `Procházet rámec` · `Jak rámec použít` · ikona `Hledat`. Procházení vede přímo na přehled na úvodní stránce; samostatná adresa `/ramec/` zůstává funkční. Hledání nemá velký formulář na úvodu, je dostupné z hlavičky. Stránky o úrovních, ukázkách a projektu zůstávají dostupné z relevantního kontextu či patičky, ale nekonkurují hlavnímu vstupu. Přehled rámce nabízí šest rozbalovacích oblastí; uvnitř seskupuje přímé odkazy na kritéria podle kompetencí. Úplná hierarchie **oblast → kompetence → kritérium → úroveň → ukázka** zůstává v obsahu a URL, není však vynucenou posloupností kliknutí.

| Stránka | Obsah a funkce | Příklad URL |
| --- | --- | --- |
| Úvod / pracovní rozcestník | Obrazová hero sekce s plným názvem rámce a jeho účelem; bez velkého hledacího pole. Hned za ní šest rozbalovacích oblastí s přímými odkazy na kritéria | `/` |
| Přehled rámce | Šest rozbalovacích oblastí, kompetence jako skupiny a přímé odkazy na všechna kritéria; bez další vrstvy navigace | `/ramec/` |
| Oblast | Úvodní text oblasti, seznam kompetencí a kritérií, odkazy na relevantní zdroje | `/oblasti/2/` |
| Kompetence | Název, nadřazená oblast a přehled všech jejích kritérií | `/kompetence/2-1/` |
| Kritérium | Název a číslo, cesta v hierarchii, čtyři deskriptory, mindset, ukázky, sousední kritéria | `/kriteria/2-1-1/` |
| Hledání | Výsledky až po zadání dotazu; volitelný filtr oblasti v rozbaleném upřesnění; dotaz a filtr v URL | `/hledat/` |
| Úrovně | Vysvětlení stupnice 0–3, příklad jejího čtení, upozornění na formativní účel | `/urovne/` |
| Ukázky z praxe | Seznam skutečně publikovaných ukázek s filtrem podle oblasti, kritéria, úrovně a typu | `/ukazky/` |
| Detail ukázky | Kontext situace, artefakt či transkript, komentář, vazba na kritérium a úroveň, zdroj a souhlas | `/ukazky/{slug}/` |
| Jak s rámcem pracovat | Krátké postupy pro studující, provázející a vzdělavatele; práce s důkazy a mindsetem | `/jak-pracovat/` |
| O projektu | Původ rámce, autoři/garanti po potvrzení, stav verze, zdrojové dokumenty, literatura a kontakt | `/o-projektu/` |

URL mají být trvalé a kopírovatelné. Přímý odkaz na úroveň používá kotvu na detailu kritéria, například `/kriteria/2-1-1/#uroven-2`. Drobečková navigace ukazuje konkrétní názvy, například `Rámec / Plánování výuky / 2.1 Nastavuji cíle výuky / Kritérium 2.1.1`. Na mobilu zůstává celá cesta dostupná, ale může se zalamovat.

### Detail kritéria: nejdůležitější obrazovka

1. V záhlaví zobrazit kód, plný název a nadřazenou oblast i kompetenci. V blízkosti názvu nabídnout akci kopírování odkazu.
2. Úrovně 0–3 představit jako **rovnocenné popisy profesního jednání** v jedné čitelné posloupnosti na desktopu i telefonu. Označení „Úroveň“ patří jednou do hlavičky seznamu; jednotlivé řádky mají pouze zřetelnou číslici v kruhu. Opakovaný nadpis „Čtyři popisy profesního jednání“ není třeba vizuálně zdůrazňovat. Nepřidávat přepínač režimů ani nezakrývat tři ze čtyř úrovní; přímá kotva zvýrazní příslušný oddíl.
3. Mindset zobrazit jako samostatný obsahový oddíl navázaný na kritérium, **nikoliv jako pátou úroveň**. Vysvětlivka má v jedné větě uvést, že jde o profesní přesvědčení, které stojí za jednáním.
4. U úrovně zobrazit navázanou ukázku pouze tehdy, je-li publikovaná. Prázdný stav neopakovat čtyřikrát na každém detailu.
5. Po mindsetu nabídnout tři krátké reflexní otázky: pozorovaná situace, nejbližší popis jednání a jeden další krok. Přechod na předchozí a další kritérium umístit hned za záhlaví a ponechat jej dostupný při posouvání stránky; pořadí pokračuje přes hranice kompetencí. Na konci uvést zdroj v PDF. Tisková podoba detailu ukazuje všechny úrovně i mindset.

Není vhodné kopírovat širokou PDF tabulku. Dlouhé české formulace musí mít pohodlnou délku řádku a mobilní použití nesmí vyžadovat vodorovné posouvání.

### Hledání a filtrování

- Jedno hledání pokrývá čísla kritérií, názvy oblastí a kompetencí, text kritérií, deskriptory, mindsety a publikované ukázky. Výsledky seskupit podle typu: kritéria a ukázky. U kritéria uvést nalezenou úroveň a krátký výřez odpovídajícího textu.
- Pro první verzi stačí jeden doplňkový filtr oblasti schovaný v rozbalovacím upřesnění. Filtry úrovně, kompetence a typu výsledku nepřidávat, dokud není doloženo, že pomáhají častému úkolu; zvláště nezobrazovat filtr ukázek, které dosud nejsou publikované.
- Dotaz a případný filtr oblasti mají být v URL, aby šlo výsledek sdílet. Bez dotazu nezobrazovat automaticky všech 61 kritérií. Po zadání zobrazit počet výsledků a srozumitelný stav bez výsledků.
- Vyhledávání má být tolerantní k diakritice a běžným překlepům, ale zobrazovat původní české znění. Kód typu `2.1.1` musí vrátit přesnou položku před volnějšími shodami.
- Pro první verzi stačí index vytvořený při buildu a hledání v prohlížeči. Doporučená knihovna je **MiniSearch** nad strukturovanými záznamy jednotlivých deskriptorů, kritérií a ukázek; metadata umožní přesný kombinovaný filtr. Při vypnutém JavaScriptu zůstane veškerý rámec dostupný procházením odkazů, hledání zobrazí krátkou informaci o požadavku na JavaScript.

## 4. Obsah a redakční model

Zdrojovým pravdivým zněním první verze je dodané PDF. Texty v katalogu musí být v úplnosti a bez tichého přeformulování. Obsah webu bude uložen jako verzované lokální soubory, nikoli jako zkopírované HTML tabulky.

| Entita | Povinná pole | Vazby / poznámky |
| --- | --- | --- |
| Oblast | `id`, `nazev`, `uvod`, `poradi`, `zdrojoveStrany` | Má kompetence a případné odkazy na oborové rámce |
| Kompetence | `id`, `oblastId`, `nazev`, `poradi` | Např. `2.1`; obsahuje kritéria |
| Kritérium | `id`, `kompetenceId`, `nazev`, `mindset`, `urovne[0..3]`, `poradi`, `zdrojovaStrana` | Např. `2.1.1`; úrovně jsou čtyři samostatná textová pole |
| Ukázka | `id`, `nazev`, `typ`, `kontext`, `obsah/soubor`, `komentar`, `vazby`, `stavPublikace`, `zdroj/souhlas` | Může být přiřazena k více dvojicím kritérium–úroveň; publikovat až po schválení |
| Verze rámce | `oznaceni`, `datum`, `status`, `poznamkaKeZmenam` | Viditelná v „O projektu“; URL kritérií zůstávají stabilní |

Ilustrátory mohou být transkript výuky, příprava na výuku, reflexe studujícího, fotografie či jiný artefakt nebo komentovaný dokument. Každá ukázka musí uvést kontext, aby nepůsobila jako univerzální recept. U fotografií, artefaktů a přepisů je před zveřejněním nutné potvrdit souhlasy a anonymizaci. V první verzi se veřejně zobrazují pouze skutečně dodané a schválené ukázky; web nevytváří fiktivní příklady.

### Převod z PDF a obsahová kontrola

PDF je široká tabulková sazba, jejíž automatická extrakce může promíchat pořadí buněk. Každý deskriptor je proto nutné ověřit proti zobrazené stránce PDF. Redakční checklist před spuštěním:

- Ověřit 6 oblastí, 19 kompetencí, 61 jedinečných čísel kritérií; u každého právě úrovně 0–3 a mindset. Nesoulad zastaví publikaci.
- Ručně srovnat texty a vazby s PDF, včetně diakritiky, lomítek, odstavců a zdrojových odkazů. Uchovat číslo zdrojové strany pro dohledání.
- Zaznamenat nejasnosti v předloze k rozhodnutí garanta. V dodaném PDF se například v záhlaví pokračování kompetence 1.2 objevuje `1.1` a část čísel v tabulkách není v pořadí čtení textové extrakce. Web nemá takové rozpory potichu „opravovat“.
- Uvést viditelně, že podklad je **pracovní verze určená k odbornému připomínkování** a dosud neprošel jazykovou korekturou ani finální sazbou. Definitivní veřejné znění a případné opravy musí schválit obsahový garant.
- Úvodní metodické vysvětlení a literatura nesmějí při převodu zmizet; mohou být zpřístupněny v „Jak s rámcem pracovat“ a „O projektu“ s odkazy na původní PDF.

## 5. Vzhled a chování rozhraní

Směr: moderní univerzitní nástroj s klidnou typografií, jasnou hierarchií, střídmým použitím barvy a jemným lidským akcentem. Prioritou je orientace při opakované práci, nikoli výrazná marketingová grafika. Úvod má nejprve jednoznačně pojmenovat rámec, poté ukázat jeho skutečnou strukturu. Hero může využít střídmý obraz ze školního prostředí s textem přímo přes fotografii; nesmí vytlačit první oblast mimo úvodní viewport. Žádné dekorativní karty v kartách ani dlouhé úvodní bloky.

### Barevná paleta

| Role | Barva | Použití |
| --- | --- | --- |
| Text / „ink“ | `#1F2D31` | Hlavní text, nadpisy |
| Primární tmavě zelená | `#155B4D` | Navigace, odkazy, primární akce |
| Sekundární modrá | `#245E79` | Doplňkové odkazy, informace, související obsah |
| Teplý akcent | `#A64D36` | Drobné zvýraznění, aktivní značka sekce; ne jako jediný indikátor stavu |
| Povrch | `#FFFFFF` | Stránka a hlavní čtecí plocha |
| Jemný podklad | `#F3F6F5` | Oddělení filtrů a sekundárních ploch |
| Linka | `#D6E0DD` | Hranice oddílů, pole a navigace |
| Vedlejší text | `#526269` | Metadata a vysvětlivky |

Před realizací ověřit kontrast podle WCAG 2.2 AA pro skutečné kombinace textu a pozadí. Úrovně 0–3 odlišovat číslem a nadpisem, nikoli hodnotícím barevným gradientem od červené k zelené. Barvu používat nejvíce v navigaci, aktivním stavu a tenkých oddělovacích prvcích.

**Písmo:** lokálně hostované bezplatné `Source Sans 3` pro rozhraní i dlouhé deskriptory; `Source Serif 4` střídmě pro úvodní či metodické nadpisy. Obě rodiny mají charakter vhodný pro vzdělávací projekt; před nasazením ověřit české znaky v konkrétních souborech a přiložit jejich licence. Běžný text alespoň 16 px, dostatečná výška řádku, omezená šířka dlouhých odstavců. Čísla kritérií a úrovní držet vizuálně konzistentní.

**Ikony:** Font Awesome Free, jen konkrétní potřebné ikony ze SVG balíčků (hledání, filtr, kopírování odkazu, externí odkaz, rozbalení, typ média). Textová značka zůstává u neznámých akcí; samotná ikona má přístupný název a tooltip. Nepoužívat ikony jako náhradu názvů oblastí nebo úrovní.

**Responzivita:** úvodní hledání a přehled šesti oblastí fungují od šířky 320 px. V mobilní navigaci je hledání okamžitě dostupné, volitelný filtr oblasti je schovaný v nativním rozbalovacím prvku. Interaktivní prvky mají zřetelný stav fokus, ovládání klávesnicí a dotykový cíl přibližně 44 × 44 px. Omezit animace a respektovat `prefers-reduced-motion`.

## 6. Technické řešení

- **Astro** v režimu statického generování: předrenderované stránky pro všechny oblasti, kritéria, metodiku a publikované ukázky. Veřejný obsah je čitelný bez spuštění aplikace v prohlížeči.
- **Tailwind CSS** pro základní utility a návrhové tokeny; pojmenované komponenty a doplňkové CSS pro čtecí typografii, srovnání úrovní a tisk. Neodvozovat vizuální identitu z výchozí barevné sady frameworku.
- **Lokální obsahové kolekce Astro** se schématem a kontrolou vazeb při buildu. Data rozdělit podle oblastí/kritérií, aby byly redakční změny dohledatelné v Git historii. Generovat index pro MiniSearch v rámci buildu. Výstupní JSON musí být přiměřeně malý a načítat se až při otevření hledání.
- **Font Awesome Free** jako vybrané SVG ikony z npm balíčků, vložené při buildu; vlastní fonty uložené lokálně. Web nemá záviset na runtime CDN pro svůj základní vzhled a funkci.
- **GitHub Pages** přes GitHub Actions a oficiální Astro deploy action. V konfiguraci nastavit `site` a podle typu repozitáře `base`; všechny interní odkazy, assety a URL výsledků hledání musí fungovat i pod cestou `/<repo>/`. Obsah se publikuje novým buildem z repozitáře, bez serveru a databáze.
- Každá stránka má český `<html lang="cs">`, smysluplný titulek, metadata a kanonickou adresu. Připravit sitemap, čitelnou stránku 404 a tiskové CSS. PDF lze nabídnout jako původní zdrojový dokument, ale nikdy jako jedinou cestu k obsahu.

Navržená struktura repozitáře po založení aplikace: `src/content/` (schválená data), `src/pages/` (trasy), `src/components/` (navigace, úrovně, hledání, ukázky), `src/styles/` (tokeny a tisk), `public/` (fonty a schválené soubory), `.github/workflows/` (build a nasazení).

## 7. Přístupnost, kvalita a měřítka dokončení

Web musí být použitelný klávesnicí, čtečkou obrazovky a na telefonu. Struktura stránky používá správné nadpisy, viditelné označení aktivní úrovně, textové popisky formulářů a odkazů, smysluplný alt text k publikovaným vizuálním ukázkám a přístupné chybové/prázdné stavy. Cílová úroveň je **WCAG 2.2 AA**. Vyhledávání a filtry oznamují počet výsledků, ale při psaní nepřesouvají fokus.

### Akceptační kritéria první verze

1. Na úvodu je úplný rozbalovací přehled šesti oblastí a lze z něj otevřít všech 61 kritérií; každá položka má trvalou adresu a fungující drobečkovou navigaci.
2. Všech 61 ověřených kritérií obsahuje přesně čtyři úplné deskriptory a mindset. Automatická validace odhalí chybějící, duplicitní nebo neplatné vazby; obsahový garant schválí srovnání s PDF.
3. Hledání vrátí číslo kritéria i český termín s/bez diakritiky. Dotaz a volitelnou oblast lze sdílet odkazem; prázdný dotaz nezahltí návštěvníka seznamem všech kritérií.
4. Detail kritéria umožní čitelné porovnání všech úrovní bez přepínání na desktopu i mobilu. Kotva na úroveň vede na správný oddíl. Mindset je jasně odlišný od úrovní. Předchozí a další kritérium jsou dostupné při čtení a navazují i mezi kompetencemi.
5. Zveřejněné ukázky mají přesnou vazbu na kritérium a úroveň; tam, kde nejsou, rozhraní neslibuje neexistující obsah.
6. Přímé načtení libovolné URL a obnovení stránky funguje na skutečné adrese GitHub Pages včetně případného `base` prefixu. Odkazy, fonty, ikony a hledání se načtou bez chyby.
7. Test na šířkách telefonu, tabletu a desktopu neukáže vodorovné posouvání ani překryv textu. Projde klávesnicová kontrola, kontrola čtečkou obrazovky a automatický audit přístupnosti; nalezené chyby blokující hlavní cestu jsou vyřešeny.
8. Tisk detailu obsahuje všechna čtyři znění, mindset, název/kód kritéria, zdroj a verzi rámce. Informace o pracovním stavu dokumentu je veřejně viditelná.

## 8. Pořadí realizace a otevřená rozhodnutí

1. **Redakční základ:** převést a zkontrolovat obsah, vyřešit rozpory zdroje s garantem, schválit názvosloví a označení veřejné verze.
2. **Použitelný rámec:** vytvořit přehledy, detaily kritérií, responzivní srovnání úrovní, mindset, metodiku a tisk.
3. **Práce s obsahem:** doplnit vyhledávání, kombinované filtry, sdílené URL a navigaci mezi souvisejícími položkami.
4. **Ukázky a publikace:** vložit první schválené ilustrátory, provést přístupnost a obsahovou kontrolu, nasadit na GitHub Pages.

Před zveřejněním musí garant rozhodnout, zda lze publikovat aktuální pracovní znění, jak uvést autorství a instituci, kdo schvaluje opravy PDF, jaká je licence textů a zda existují první ukázky s potřebnými souhlasy. Tyto otázky nebrání přípravě webu ani datového modelu, ale určují obsah veřejného vydání.

## 9. Podklady a technické reference

- Interní podklady v kořeni projektu: `Kompetenční rámec SŠ.pdf`; `KRAAU_navrh_digitalni_platformy.docx`.
- [Astro: nasazení na GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) a [Astro: práce s obsahem](https://docs.astro.build/en/guides/content-collections/).
- [Astro: Tailwind CSS](https://docs.astro.build/en/guides/styling/), [Font Awesome: npm SVG balíčky](https://docs.fontawesome.com/web/setup/packages), [MiniSearch: možnosti hledání a filtrování](https://github.com/lucaong/minisearch).

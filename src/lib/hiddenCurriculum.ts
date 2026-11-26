/*
  KRAAU: Skryté kurikulum.
  Hravá vrstva webu oddělená od oficiálního obsahu rámce: není ve vyhledávacím indexu,
  v mapě webu ani v datech kritérií. Všechno se odehrává jen v prohlížeči.
*/

export interface SecretLevel { title: string; text: string }

/* Neoficiální úroveň 4: objeví se po dvojkliku na číslo 3 u každého kritéria.
   Vtipná nadsázka, ale vždy postavená na skutečném cíli kritéria. */
export const secretLevels: Record<string, SecretLevel> = {
  '1.1.1': { title: 'Oborová nákaza', text: 'Žáci si z hodiny neodnesou jen fakta, ale i způsob myšlení oboru. Poznám to tak, že se o přestávce přou jako odborníci: s argumenty a zdroji.' },
  '1.1.2': { title: 'Detektor fake news', text: 'Žáci se zeptají „a jaký k tomu máte zdroj?“ dřív, než to stihnu říct já. Beru to jako největší pochvalu, ne jako drzost.' },
  '1.1.3': { title: 'Technologie bez blikání', text: 'Technologie volím podle cíle, ne podle toho, co je zrovna nové. Když vypadne wi-fi, hodina pokračuje, protože učení nikdy nestálo na aplikaci.' },
  '1.1.4': { title: 'Kurikulární jasnovidec', text: 'Vím, co žáci znají ze základky, a tuším, co po nich bude chtít vysoká. Navazuji na obojí, takže věta „tohle jsme nikdy nebrali“ ve třídě nezazní.' },
  '1.2.1': { title: 'Překladatel z odborštiny', text: 'Složitou věc vysvětlím třemi různými způsoby, i když se žák zeptá v 7:58 na chodbě. Srozumitelnost u mě nekončí s připravenou prezentací.' },
  '1.2.2': { title: 'Konec otázky „K čemu nám to bude?“', text: 'Žáci na otázku „k čemu nám to bude“ odpovídají dřív, než ji někdo položí. A jejich odpověď je lepší než ta moje z přípravy.' },
  '1.2.3': { title: 'Archeolog prekonceptů', text: 'Než začnu vykládat, vykopu, co si žáci o tématu myslí. Včetně mylných představ, které by jinak v klidu přežily i maturitu.' },
  '1.2.4': { title: 'Bourač předmětových zdí', text: 'Žáci přestali mezi předměty vidět zdi. Kolega z jiného předmětu se mě ptá, co jsme probírali, protože se na to žáci odvolávají i u něj.' },
  '1.2.5': { title: 'Gramotnost v utajení', text: 'Čtenářskou, digitální i finanční gramotnost rozvíjím tak přirozeně, že si toho žáci všimnou, až když jim to řeknu. A já jim to řeknu, protože explicitnost je půlka kouzla.' },
  '2.1.1': { title: 'Cíl jako navigace', text: 'Každá aktivita v hodině má jasnou odpověď na otázku „proč to děláme“. Která ji nemá, z přípravy vypadne, i kdyby byla sebezábavnější.' },
  '2.1.2': { title: 'Ověřitelný optimista', text: 'Píšu cíle, u kterých předem vím, podle čeho poznám, že se naplnily. Formulace „žáci pochopí“ u mě odešla do zaslouženého důchodu.' },
  '2.1.3': { title: 'Zóna nejbližšího zápalu', text: 'Úkoly ladím tak, aby byly těžké akorát. Žáci se zapotí, ale nevzdají to. „To je moc lehký“ i „to nedáme“ zní ve třídě stejně vzácně.' },
  '2.1.4': { title: 'Učitel celého člověka', text: 'V dlouhodobém plánu mám kromě učiva i cíle pro spolupráci, samostatnost a odvahu ozvat se. A vyhodnocuji je stejně poctivě jako znalosti.' },
  '2.2.1': { title: 'Metodický minimalista', text: 'Metodu nevybírám proto, že je zrovna v kurzu, ale proto, že vede k cíli. Někdy to znamená obyčejný výklad, a je to tak správně.' },
  '2.2.2': { title: 'Repertoár bez opakování', text: 'Žáci nevědí, co je dnes čeká, ale vždycky vědí, proč to děláme. Pestrost u mě slouží učení, ne efektu.' },
  '2.2.3': { title: 'Mistr řízeného chaosu', text: 'Pokus nevyjde a třída je nadšená, protože teprve teď začíná pravé bádání. Závěr žáci formulují sami a obhájí ho.' },
  '2.2.4': { title: 'Halucinace pod kontrolou', text: 'Žáci umí umělou inteligenci používat i přistihnout při omylu. Když jim chatbot sebevědomě vymyslí zdroj, poznají to dřív než já.' },
  '2.2.5': { title: 'Kurátor žákovské tvorby', text: 'Výstupy žáků jsou tak různé, že je nejde opsat ani od sebe navzájem. Hodnotím je podle kritérií, a přesto mě pokaždé překvapí.' },
  '2.2.6': { title: 'Architekt třídy', text: 'Lavice přestavíme za 40 sekund a žáci vědí proč. Kruh, ostrůvky i klasické řady volím podle cíle hodiny, ne podle toho, jak jsem třídu zdědil/a.' },
  '2.3.1': { title: 'Kopírka si oddechne', text: 'Materiály vybírám tak promyšleně, že jich je méně a fungují lépe. Pracovní list bez jasného cíle u mě skončí v recyklaci, ne na lavici.' },
  '2.3.2': { title: 'Materiál na míru', text: 'Jeden text mám ve třech úrovních náročnosti a žáci si dobře vybírají sami. Nikdo se necítí označený a všichni míří ke stejnému cíli.' },
  '2.4.1': { title: 'Pán času', text: 'Hodina končí shrnutím, ne zvoněním. A když se plán rozpadne, vím, kterou aktivitu obětovat, aniž by utrpěl cíl.' },
  '2.5.1': { title: 'Individualizace bez vyhoření', text: 'Plán upravuji pro různé žáky, a přesto nepíšu třicet příprav. Umím najít jeden společný cíl a k němu různé cesty.' },
  '3.1.1': { title: 'Respekt i za zavřenými dveřmi', text: 'O žácích mluvím s respektem, i když nás neslyší, a to i na poradě a v kabinetu. A když to kolega nedělá, umím to v klidu pojmenovat.' },
  '3.1.2': { title: 'Člověk slova', text: 'Žáci vědí, že co slíbím, platí, včetně testů opravených do týdne. Důvěra je taková, že se nebojí přiznat, že něco nevědí.' },
  '3.1.3': { title: 'Tvůrce třídní kultury', text: 'Žáci si pomáhají, i když se zrovna nedívám. Soutěž ve třídě končí potleskem i pro ty, kdo prohráli, ne posměchem.' },
  '3.1.4': { title: 'Klid na rozbouřené vlně', text: 'Kde by jiní vybuchli, já se nadechnu, pojmenuji, co cítím, a pokračuji. Žáci se tak učí regulovat emoce, aniž by o tom slyšeli jedinou přednášku.' },
  '3.2.1': { title: 'Socioemoční vzor', text: 'Když udělám chybu ve vztahu k žákovi, omluvím se před třídou. Žáci to pak dělají taky, protože to viděli, ne protože to bylo v osnovách.' },
  '3.2.2': { title: 'Restorativní nindža', text: 'Konflikt neřeším jen trestem, ale tak, aby se vztahy opravily. Žáci pravidla hájí, protože je pomáhali vytvářet.' },
  '3.2.3': { title: 'Citlivý radar', text: 'Všimnu si i tichých signálů, že žák není v pořádku, a vím, komu to předat. Netvářím se, že všechno zvládnu sám/sama, a právě proto pomoc přijde včas.' },
  '3.2.4': { title: 'Bezpečí bez paniky', text: 'Žáci znají rizika i postupy tak dobře, že by evakuaci zvládli i beze mě. Bezpečí ve třídě je samozřejmost, ne strašení.' },
  '3.2.5': { title: 'Kyberstrážce', text: 'Ve virtuální třídě platí jasná pravidla a žáci je dodržují i ve skupinovém chatu, kam nevidím. Vědí totiž, proč tam jsou.' },
  '3.2.6': { title: 'Mistr improvizace', text: 'Projektor nefunguje, polovina třídy chybí a do hodiny vstoupila ředitelka. Přesto vzniká jedna z mých nejlepších hodin.' },
  '4.1.1': { title: 'Cíl na tabuli i v hlavách', text: 'Když se kohokoli kdykoli v hodině zeptám „kam míříme?“, odpoví vlastními slovy. A většinou trefně.' },
  '4.2.1': { title: 'Zadání bez dovysvětlování', text: 'Moje zadání třída pochopí napoprvé. Otázka „a co máme dělat?“ zazní jen tehdy, když chce někdo udělat něco navíc.' },
  '4.2.2': { title: 'Zaklínač tichých žáků', text: 'Do diskuse se zapojí i ti, kdo obvykle mlčí. Ne proto, že je vyvolám, ale protože dostali prostor, který jim sedí.' },
  '4.2.3': { title: 'Diskuse bez rozhodčího', text: 'Žáci na sebe reagují a argumentují tak, že můžu na chvíli zmizet z centra pozornosti. Moje nejčastější replika je „co na to ostatní?“' },
  '4.2.4': { title: 'Lešení, které mizí', text: 'Podporu stavím jako lešení a postupně ji odebírám. Na konci žáci zvládnou úkol sami a ani si nevšimli, že jsem lešení rozebral/a.' },
  '4.2.5': { title: 'Skupinová práce bez černého pasažéra', text: 'Ve skupině pracují všichni, protože role, odpovědnost i reflexe jsou promyšlené. Věta „to celé udělal Honza“ ve třídě nezazní.' },
  '4.3.1': { title: 'Sběratel důkazů o učení', text: 'V každé chvíli hodiny vím, kdo už rozumí a kdo ještě ne. A žáci to o sobě vědí taky, aniž by čekali na známku.' },
  '4.3.2': { title: 'Plán B, C i D', text: 'Když se učení zasekne, změním tempo, zadání nebo cestu dřív, než se ve třídě objeví prázdné pohledy.' },
  '4.4.1': { title: 'Učím je učit se', text: 'Žáci umí říct, jakou strategii učení zvolili a proč. Před testem se učí chytře, ne jen dlouho.' },
  '4.4.2': { title: 'Postupně postradatelný/á', text: 'Žáci plánují, volí strategie a hodnotí své učení tak samostatně, že se cítím trochu postradatelně. Přesně o to šlo.' },
  '5.1.1': { title: 'Zpětná vazba bez „dobrý“', text: 'Moje zpětná vazba je tak konkrétní, že z ní žák pozná, co přesně udělat příště. Slovo „dobrý“ používám jen jako začátek věty.' },
  '5.1.2': { title: 'Kritéria známá nazpaměť', text: 'Žáci hodnoticí kritéria nejen znají, ale pomáhali je tvořit. Výsledek hodnocení je pro ně potvrzení, ne překvapení.' },
  '5.1.3': { title: 'Zpětná vazba, která se čte', text: 'Žáci si mou zpětnou vazbu opravdu přečtou a použijí, protože přišla včas a dá se podle ní jednat. Nekončí v šuplíku hned vedle známky.' },
  '5.2.1': { title: 'Hodnocení s vysokým rozlišením', text: 'Pokrok žáka vidím i tam, kde se známka nepohnula. A umím mu ho ukázat tak, aby ho to posunulo dál.' },
  '5.2.2': { title: 'Třída plná recenzentů', text: 'Žáci si navzájem dávají zpětnou vazbu podle kritérií tak dobře, že by jim leckterý oponentní posudek mohl závidět.' },
  '5.2.3': { title: 'Sebehodnocení bez „asi dobrý“', text: 'Žáci zhodnotí svou práci přesně, včetně toho, co příště zkusí jinak. Když se jejich hodnocení liší od mého, je to dobrý začátek rozhovoru.' },
  '5.3.1': { title: 'Otázka na odpověď', text: 'Na odpověď žáka nereaguji jen „správně“, ale otázkou, která ho posune dál. Žáci si zvykli, že dobrá odpověď je začátek, ne konec.' },
  '5.3.2': { title: 'Sokratovské osvícení', text: 'Dokážu přiznat vlastní chybu před celou třídou, aniž bych ji zpětně prohlásil/a za záměrnou didaktickou strategii.' },
  '6.1.1': { title: 'Partnerství s provázejícím', text: 'Z hospitací se stal rozhovor dvou profesionálů. Provázející učitel si ode mě občas odnese nápad, ne jen poznámky.' },
  '6.1.2': { title: 'Tandem bez kolize', text: 'V tandemu se střídáme tak plynule, že žáci nepoznají, kdo připravoval kterou část. Poznají jen, že se učí lépe.' },
  '6.1.3': { title: 'Týmový hráč', text: 'Asistentka pedagoga je pro mě partnerka, ne pomocnice u kopírky. Společně plánujeme, jak podpořit konkrétní žáky.' },
  '6.1.4': { title: 'Diplomat s rodiči', text: 'Rodičům píšu i tehdy, když se daří, a proto mi věří, když je třeba řešit problém. První kontakt s rodinou u mě není stížnost.' },
  '6.2.1': { title: 'Vím, kdo jsem (ve třídě)', text: 'Své profesní sebepojetí umím formulovat, ověřit i změnit. Učitel, kterým chci být, a učitel, kterého vidí žáci, se k sobě přibližují.' },
  '6.2.2': { title: 'Rozvoj s termínem', text: 'Své rozvojové cíle nejen sepíšu, ale i splním. Rozvojový plán pro mě není dokument pro garanta, ale mapa, podle které opravdu jdu.' },
  '6.2.3': { title: 'Reflexe, která něco mění', text: 'Po hodině nemyslím jen na to, co se nepovedlo. Vím, co příště udělám jinak, a pak to opravdu udělám jinak.' },
  '6.2.4': { title: 'Zpětnovazební magnet', text: 'O zpětnou vazbu si říkám dřív, než mi ji někdo stihne nabídnout. Kritiku beru jako data, ne jako útok.' },
  '6.3.1': { title: 'Rovnováha s víkendem', text: 'Víkend mám na odpočinek, ne na opravování testů. A když se rovnováha začne naklánět, všimnu si toho dřív než moje okolí.' },
  '6.3.2': { title: 'Pedagogický zen', text: 'Na zátěž reaguji včas, vědomě využívám strategie zvládání stresu a neotevírám pracovní e-maily v neděli ve 23:47.' },
};

/* Tajná sedmá oblast: na úvodní stránce po sedmi kliknutích na logo. */
export const seventhArea = {
  title: 'Umění přežít učitelství',
  competences: [
    { id: '7.1', title: 'Zachovávám si smysl pro humor', criteria: [
      ['7.1.1', 'Rozlišuji mezi pedagogickou krizí a situací, které se budu za pět let smát.'],
      ['7.1.2', 'Dokážu přiznat, že nevím, aniž by se zhroutila má profesní identita.'],
    ] },
    { id: '7.2', title: 'Orientuji se v neformálním kurikulu školy', criteria: [
      ['7.2.1', 'Vím, komu ve škole skutečně funguje tiskárna.'],
      ['7.2.2', 'Dokážu rozpoznat poradu, která mohla být e-mailem.'],
    ] },
    { id: '7.3', title: 'Odolávám pedagogickému mesiášství', criteria: [
      ['7.3.1', 'Přijímám skutečnost, že nezachráním všechny žáky, školství ani civilizaci během jednoho pololetí.'],
    ] },
  ],
  note: 'Tato oblast nebyla schválena žádnou pracovní skupinou. Právě proto vznikla tak rychle.',
};

/* Tajná hesla ve vyhledávání. Klíče jsou bez diakritiky a malými písmeny. */
export interface SearchEgg { title: string; text: string; link?: { label: string; path: string } }
export const searchEggs: Record<string, SearchEgg> = {
  '42': {
    title: 'Odpověď na otázku života, vesmíru a vůbec',
    text: 'Bohužel ne na otázku, kolik kritérií má tento rámec. Těch je 61.',
  },
  'kava': {
    title: 'Kritérium 0.0.1: Před první hodinou piji kávu',
    text: 'Úroveň 3: Vím, ve kterém kabinetu je jediný funkční kávovar, a sdílím tuto znalost s kolegy.',
    link: { label: 'Péče o sebe: kompetence 6.3', path: 'kompetence/6-3/' },
  },
  'kafe': {
    title: 'Kritérium 0.0.1: Před první hodinou piji kávu',
    text: 'Úroveň 3: Vím, ve kterém kabinetu je jediný funkční kávovar, a sdílím tuto znalost s kolegy.',
    link: { label: 'Péče o sebe: kompetence 6.3', path: 'kompetence/6-3/' },
  },
  'komensky': {
    title: 'Učitel národů hledá názornost',
    text: 'A taky by se asi divil, že škola hrou potřebuje 61 kritérií. Ke srozumitelnému výkladu má nejblíž kritérium 1.2.1.',
    link: { label: 'Kritérium 1.2.1', path: 'kriteria/1-2-1/' },
  },
  'dokonaly ucitel': {
    title: 'Dokonalého učitele jsme nenašli. A to je v pořádku.',
    text: 'Rámec popisuje cestu, ne cílovou stanici. Úrovně nejsou nálepky.',
    link: { label: 'Co znamenají úrovně', path: 'jak-pracovat/#urovne' },
  },
  'dokonala ucitelka': {
    title: 'Dokonalého učitele jsme nenašli. A to je v pořádku.',
    text: 'Rámec popisuje cestu, ne cílovou stanici. Úrovně nejsou nálepky.',
    link: { label: 'Co znamenají úrovně', path: 'jak-pracovat/#urovne' },
  },
  'smysl zivota': {
    title: 'Hledáte smysl života v kompetenčním rámci?',
    text: 'Odvážné. Nejblíž mu je oblast 6: profesní sebepojetí a rozvoj.',
    link: { label: 'Oblast 6', path: 'oblasti/6/' },
  },
  'ai': {
    title: 'Umělá inteligence napíše přípravu za čtyři sekundy',
    text: 'Proč chcete učit právě takhle, ale pořád musíte vědět vy. Technologiím ve výuce se věnuje kritérium 1.1.3.',
    link: { label: 'Kritérium 1.1.3', path: 'kriteria/1-1-3/' },
  },
  'kafka': {
    title: 'Hledáte formulář k žádosti o formulář?',
    text: 'Ten je v kabinetu. Kabinet je ale zamčený a klíč má kolega, který je na školení.',
    link: { label: 'Na stránku Easter egg', path: 'easter-egg/' },
  },
  'inspekce': {
    title: 'Klid. Nikdo se nedívá.',
    text: 'Tohle je nástroj pro reflexi, ne pro kontrolu. Můžete dál dýchat.',
    link: { label: 'Jak nástroj použít', path: 'jak-pracovat/' },
  },
  'ucim': {
    title: 'Skvělé. A co se při tom učí žáci?',
    text: 'Dobrá otázka na začátek každé reflexe. Třeba u cílů výuky.',
    link: { label: 'Kritérium 2.1.1', path: 'kriteria/2-1-1/' },
  },
  'prokrastinace': {
    title: 'Hledání bylo odloženo na později',
    text: 'Až budete připraveni, plánování času se věnuje kritérium 2.4.1. Ale klidně až zítra.',
    link: { label: 'Kritérium 2.4.1', path: 'kriteria/2-4-1/' },
  },
  '2048': {
    title: 'Našli jste easter egg',
    text: 'Slučujte zkušenosti, dokud z nich nevyroste Zuzana Š.',
    link: { label: 'Hrát', path: 'easter-egg/#hra' },
  },
  'easter egg': {
    title: 'Našli jste ho',
    text: 'Hledat easter egg přímo heslem je trochu podvod. Ale budiž, zvídavost se cení.',
    link: { label: 'Na stránku Easter egg', path: 'easter-egg/' },
  },
  'kabinet': {
    title: 'Kabinet je otevřený',
    text: 'Jen nikomu neříkejte, kde jste vzali klíč.',
    link: { label: 'Na stránku Easter egg', path: 'easter-egg/' },
  },
  'skryte kurikulum': {
    title: 'Přesně tak',
    text: 'Vedle oficiálního rámce existuje i druhá vrstva, kterou člověk objevuje zvídavostí. Vítejte v ní.',
    link: { label: 'Na stránku Easter egg', path: 'easter-egg/' },
  },
};

/* Akademický alibista 1.0 a Sborovna nesmrtelných.
   Ke každé výmluvě se vyjádří duch pedagoga, ke kterému se hodí. Komentáře jsou smyšlené,
   volně podle myšlenek dané osobnosti, nejde o skutečné citace. */
export interface Ghost { name: string; years: string }
export const ghosts = {
  komensky: { name: 'Jan Amos Komenský', years: '1592–1670' },
  sokrates: { name: 'Sókratés', years: 'asi 470–399 př. n. l.' },
  vygotskij: { name: 'Lev S. Vygotskij', years: '1896–1934' },
  montessori: { name: 'Maria Montessori', years: '1870–1952' },
  dewey: { name: 'John Dewey', years: '1859–1952' },
  piaget: { name: 'Jean Piaget', years: '1896–1980' },
  freinet: { name: 'Célestin Freinet', years: '1896–1966' },
  bloom: { name: 'Benjamin Bloom', years: '1913–1999' },
  freire: { name: 'Paulo Freire', years: '1921–1997' },
  pestalozzi: { name: 'Johann H. Pestalozzi', years: '1746–1827' },
} satisfies Record<string, Ghost>;

export interface Excuse { text: string; ghost: keyof typeof ghosts; comment: string }
export const excuses: Excuse[] = [
  { text: 'Nešlo o nepřipravenost, ale o emergentní didaktický design.', ghost: 'komensky', comment: 'Napsal jsem celou Velkou didaktiku o pořádku ve vyučování. Slovo „emergentní“ v ní nenajdete. Přípravu ano.' },
  { text: 'Hodina nebyla chaotická, byla otevřená více interpretacím.', ghost: 'dewey', comment: 'Učení ze zkušenosti, souhlasím. Jenže zkušenost bez reflexe je jen chaos s lepším názvem.' },
  { text: 'Cíl hodiny jsem záměrně nesdělil/a, aby si ho žáci konstruovali sami.', ghost: 'piaget', comment: 'Konstruktivismus znamená, že žáci konstruují poznání. Ne že hádají, co po nich vlastně chcete.' },
  { text: 'Projektor nefungoval, a tak jsme rozvíjeli kompetence bez digitálních technologií.', ghost: 'komensky', comment: 'Já měl jen obrázky v Orbis pictus a fungovalo to. Přiznávám ale, že mi nikdy nespadla aktualizace.' },
  { text: 'Učivo jsme nestihli, protože jsme šli do hloubky.', ghost: 'bloom', comment: 'Hloubka je vyšší patro mé taxonomie. Jen se do něj obvykle chodí přes přízemí, ne místo něj.' },
  { text: 'Žáci mlčeli, protože probíhala intenzivní vnitřní reflexe.', ghost: 'sokrates', comment: 'Ptám se už přes dva tisíce let a ticho jsem nikdy nepovažoval za odpověď. Zkuste položit lepší otázku.' },
  { text: 'Zpětnou vazbu poskytnu formativně, tedy později.', ghost: 'vygotskij', comment: 'Podpora má přijít v zóně nejbližšího vývoje. Ne v zóně nejbližšího pololetí.' },
  { text: 'Nejde o zpoždění, ale o flexibilní časovou dotaci.', ghost: 'komensky', comment: 'Chtěl jsem, aby se učilo rychle, příjemně a důkladně. Všimněte si, co je v tom pořadí první.' },
  { text: 'Test byl náročný, protože cílil na zónu nejbližšího vývoje.', ghost: 'vygotskij', comment: 'Zóna nejbližšího vývoje počítá s pomocí. Test, ve kterém nikdo nepomůže, je spíš zóna nejbližšího zoufalství.' },
  { text: 'Neodbočil/a jsem od tématu, propojoval/a jsem mezipředmětově.', ghost: 'freinet', comment: 'Propojování školy se životem vítám. Ale tři historky z dovolené ještě nejsou mezipředmětový projekt.' },
  { text: 'Přípravu mám. Zatím jen v podobě implicitní profesní znalosti.', ghost: 'montessori', comment: 'Základem mé pedagogiky bylo připravené prostředí. Připravené, ne předpokládané.' },
  { text: 'Hluk ve třídě byl projevem kooperativního učení.', ghost: 'pestalozzi', comment: 'Učit se měla hlava, srdce i ruka. U vás zjevně pracovala hlavně ústa.' },
  { text: 'Domácí úkol jsem nezadal/a v zájmu well-beingu žáků. I svého.', ghost: 'freire', comment: 'Celý život jsem psal o osvobozující pedagogice. Osvobození od opravování jsem tím ale úplně nemyslel.' },
  { text: 'Tabule zůstala prázdná. Šlo o minimalistický vizuální design.', ghost: 'komensky', comment: 'Pro názornost jsem nakreslil celý svět. Vy jste nenakreslil/a ani šipku.' },
  { text: 'Hodinu jsem neodučil/a, ale facilitoval/a.', ghost: 'freire', comment: 'Dialog je víc než otázka „tak co si o tom myslíte?“ a čtyřicet minut čekání.' },
  { text: 'Nešlo o chybu, ale o modelovou situaci pro formativní práci s chybou.', ghost: 'sokrates', comment: 'Vím, že nic nevím, a nestydím se to říct nahlas. Zkuste to taky, je to osvobozující.' },
];

/* Dlaždice ve slučovačce: hodnota 2^n a její pedagogické jméno. */
export const mergeTiles = ['', 'Nápad', 'Příprava', 'Hodina', 'Reflexe', 'Hospitace', 'Zpětná vazba', 'Pokrok', 'Praxe', 'Kompe­tence', 'Mindset', 'Zuzana Š.'];

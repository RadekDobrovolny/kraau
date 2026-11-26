/*
  KRAAU: Skryté kurikulum.
  Hravá vrstva webu oddělená od oficiálního obsahu rámce: není ve vyhledávacím indexu,
  v mapě webu ani v datech kritérií. Všechno se odehrává jen v prohlížeči.
*/

export interface SecretLevel { title: string; text: string }

/* Neoficiální úroveň 4: objeví se po dvojkliku na číslo 3 u vybraných kritérií. */
export const secretLevels: Record<string, SecretLevel> = {
  '6.3.2': {
    title: 'Pedagogický zen',
    text: 'Na zátěž reaguji včas, vědomě využívám strategie zvládání stresu a neotevírám pracovní e-maily v neděli ve 23:47.',
  },
  '3.2.6': {
    title: 'Mistr improvizace',
    text: 'Projektor nefunguje, polovina třídy chybí a do hodiny vstoupila ředitelka. Přesto vzniká jedna z mých nejlepších hodin.',
  },
  '5.3.2': {
    title: 'Sokratovské osvícení',
    text: 'Dokážu přiznat vlastní chybu před celou třídou, aniž bych ji zpětně prohlásil/a za záměrnou didaktickou strategii.',
  },
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
    link: { label: 'Do kabinetu', path: 'kabinet/' },
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
    title: 'Našli jste vchod do kabinetu',
    text: 'Slučujte zkušenosti, dokud z nich nevyroste Komenský.',
    link: { label: 'Hrát', path: 'kabinet/#hra' },
  },
  'kabinet': {
    title: 'Kabinet je otevřený',
    text: 'Jen nikomu neříkejte, kde jste vzali klíč.',
    link: { label: 'Do kabinetu', path: 'kabinet/' },
  },
  'skryte kurikulum': {
    title: 'Přesně tak',
    text: 'Vedle oficiálního rámce existuje i druhá vrstva, kterou člověk objevuje zvídavostí. Vítejte v ní.',
    link: { label: 'Do kabinetu', path: 'kabinet/' },
  },
};

/* Akademický alibista 1.0 */
export const excuses = [
  'Nešlo o nepřipravenost, ale o emergentní didaktický design.',
  'Hodina nebyla chaotická, byla otevřená více interpretacím.',
  'Cíl hodiny jsem záměrně nesdělil/a, aby si ho žáci konstruovali sami.',
  'Projektor nefungoval, a tak jsme rozvíjeli kompetence bez digitálních technologií.',
  'Učivo jsme nestihli, protože jsme šli do hloubky.',
  'Žáci mlčeli, protože probíhala intenzivní vnitřní reflexe.',
  'Zpětnou vazbu poskytnu formativně, tedy později.',
  'Nejde o zpoždění, ale o flexibilní časovou dotaci.',
  'Test byl náročný, protože cílil na zónu nejbližšího vývoje.',
  'Neodbočil/a jsem od tématu, propojoval/a jsem mezipředmětově.',
  'Přípravu mám. Zatím jen v podobě implicitní profesní znalosti.',
  'Hluk ve třídě byl projevem kooperativního učení.',
  'Domácí úkol jsem nezadal/a v zájmu well-beingu žáků. I svého.',
  'Tabule zůstala prázdná. Šlo o minimalistický vizuální design.',
  'Hodinu jsem neodučil/a, ale facilitoval/a.',
  'Nešlo o chybu, ale o modelovou situaci pro formativní práci s chybou.',
];

/* Dlaždice ve slučovačce: hodnota 2^n a její pedagogické jméno. */
export const mergeTiles = ['', 'Nápad', 'Příprava', 'Hodina', 'Reflexe', 'Hospitace', 'Zpětná vazba', 'Výstup', 'Praxe', 'Kabinet', 'Mentor', 'Komenský'];

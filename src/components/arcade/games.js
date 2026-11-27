/*
  Katalog KRAAU Arcade: společná metadata pro herní modul (arcade.js)
  i pro podstránky her (src/pages/easter-egg/hry/[hra].astro).
  Texty pravidel a vazeb pocházejí z balíčku 0.2.0 (dříve pole `games` a `details` v arcade.js).
  id = interní identifikátor hry v modulu (nemění se kvůli klíčům úložiště),
  slug = adresa podstránky.
*/
export const GAMES = [
  {
    id: 'merge', slug: 'praxe-na-druhou', name: 'Praxe na druhou', type: '2048', area: 'Profesní rozvoj · práce s chybou',
    desc: 'Profesní rozvoj jako skládání zkušeností.',
    rules: 'Šipkami nebo tahem prstem posouvejte dlaždice. Dvě stejné se spojí ve vyšší stupeň. Z nápadů vznikají přípravy, z hospitací zpětná vazba… a na konci čeká Zuzana Š. (2048).',
    frame: 'Vazba na rámec: formativní práce s chybou (5.3.2) při prohře.',
    why: 'Profesní růst je skládání drobných zkušeností. A když se kabinet zaplní, je to příležitost k učení.',
  },
  {
    id: 'word', slug: 'kraaule', name: 'KRAAULE', type: 'Slovní hádanka', area: 'Oborový jazyk · napříč oblastmi',
    desc: 'Odhal pedagogický pojem pomocí zpětné vazby.',
    rules: 'Najdi pedagogické slovo za šest pokusů.',
    frame: 'Vazba na rámec: oborový a pedagogický jazyk, reflexe a práce se zpětnou vazbou.',
    why: 'Zpětná vazba má hodnotu tehdy, když pomáhá rozhodnout o dalším kroku.',
  },
  {
    id: 'connections', slug: 'souvislosti', name: 'Pedagogické souvislosti', type: 'Čtyři čtveřice', area: 'Napříč oblastmi',
    desc: 'Najdi vztahy mezi pojmy a objev jejich kontext.',
    rules: 'Rozděl šestnáct pojmů do čtyř tematických čtveřic.',
    frame: 'Vazba na rámec: plánování výuky, podmínky pro učení, hodnocení a profesní rozvoj.',
    why: 'Pojmy nemají izolovaný význam. Záleží na vztazích, které mezi nimi objevujeme.',
  },
  {
    id: 'tetris', slug: 'didaktris', name: 'Didaktris', type: 'Padající bloky', area: 'Plánování výuky',
    desc: 'Vejde se všechno do pětačtyřiceti minut?',
    rules: 'Skládej výukové aktivity a uvolňuj místo dokončováním řádků.',
    frame: 'Vazba na rámec SŠ: tematicky 2.2.1, 2.2.2 a 2.4.1; nejde o ověření kompetence ani simulaci didaktické kvality.',
    why: 'Omezený čas vyžaduje volbu priorit. Hra je metafora, nikoli model kvalitní vyučovací hodiny.',
  },
  {
    id: 'reigns', slug: 'sborovna', name: 'Sborovna', type: 'Dilemata', area: 'Všech 19 kompetencí',
    desc: 'Rozhoduj se v profesních situacích a hledej rovnováhu.',
    rules: 'Vyber jednu ze dvou obhajitelných reakcí na každou z 24 profesních situací.',
    frame: 'Vazby: všech 19 kompetencí rámce pro SŠ.',
    why: 'Učitelská rozhodnutí jsou kontextová a často vyvažují různé legitimní potřeby. Číselné dopady jsou pouze herní fikcí.',
  },
  {
    id: 'sim', slug: 'simsborovna', name: 'SimSborovna', type: 'Virtuální praxe', area: 'Profesní rozvoj a péče o sebe',
    desc: 'Dva týdny na praxi virtuálního studujícího učitelství.',
    rules: 'Pečuj o virtuálního studujícího učitelství během deseti herních dnů praxe na SŠ.',
    frame: 'Vazby: zejména 6.1, 6.2 a 6.3; další kritéria podle aktivit.',
    why: 'Udržitelné učitelství potřebuje profesní rozvoj, vztahy, odpočinek i systémové podmínky.',
  },
];

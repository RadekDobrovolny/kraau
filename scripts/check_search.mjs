import fs from 'node:fs';
import MiniSearch from 'minisearch';

const documents = JSON.parse(fs.readFileSync(new URL('../dist/search-index.json', import.meta.url), 'utf8'));
const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('cs-CZ');
const search = new MiniSearch({
  fields: ['indexTitle', 'body', 'indexCode', 'indexContext'],
  storeFields: ['kind', 'criterionId', 'areaId', 'competenceId', 'level', 'title', 'code', 'body', 'url'],
  processTerm: normalize,
});
search.addAll(documents);
const exact = search.search('2.1.1', { prefix: true });
const diacritics = search.search('zpetna vazba', { prefix: true });
const level = search.search('důvěryhodné zdroje', { prefix: true });
if (!exact.some((item) => item.criterionId === '2.1.1')) throw new Error('Criterion code lookup failed');
if (!diacritics.some((item) => item.areaId === '5')) throw new Error('Diacritics tolerant search failed');
if (!level.some((item) => item.kind === 'level' && item.level !== null)) throw new Error('Level text lookup failed');
console.log(`Validated ${documents.length} search records and representative queries.`);

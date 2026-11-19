import { getCollection, type CollectionEntry } from 'astro:content';

export type Area = CollectionEntry<'areas'>['data'];
export type Competence = CollectionEntry<'competences'>['data'];
export type Criterion = CollectionEntry<'criteria'>['data'];

const numericId = (value: string) => value.split('.').map(Number);
const byId = <T extends { id: string }>(a: T, b: T) => {
  const aa = numericId(a.id);
  const bb = numericId(b.id);
  for (let i = 0; i < Math.max(aa.length, bb.length); i++) {
    if ((aa[i] ?? 0) !== (bb[i] ?? 0)) return (aa[i] ?? 0) - (bb[i] ?? 0);
  }
  return 0;
};

export async function getFramework() {
  const [areaEntries, competenceEntries, criterionEntries] = await Promise.all([
    getCollection('areas'),
    getCollection('competences'),
    getCollection('criteria'),
  ]);
  const areas = areaEntries.map((entry) => entry.data).sort(byId);
  const competences = competenceEntries.map((entry) => entry.data).sort(byId);
  const criteria = criterionEntries.map((entry) => entry.data).sort(byId);
  const areaIds = new Set(areas.map((area) => area.id));
  const competenceIds = new Set(competences.map((competence) => competence.id));
  if (areas.length !== 6 || competences.length !== 19 || criteria.length !== 61) {
    throw new Error('Unexpected framework inventory');
  }
  if (competences.some((item) => !areaIds.has(item.areaId))) {
    throw new Error('Competence without an area');
  }
  if (criteria.some((item) => !competenceIds.has(item.competenceId))) {
    throw new Error('Criterion without a competence');
  }
  return { areas, competences, criteria };
}

export type Example = CollectionEntry<'examples'>['data'];

/** Ukázky viditelné v aktuálním sestavení: publikované, při lokálním vývoji i koncepty. */
export async function getExamples() {
  const entries = await getCollection('examples');
  const criterionIds = new Set((await getCollection('criteria')).map((entry) => entry.data.id));
  const examples = entries.map((entry) => entry.data);
  for (const example of examples) {
    const unknown = example.links.find((link) => !criterionIds.has(link.criterionId));
    if (unknown) throw new Error(`Example ${example.id} links to unknown criterion ${unknown.criterionId}`);
  }
  return examples.filter((example) => example.status === 'published' || import.meta.env.DEV);
}

export const exampleTypeIcon: Record<Example['type'], string> = {
  transkript: 'fa-comments',
  příprava: 'fa-clipboard-list',
  reflexe: 'fa-pen-nib',
  fotografie: 'fa-image',
  artefakt: 'fa-shapes',
  dokument: 'fa-file-lines',
  video: 'fa-circle-play',
};

export const slug = (id: string) => id.replaceAll('.', '-');

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const areaUrl = (id: string) => withBase(`oblasti/${id}/`);
export const competenceUrl = (id: string) => withBase(`kompetence/${slug(id)}/`);
export const criterionUrl = (id: string, level?: number) =>
  withBase(`kriteria/${slug(id)}/`) + (level === undefined ? '' : `#uroven-${level}`);
export const exampleUrl = (id: string) => withBase(`ukazky/${id}/`);
export const pdfUrl =(page?: number) =>
  withBase('kompetencni-ramec-ss.pdf') + (page ? `#page=${page}` : '');

export function displayTitle(title: string) {
  if (title !== title.toLocaleUpperCase('cs-CZ')) return title;
  const sentence = title.toLocaleLowerCase('cs-CZ');
  return sentence.charAt(0).toLocaleUpperCase('cs-CZ') + sentence.slice(1)
    .replace(/\bvš\b/g, 'VŠ')
    .replace(/\bsvp\b/g, 'SVP')
    .replace(/\bšpp\b/g, 'ŠPP');
}

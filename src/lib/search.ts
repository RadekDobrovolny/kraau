import type { Area, Competence, Criterion } from './framework';
import { criterionUrl, displayTitle } from './framework';

export interface SearchDocument {
  id: string;
  kind: 'criterion' | 'level';
  criterionId: string;
  areaId: string;
  competenceId: string;
  level: number | null;
  title: string;
  code: string;
  context: string;
  body: string;
  url: string;
  indexTitle: string;
  indexCode: string;
  indexContext: string;
}

export function searchDocuments(areas: Area[], competences: Competence[], criteria: Criterion[]): SearchDocument[] {
  const areaById = new Map(areas.map((item) => [item.id, item]));
  const competenceById = new Map(competences.map((item) => [item.id, item]));
  return criteria.flatMap((criterion) => {
    const competence = competenceById.get(criterion.competenceId)!;
    const area = areaById.get(competence.areaId)!;
    const shared = {
      criterionId: criterion.id,
      areaId: area.id,
      competenceId: competence.id,
      title: displayTitle(criterion.title),
      code: criterion.id,
      context: `${area.title} ${competence.title}`,
    };
    return [
      { ...shared, id: criterion.id, kind: 'criterion' as const, level: null, body: criterion.mindset, url: criterionUrl(criterion.id), indexTitle: criterion.title, indexCode: criterion.id, indexContext: `${area.title} ${competence.title}` },
      ...criterion.levels.map((body, level) => ({ ...shared, id: `${criterion.id}-u${level}`, kind: 'level' as const, level, body, url: criterionUrl(criterion.id, level), indexTitle: '', indexCode: '', indexContext: '' })),
    ];
  });
}

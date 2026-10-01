import type { APIRoute } from 'astro';
import { getFramework } from '../lib/framework';
import { searchDocuments } from '../lib/search';

export const GET: APIRoute = async () => {
  const { areas, competences, criteria } = await getFramework();
  return new Response(JSON.stringify(searchDocuments(areas, competences, criteria)), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

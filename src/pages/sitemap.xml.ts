import type { APIRoute } from 'astro';
import { areaUrl, competenceUrl, criterionUrl, getFramework, withBase } from '../lib/framework';

export const GET: APIRoute = async () => {
  const { areas, competences, criteria } = await getFramework();
  const paths = ['', 'ramec/', 'urovne/', 'ukazky/', 'jak-pracovat/', 'o-projektu/', 'hledat/'].map(withBase);
  paths.push(...areas.map((item) => areaUrl(item.id)));
  paths.push(...competences.map((item) => competenceUrl(item.id)));
  paths.push(...criteria.map((item) => criterionUrl(item.id)));
  const site = import.meta.env.SITE || 'http://localhost:4321';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${new URL(path, site).toString()}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const source = 'src/data/framework.json';
const section = (name: string) => file(source, {
  parser: (text) => JSON.parse(text)[name],
});

const areas = defineCollection({
  loader: section('areas'),
  schema: z.object({
    id: z.string().regex(/^[1-6]$/),
    title: z.string().min(1),
    intro: z.array(z.string().min(1)).min(1),
    sourcePage: z.number().int().positive(),
  }),
});

const competences = defineCollection({
  loader: section('competences'),
  schema: z.object({
    id: z.string().regex(/^[1-6]\.[1-5]$/),
    areaId: z.string().regex(/^[1-6]$/),
    title: z.string().min(1),
  }),
});

const criteria = defineCollection({
  loader: section('criteria'),
  schema: z.object({
    id: z.string().regex(/^[1-6]\.[1-5]\.[1-9]$/),
    competenceId: z.string().regex(/^[1-6]\.[1-5]$/),
    title: z.string().min(1),
    levels: z.tuple([z.string().min(1), z.string().min(1), z.string().min(1), z.string().min(1)]),
    mindset: z.string().min(1),
    sourcePage: z.number().int().positive(),
  }),
});

export const collections = { areas, competences, criteria };

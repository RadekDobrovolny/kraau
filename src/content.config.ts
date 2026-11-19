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

/*
  Ukázky z praxe (ilustrátory). Samostatný soubor, aby je nepřepsal převod z PDF.
  status: "draft" = zobrazí se jen při lokálním vývoji, "published" = i na veřejném webu.
  links: dvojice kritérium–úroveň, u kterých se ukázka nabídne.
*/
const examples = defineCollection({
  loader: file('src/data/examples.json'),
  schema: z.object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    status: z.enum(['draft', 'published']),
    title: z.string().min(1),
    type: z.enum(['transkript', 'příprava', 'reflexe', 'fotografie', 'artefakt', 'dokument', 'video']),
    context: z.string().min(1),
    body: z.array(z.string().min(1)).default([]),
    commentary: z.string().optional(),
    source: z.string().optional(),
    url: z.string().url().optional(),
    links: z.array(z.object({
      criterionId: z.string().regex(/^[1-6]\.[1-5]\.[1-9]$/),
      level: z.number().int().min(0).max(3),
    })).min(1),
  }),
});

export const collections = { areas, competences, criteria, examples };

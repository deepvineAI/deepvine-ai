import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),                 // ISO 8601, e.g. 2026-07-21T09:00:00-04:00
    updated: z.string().optional(),
    author: z.string().default('Mitch Boraski'),
    section: z.string().optional(),   // Legal, Wealth Management, Accounting, ...
    keywords: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    excerpt: z.string().optional(),
    cta: z.object({ eyebrow: z.string(), heading: z.string(), sub: z.string() }).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    schema: z.string().optional(),    // verbatim JSON-LD graph carried over from the previous site
  }),
});

export const collections = { blog };

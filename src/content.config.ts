import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entity = z.object({ '@type': z.string(), name: z.string(), sameAs: z.union([z.string(), z.array(z.string())]).optional() }).passthrough();

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),                 // on-page headline (H1)
    seoTitle: z.string().optional(),   // <title> (keep under ~60 characters)
    description: z.string(),
    date: z.string(),                  // ISO 8601, e.g. 2026-07-21T09:00:00-04:00
    updated: z.string().optional(),
    author: z.string().default('Mitch Boraski'),
    section: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    excerpt: z.string().optional(),
    alternativeHeadline: z.string().optional(),
    wordCount: z.number().optional(),
    about: z.array(entity).default([]),      // schema.org entities the article is about
    mentions: z.array(entity).default([]),   // schema.org entities the article mentions
    cta: z.object({ eyebrow: z.string(), heading: z.string(), sub: z.string() }).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    schema: z.string().optional(),     // legacy: verbatim JSON-LD (unused when the layout generates the graph)
  }),
});

export const collections = { blog };

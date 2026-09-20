import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    agency: z.array(z.string()),
    path: z.string(),
    officialSource: z.object({
      label: z.string(),
      url: z.string().url()
    }),
    additionalSources: z.array(z.object({
      label: z.string(),
      url: z.string().url()
    })).default([]),
    lastReviewed: z.coerce.date(),
    priority: z.enum(['alta', 'media', 'baja']).default('media'),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([])
  })
});

export const collections = { guides };

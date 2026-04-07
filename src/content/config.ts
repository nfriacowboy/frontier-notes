import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('nfriacowboy'),
    excerpt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    aiDisclosure: z.boolean().default(false),
    references: z
      .array(
        z.object({
          key: z.string(),
          citation: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { posts };

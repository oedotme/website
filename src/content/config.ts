import { defineCollection, z } from 'astro:content'

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cowritten: z.boolean().optional(),
      date: z.string(),
    }),
  }),
}

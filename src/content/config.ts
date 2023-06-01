import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.string().optional(),
    order: z.number().optional(),
    // Transform string to Date object
	}),
	
});

export const collections = { docs };

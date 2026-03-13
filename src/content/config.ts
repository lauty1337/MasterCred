import { defineCollection, z } from 'astro:content';

const commerce = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        address: z.string(),
        category: z.string(),
        image: image(),
    })
})

export const collections = { commerce }
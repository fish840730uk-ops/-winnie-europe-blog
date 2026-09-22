import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const photos = defineCollection({
  loader: file('./src/content/photos/photos.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    location: z.string(),
    date: z.coerce.date(),
  }),
});

const places = defineCollection({
  loader: file('./src/content/places/places.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    lat: z.number(),
    lng: z.number(),
    description: z.string(),
    dateVisited: z.coerce.date().optional(),
  }),
});

export const collections = { blog, photos, places };

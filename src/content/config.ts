/**import { defineCollection,z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        author: z.string(),
        image: z.string(),

    })
});
export const collections = {blog: blogCollection,};**/



import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
    


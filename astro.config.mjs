import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://videoadsbenchmark.netlify.app/', 
  base: '/', 
  output: 'static', //
  integrations: [tailwind(), icon(), mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  }), react()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});

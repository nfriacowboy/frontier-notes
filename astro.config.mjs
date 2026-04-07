import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
  site: 'https://nfriacowboy.github.io',
  base: '/frontier-notes',
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [
      [rehypeMermaid, { strategy: 'img-svg' }],
    ],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});

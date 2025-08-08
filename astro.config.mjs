// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import rehypeKatex from "rehype-katex";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://bigouden.org",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr", // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          fr: "fr-FR",
          en: "en-US", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    expressiveCode(),
    mdx({}),
  ],

  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading:
            "(table[ -]of[ -])?contents?|toc|sommaire|(table[ -]des[ -])?mati[eè]res?",
          ordered: true,
          parents: ["listItem", "root"],
        },
      ],
      remarkGfm,
      [remarkMath, {}],
    ],
    rehypePlugins: [[rehypeKatex, {}]],
  },

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
});


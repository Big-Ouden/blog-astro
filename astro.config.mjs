// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

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
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  integrations: [qwikdev(), tailwind()],
  output: "hybrid",
  adapter: vercel(),
});

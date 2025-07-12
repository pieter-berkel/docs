// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.pieterberkel.com",
  integrations: [
    starlight({
      title: "PBOD",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pieter-berkel/docs",
        },
      ],
      plugins: [
        starlightThemeBlack({
          footerText:
            "Built & maintained by [Pieter Berkel](https://github.com/pieter-berkel). The source code is available on [GitHub](https://github.com/pieter-berkel/docs).",
        }),
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

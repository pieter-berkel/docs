// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              // optional
              label: "Docs",
              link: "/getting-started",
            },
          ],
          //optional
          footerText:
            "Built & designed by [shadcn](https://twitter.com/shadcn). Ported to Astro Starlight by [Adrián UB](https://github.com/adrian-ub). The source code is available on [GitHub](https://github.com/adrian-ub/starlight-theme-black).",
        }),
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

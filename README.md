# PBOD - Pieter Berkel's Opinionated Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

My personal documentation hub where I document my preferred workflows, patterns, and best practices for software development.

🌐 **Live Site**: [docs.pieterberkel.com](https://docs.pieterberkel.com)

## About PBOD

This documentation serves as both a reference for my own work and a way to share my development philosophy with others who might find these approaches useful.

### Goals

My primary goal is to maintain consistency across all my projects by documenting my opinionated approaches to:

- **Next.js development** - My preferred patterns, configurations, and workflows
- **Future frameworks** - As I explore and adopt new technologies, I'll document my learnings here

### Why Opinionated?

Every developer eventually develops their own preferences for tooling, project structure, and workflows. Rather than reinventing the wheel for each project, I'm consolidating my battle-tested approaches in one place to:

- Maintain consistency across projects
- Speed up project setup and development
- Share knowledge with team members and the community
- Continuously refine and improve my processes

## 🚀 Tech Stack

This site is built with:

- **Astro 5.6.1** with Starlight framework for documentation
- **starlight-theme-black** plugin for dark theme aesthetics
- **TailwindCSS 4.x** integrated via Vite plugin
- **pnpm** as package manager (required)
- **Node.js 22+** required

## 📁 Project Structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/          # All documentation content (.md/.mdx files)
│   │   └── content.config.ts
│   └── styles/
│       └── global.css     # TailwindCSS layers + Starlight integration
├── astro.config.mjs       # Main config with integrations & plugins
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

## 🧞 Commands

> **Note**: This project uses pnpm as the package manager. Make sure to use pnpm instead of npm.

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📝 Content Management

- **New docs**: Create `.md` or `.mdx` files in `src/content/docs/`
- **Routing**: File-based routing (e.g., `docs/api/auth.md` → `/api/auth`)
- **Frontmatter**: Always include `title` and `description` in YAML frontmatter
- **Assets**: Place images in `src/assets/` and reference with relative paths

## 🎨 Customization

- **Theme**: Uses `starlight-theme-black` plugin for dark aesthetics
- **Styling**: Custom styles in `src/styles/global.css` using TailwindCSS v4 syntax
- **Branding**: Site title "PBOD" configured in Starlight integration
- **Footer**: Custom attribution via theme plugin options

## 🚢 Deployment

The site is configured for deployment to `https://docs.pieterberkel.com`. To deploy:

1. Ensure `site` URL in `astro.config.mjs` matches your deployment domain
2. Run `pnpm build` to generate static site in `./dist/`
3. Deploy the `./dist/` folder to your hosting provider

---

Feel free to explore the documentation and adapt any patterns that might be useful for your own projects!

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

# Copilot Instructions for PBOD (Pieter Berkel's Opinionated Docs)

## Project Overview

This is an **Astro Starlight documentation site** with custom theming and TailwindCSS integration. The site serves as Pieter Berkel's personal documentation hub, branded as "PBOD" and deployed to `https://docs.pieterberkel.com`.

## Architecture & Key Components

### Core Stack

- **Astro 5.6.1** with Starlight framework for documentation
- **starlight-theme-black** plugin for dark theme aesthetics
- **TailwindCSS 4.x** integrated via Vite plugin (note: v4 syntax in `global.css`)
- **pnpm** as package manager (required, see `packageManager` field)
- **Node.js 22+** required (see engines in package.json)

### File Structure Patterns

```
src/content/docs/        # All documentation content (.md/.mdx files)
src/styles/global.css    # TailwindCSS layers + Starlight integration
src/content.config.ts    # Starlight content collections config
astro.config.mjs         # Main config with integrations & plugins
```

## Development Workflow

### Commands (use pnpm, not npm)

```bash
pnpm dev          # Development server on localhost:4321
pnpm build        # Production build to ./dist/
pnpm preview      # Preview production build locally
```

### Content Management

- **New docs**: Create `.md` or `.mdx` files in `src/content/docs/`
- **Routing**: File-based routing (e.g., `docs/api/auth.md` → `/api/auth`)
- **Frontmatter**: Always include `title` and `description` in YAML frontmatter
- **Assets**: Place images in `src/assets/` and reference with relative paths

## Project-Specific Conventions

### Configuration Patterns

- **Site config**: Update `site` URL in `astro.config.mjs` for deployment
- **Branding**: Title "PBOD" configured in Starlight integration
- **Footer text**: Customized via `starlightThemeBlack` plugin with personal attribution
- **Social links**: GitHub link configured in Starlight social array

### Styling Approach

- **CSS layers**: Uses `@layer` directive for TailwindCSS v4 integration
- **Import order**: `base, starlight, theme, components, utilities`
- **Custom CSS**: Added via `customCss` array in Starlight config
- **Theme**: Black theme applied globally via plugin

### TypeScript Configuration

- **Strict mode**: Extends `astro/tsconfigs/strict`
- **Auto-generated types**: `.astro/types.d.ts` included automatically
- **Content collections**: Uses Starlight's built-in `docsLoader` and `docsSchema`

## Integration Points

### Starlight Plugin System

- Theme customization via `starlight-theme-black` plugin
- Footer text customization through plugin options
- Custom CSS integration through Starlight's `customCss` option

### Build System

- **Vite integration**: TailwindCSS added as Vite plugin
- **Sharp**: Used for image optimization (included in dependencies)
- **Font loading**: Geist Sans/Mono fonts from Fontsource

## Common Tasks

### Adding New Documentation

1. Create `.mdx` file in `src/content/docs/` subdirectory
2. Add YAML frontmatter with `title` and `description`
3. Content appears automatically in navigation

### Theme Customization

- Modify `starlightThemeBlack` plugin options in `astro.config.mjs`
- Add custom styles to `src/styles/global.css` using TailwindCSS v4 syntax
- Update social links and site metadata in Starlight config

### Deployment Preparation

- Ensure `site` URL in `astro.config.mjs` matches deployment domain
- Run `pnpm build` to generate static site in `./dist/`
- Footer attribution automatically includes correct GitHub repository link

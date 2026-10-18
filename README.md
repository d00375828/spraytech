# Spraytech Pest and Weed Control

Marketing website for Spraytech Pest and Weed Control, a local pest and weed control company serving St. George and nearby Southern Utah communities.

The site is built with [Astro](https://astro.build/) and currently generates static HTML. It has no database, CMS, server-side API, or JavaScript framework integration.

## Project status

- GitHub repository: [d00375828/spraytech](https://github.com/d00375828/spraytech)
- Temporary website hosted cloudflare: https://spraytech.luna-devtools.workers.dev/
- Quote form: Visual prototype only; it does not submit data.
- Content: Several service and service-area links point to pages that have not been built yet.
- Images: The home, about, and scorpion-control pages still contain image/content placeholders.

## Run locally

Requirements:

- Node.js 22.12.0 or newer
- npm (included with Node.js)

From the `spraytech-pest` directory:

```sh
npm install
npm run dev -- --background
```

Open <http://localhost:4321> in a browser.

Astro's background development server can be managed with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

If port 4321 is already in use, Astro will select another port and report it in the terminal or logs.

## Commands

| Command                       | Purpose                                                  |
| ----------------------------- | -------------------------------------------------------- |
| `npm install`                 | Install the locked dependencies from `package-lock.json` |
| `npm run dev -- --background` | Start the local development server in the background     |
| `npm run build`               | Create the production build in `dist/`                   |
| `npm run preview`             | Preview the latest production build locally              |
| `npm run astro -- dev status` | Check the background development server                  |
| `npm run astro -- dev logs`   | Read background development-server logs                  |
| `npm run astro -- dev stop`   | Stop the background development server                   |

## Current pages

Astro uses file-based routing: files under `src/pages/` become URLs.

| URL                  | Source                                   | Status                                       |
| -------------------- | ---------------------------------------- | -------------------------------------------- |
| `/`                  | `src/pages/index.astro`                  | Built                                        |
| `/about/`            | `src/pages/about/index.astro`            | Built; owner photo/story placeholders remain |
| `/services/`         | `src/pages/services/index.astro`         | Built                                        |
| `/scorpion-control/` | `src/pages/scorpion-control/index.astro` | Built; image placeholder remains             |
| `/service-areas/`    | `src/pages/service-areas/index.astro`    | Built                                        |
| `/contact/`          | `src/pages/contact/index.astro`          | Built; form has no backend                   |

The navigation and service cards also link to individual pages for spiders, ants, roaches, wasps, rodents, weed control, and each service area. Those routes do not exist yet and currently return 404 pages. The `isBuilt` fields in the data files show which detail pages are implemented.

## Project structure

```text
spraytech-pest/
├── public/                  # Static files copied directly to the build
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/          # Shared UI: header, footer, buttons, cards, CTA, icons
│   ├── data/                # Business details, services, and service areas
│   ├── layouts/
│   │   └── BaseLayout.astro # Shared HTML shell, metadata, header, and footer
│   ├── pages/               # File-based routes and page-specific styles/content
│   └── styles/
│       └── global.css       # Design tokens, resets, and shared utility styles
├── astro.config.mjs         # Astro configuration (currently defaults only)
├── package.json             # Scripts, Node requirement, and dependencies
└── tsconfig.json            # TypeScript configuration
```

## Where to make common changes

- Business name, phone number, hours, location, and default description: `src/data/site.ts`
- Service names, descriptions, slugs, and build status: `src/data/services.ts`
- Service areas, slugs, and build status: `src/data/serviceAreas.ts`
- Main navigation: `src/components/Header.astro`
- Footer content: `src/components/Footer.astro`
- Global colors, spacing, typography, and layout tokens: `src/styles/global.css`
- Page copy and page-specific styling: the matching file under `src/pages/`
- SEO defaults and shared metadata: `src/layouts/BaseLayout.astro`
- Favicons and other public assets: `public/`

Most page styles are scoped in a `<style>` block at the bottom of that page's `.astro` file. Shared components follow the same pattern.

## Adding a page

Add an `.astro` file under `src/pages/` and wrap its content with `BaseLayout`. For example, `src/pages/spider-control/index.astro` becomes `/spider-control/`.

When adding a service or service-area detail page, also change its `isBuilt` value to `true` in the appropriate file under `src/data/`. The header uses this flag to decide whether an item links to its detail page.

After making changes, run:

```sh
npm run build
```

This catches Astro compilation errors and regenerates the static site in `dist/`. The `dist/`, `.astro/`, `node_modules/`, and environment files are intentionally excluded from Git.

## Deployment notes

The project currently uses Astro's default static output, so the contents produced by `npm run build` can be deployed to a static host such as Cloudflare Pages, Netlify, Vercel, or GitHub Pages. No provider-specific adapter, workflow, domain, or `site` URL is configured yet.

When deployment is set up:

1. Configure the host to run `npm install` (or `npm ci`) and `npm run build`.
2. Publish the `dist/` directory.
3. Add the production URL as Astro's `site` option in `astro.config.mjs`; this enables canonical and Open Graph URLs already supported by `BaseLayout.astro`.
4. Record the live URL and hosting provider in this README.
5. Connect the quote form to a real form service or backend before presenting it as functional.

## Known follow-up work

- Deploy the site and configure its production domain.
- Connect the quote form to a backend or form provider.
- Add real photography and owner-story content in place of placeholders.
- Build the remaining service detail pages.
- Build the individual service-area pages.
- Review links after adding new routes and run a production build before deployment.

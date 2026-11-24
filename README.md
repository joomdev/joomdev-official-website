# JoomDev Website Redesign

We’re rebuilding the [official JoomDev website](https://www.joomdev.com/) as a fast, accessible, search-friendly marketing site. The project uses Astro, TypeScript, plain CSS, and static HTML. The first milestone is an AI Integration service page that establishes the layout, SEO, performance, and inquiry patterns for the rest of the site.

## Project status

The Astro starter and npm lockfile are included in this repository. Use the setup below to run the site locally.

## Get started

Everyone needs access to this private repository. Ask the project owner for access and link your work to a GitHub issue. State the page or component, what needs to change, and what counts as done.

### Developers

Install Git and Node.js 22.12 or newer with npm. Node.js 24 is the version used for the local verification. From a terminal, run:

```bash
git clone https://github.com/joomdev/joomdev-official-website.git
cd joomdev-official-website
npm ci
npm run dev
```

Open the local URL printed by Astro, typically http://localhost:4321. Run `npm run build` before opening a pull request. It runs Astro diagnostics and builds the static site into `dist/`. Use `npm run preview` to inspect that build.

| Path | Purpose |
| --- | --- |
| `src/pages/` | Site routes and page content |
| `src/layouts/BaseLayout.astro` | Shared navigation, footer, and SEO metadata |
| `src/styles/global.css` | Shared styles |
| `astro.config.mjs` | Static output, site URL, and sitemap configuration |

The starter includes Home, Services, AI Integration, Contact, and a 404 page. Keep the application markup usable with JavaScript disabled. Add client JavaScript only where an interaction requires it. Keep credentials and other secrets out of the repository.

### Designers

- Start with the visitor’s goal, page content, and primary CTA. Design the AI Integration service page first so the team can review a complete example.
- Share a Figma link in the issue with mobile and desktop frames, reusable components, and typography, spacing, and color styles. Include keyboard focus and interaction states where relevant.
- Call out heading order, responsive behavior, and any motion or embeds. Provide optimized asset exports or source files, along with the intended crop and alt text guidance.
- Review the coded page at mobile and desktop widths and record adjustments in the issue or pull request.

## Collaboration workflow

1. Agree on scope in an issue. Link the approved design or content brief when available.
2. Create a branch from the latest `main`, such as `feat/ai-integration-page` or `docs/service-page-brief`.
3. Open a pull request to `main`. Include the issue, a summary, screenshots or a preview link for visual changes, and what you verified.
4. Request review from the relevant designer or developer before merging. Capture follow-up work in separate issues.

## SEO and performance checks

- Give each page a distinct title and description, one clear H1, logical headings, semantic landmarks, and crawlable internal links.
- Audit the live URL inventory before finalizing routes. Preserve valuable URLs where practical and map changed URLs to relevant destinations with permanent redirects.
- Keep previews on the default `noindex` behavior. Set `SITE_INDEXABLE=true` only for an approved production build to enable canonicals and sitemap generation.
- Aim for under 100 KB of raw HTML, under 800 rendered DOM elements on typical pages, and under 1 MB of initial mobile transfer. Review raw HTML over 200 KB.
- Check representative pages for mobile layout, keyboard navigation, broken links, and any changed form or booking flow. Track Core Web Vitals after launch, targeting LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile.

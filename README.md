# Setu Global Solution

A static marketing site for Setu Global Solution (Germany study-abroad consultancy), built on the [Lumio Lite](https://github.com/getastrothemes/lumio-lite-astro) Astro theme. Statically generated at build time for fast loads and full SEO crawlability.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Content

- Homepage sections live in `src/content/sections/english/*.md`.
- Services (each gets its own page at `/services/<slug>/`) live in `src/content/services/english/*.mdx`.
- Site identity, contact info, and the contact form's destination email are configured in `src/config/config.toml`.
- Navigation is configured in `src/config/menu.en.json`.

## Placeholders to replace

- CEO Mann Soni's photo: uncomment `photo:` in `src/content/sections/english/founder.md` once a real photo is available (currently shows initials).
- Germany/university photos throughout `src/assets/images/` are free stock placeholders (Pexels) — swap them for real photos when available.

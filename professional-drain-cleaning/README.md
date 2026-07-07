# Professional Drain Cleaning

One-page website for Professional Drain Cleaning — 24/7 drain cleaning and plumbing services in Cape Coral and Southwest Florida.

Built with [Astro](https://astro.build), Tailwind CSS 4, daisyUI, and astro-icon. Bilingual content (English/Spanish) via `data-i18n` toggles.

## Pages

- `/` — main landing page (hero, emergency, service area, about, services, gallery, reviews, request service, payments)
- `/contact` — contact / request service
- `404` / `500` — error pages

Business data (phone, WhatsApp, email, social links, service areas, nav menu) lives in `src/consts.ts`.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the build locally                   |

Based on the [ProCleaning](https://github.com/anastasiiaxfr/ProCleaning) Astro template (MIT).

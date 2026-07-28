# Migrate CluScore to a static Vite + React SPA

Goal: produce a fully static `dist/` (HTML + JS + CSS + assets) that Plesk can serve as a plain SPA — no Node/Cloudflare Worker, no SSR, no server routes.

## What changes

### Framework swap
- Remove TanStack Start + Nitro + Cloudflare Worker wrapper.
- Keep TanStack Router in **client-only** mode (drop-in, keeps existing route files with minimal edits), OR switch to a single-page `App.tsx` since the site is one route (`/`). Recommendation: single `App.tsx` — simpler, fewer moving parts, and this is a one-page marketing site.
- Add a standard Vite React SPA entry: `index.html` at repo root + `src/main.tsx`.

### Files removed
- `src/server.ts`, `src/start.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts` (SSR error wrappers — irrelevant for SPA).
- `src/router.tsx`, `src/routeTree.gen.ts`, `src/routes/__root.tsx`.
- `src/routes/sitemap[.]xml.ts` — replaced by a **static** `public/sitemap.xml`.
- `@lovable.dev/vite-tanstack-config` usage in `vite.config.ts`.

### Files added / rewritten
- `index.html` at repo root — contains all `<head>` SEO tags, canonical, Open Graph, Twitter, JSON-LD (moved out of the TanStack `head()` function into static HTML so crawlers see them without JS).
- `src/main.tsx` — mounts `<App />` into `#root`.
- `src/App.tsx` — renders the current `Index` page component from `src/routes/index.tsx` (contents moved over, `createFileRoute` wrapper stripped).
- `vite.config.ts` — plain `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths`. No nitro, no tanstackStart plugin.
- `public/sitemap.xml` — static file (replaces the dynamic route).
- `public/.htaccess` — SPA fallback for Plesk/Apache so deep links don't 404:
  ```apache
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

### package.json
- Remove: `@tanstack/react-start`, `@tanstack/router-plugin`, `@lovable.dev/vite-tanstack-config`, `nitro`.
- Keep: `@tanstack/react-query` (still used), `react`, `react-dom`, tailwind, radix, etc.
- Optionally keep `@tanstack/react-router` if we want client-side routing later; drop if going pure single-page.
- `scripts.build` stays as `vite build` — output goes to `dist/`.

## SEO impact (important)

Currently SSR renders full HTML server-side, so Google/GPTBot see content on first request. In a SPA, only the `index.html` shell is delivered; content renders after JS runs.

Mitigations baked into this plan:
- Put **all** meta tags, canonical, Open Graph, Twitter Card, and JSON-LD directly in `index.html` (static) — this is what most crawlers (including GPTBot, ClaudeBot, PerplexityBot, and Googlebot) read. Text content still requires JS execution to be indexed; Googlebot handles this, but some AI crawlers do not.
- Keep `public/robots.txt` and `public/sitemap.xml` intact.
- Consider adding a minimal `<noscript>` block in `index.html` with the hero headline + description so non-JS crawlers still see the pitch.

If deep SEO on the rendered body copy matters, we can add `vite-plugin-prerender` (or similar) later to prerender `/` to static HTML at build time — but for a single-page site with meta already in `index.html`, that's usually optional.

## Deployment to Plesk
1. Run `bun run build` (or `npm run build`).
2. Upload the entire contents of `dist/` to the Plesk site's document root (e.g. `httpdocs/`).
3. Ensure `.htaccess` is included (it comes from `public/`, gets copied to `dist/`).
4. No Node runtime needed on Plesk.

## Technical notes
- All existing image assets in `src/assets/*.asset.json` continue to work — they're just imported as URLs via Vite.
- The contact form's `mailto:` link continues to work — no backend was ever involved.
- Removing SSR removes the `og:image` runtime injection Lovable hosting does — but we bake it in `index.html` explicitly, so previews still render.

## Risks / tradeoffs to confirm
- **Lovable preview**: this project lives in a Lovable TanStack template. Switching to plain Vite SPA moves it off the template's supported path — the Lovable editor still works (it's just Vite), but future Lovable-specific features that assume TanStack Start (server functions, etc.) won't apply.
- **AI crawler indexing** of body copy (not meta) may degrade vs. the current SSR setup. Meta tags and JSON-LD remain visible.

Confirm and I'll implement.

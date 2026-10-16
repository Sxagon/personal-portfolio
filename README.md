# Michal Lipka — portfolio

Next.js 16 (App Router) + next-intl (cs / en) + Motion. Light mode only.

## Spuštění

```bash
npm install
npm run dev      # http://localhost:3000  (/ přesměruje na /cs)
npm run build && npm start
```

## Před nasazením (SEO)

Nastav doménu webu – bez ní budou canonical URL, sitemap a Open Graph ukazovat na `localhost`:

```bash
cp .env.example .env.production   # a uprav NEXT_PUBLIC_SITE_URL
```

Co je hotové: titulky a popisy pro obě jazykové verze, `canonical` + `hreflang` (cs, en, x-default),
Open Graph a Twitter karty (`public/og-cs.png`, `public/og-en.png`), strukturovaná data schema.org
(`Person`, `ProfilePage`, `WebSite`), `robots.txt`, `sitemap.xml`, favicon (`src/app/icon.svg`) a apple-touch-icon.
Po nasazení přidej web do Google Search Console a odešli tam `https://<doména>/sitemap.xml`.

## Výkon

- Fonty jsou self-hostované a ořezané na latinku + češtinu/slovenštinu (`src/fonts/`).
- Animace jsou čisté CSS (žádná JS knihovna), respektují `prefers-reduced-motion`.
- CSS je vložené přímo do HTML (`experimental.inlineCss`), sekce pod přehybem používají `content-visibility: auto`.

## Co doplnit

| Co | Kde |
| --- | --- |
| Fotka | `public/` + cesta v `src/content/profile.ts` → `photo` (teď je tam stock z Unsplash: `public/photo-placeholder.jpg`) |
| CV v PDF | `public/cv.pdf` + `src/content/profile.ts` → `cvUrl: "/cv.pdf"` (dokud je `null`, tlačítko se nezobrazí) |
| Projekty | `messages/cs.json` a `messages/en.json` → `projects.items` (k položce lze přidat `"url"` a `"image"`, např. `"/projects/xyz.png"`) |
| Praxe | `messages/*.json` → `experience.items` |
| Jazyky (mluvené) | `messages/*.json` → `about.facts.languagesValue` |
| Technologie a loga | `src/content/profile.ts` → `stack`, loga v `public/logos/` |

Všechna místa k doplnění jsou v textech označená hranatými závorkami `[...]`.

## Struktura

- `messages/` — veškeré texty v obou jazycích
- `src/content/profile.ts` — kontakty, odkazy, rok začátku praxe, technologie
- `public/logos/` — loga technologií (simple-icons, devicon a oficiální loga projektů)
- `public/projects/` — screenshoty projektů
- `src/components/` — sekce stránky
- `src/i18n/`, `src/proxy.ts` — routing jazyků (next-intl)

Přidání dalšího jazyka: doplň kód do `src/i18n/routing.ts` a vytvoř `messages/<kód>.json`.

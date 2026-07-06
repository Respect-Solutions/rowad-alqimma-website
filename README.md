# Rowad Al Qimma — Corporate Website

Official website for **Rowad Al Qimma**, a Saudi-based consultancy offering company formation, administrative consulting, corporate legal advisory, and marketing strategy services.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **next-intl** for Arabic/English bilingual support.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| i18n | next-intl 4 |
| Forms | React Hook Form + Zod |
| Email | Resend |
| CAPTCHA | Cloudflare Turnstile |
| Icons | react-icons, lucide-react |

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Localized pages (ar / en)
│   │   ├── page.tsx           # Home
│   │   ├── about/             # About page
│   │   ├── contact-us/        # Contact page
│   │   ├── projects/          # Projects showcase
│   │   └── services/          # Services + sub-pages
│   ├── api/contact/           # Contact form API route (Resend + Turnstile)
│   ├── social-links/          # Standalone link-in-bio page (no locale)
│   └── not-found.tsx          # 404 fallback
├── components/
│   ├── layout/                # Header, Footer
│   ├── pages/                 # Page-level compositions
│   ├── sections/              # Individual page sections
│   ├── seo/                   # JsonLd structured data
│   └── ui/                    # Button, Container, IconImage, etc.
├── data/
│   └── site.ts                # Static content (nav, stats, FAQ, footer)
├── hooks/
│   └── useLocale.ts           # Locale helper (isArabic / isEnglish)
├── i18n/
│   └── request.ts             # next-intl server config
├── lib/
│   └── assets.ts              # Asset path map
└── types/
    └── index.ts               # Shared TypeScript types
```

---

## Pages & Routes

| URL | Description |
|---|---|
| `/` | Redirects to `/ar` |
| `/ar` or `/en` | Home page |
| `/ar/من-نحن` / `/en/about` | About |
| `/ar/الخدمات` / `/en/services` | Services overview |
| `/ar/الخدمات/...` | Service sub-pages (company formation, admin consulting, corporate legal, marketing) |
| `/ar/المشاريع` / `/en/projects` | Projects |
| `/ar/اتصل-بنا` / `/en/contact-us` | Contact |
| `/social-links` | Link-in-bio page (locale-independent) |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Resend — email delivery
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx

# Cloudflare Turnstile — CAPTCHA (server-side secret)
TURNSTILE_SECRET_KEY=0xxxxxxxxxxxxxxxxxxx

# Cloudflare Turnstile — CAPTCHA (client-side site key, exposed to browser)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0xxxxxxxxxxxxxxxxxxx
```

> Get Resend keys at resend.com and Turnstile keys at dash.cloudflare.com.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint & Type Check

```bash
npm run lint
npm run typecheck
```

---

## Docker

```bash
# Build and run with Docker Compose
docker-compose up --build
```

The app runs on port `3000`. Add a `.env` file (or pass environment variables directly) before running in production — the `docker-compose.yml` does not currently include the required secrets.

---

## Known Issues

### Critical

1. **`IconImage` ignores its `name` prop** ([src/components/ui/IconImage.tsx:20](src/components/ui/IconImage.tsx#L20))
   The `src` is hardcoded to `/assets/navLogo.png` for every instance, regardless of which asset name is passed. All icon images across the site render the same logo. Fix: replace the hardcoded string with `assets[name]`.

2. **No `.env.example` file**
   The three required environment variables (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`) are not documented anywhere in the repo. A new developer cannot run the contact form without finding them by reading the API route.

3. **i18n translations are empty** ([src/i18n/request.ts](src/i18n/request.ts))
   `getRequestConfig` returns `messages: {}` — no translation files are loaded. All bilingual text is manually inlined with `isArabic ? "..." : "..."` guards throughout components, bypassing the i18n system entirely.

### Bugs

4. **Google Maps iframe has no `height` attribute** ([src/components/sections/ContactSection.tsx:456-461](src/components/sections/ContactSection.tsx#L456-L461))
   The iframe has `width="100%"` but no `height`, so the map is invisible in all browsers.

5. **Duplicate FAQ question in `companyFormation` variant** ([src/components/sections/FAQ.tsx:152-157](src/components/sections/FAQ.tsx#L152-L157))
   "Are there any hidden fees?" appears twice in the English FAQ list with identical answers.

6. **`corporateLegal` FAQ content is a copy of `administrativeConsulting`** ([src/components/sections/FAQ.tsx:275-338](src/components/sections/FAQ.tsx#L275-L338))
   All four English and Arabic questions for the `corporateLegal` variant are identical to `administrativeConsulting`. The content was never updated after being copy-pasted.

7. **`marketEntry` Arabic FAQ questions don't match the English content** ([src/components/sections/FAQ.tsx:388-411](src/components/sections/FAQ.tsx#L388-L411))
   The Arabic version has 4 generic admin consulting questions; the English version has 6 marketing-specific questions. They address completely different topics.

8. **Duplicate `declare global` for `Window.turnstile`**
   Declared in both [src/types/index.ts](src/types/index.ts) and [src/components/sections/ContactSection.tsx:22-29](src/components/sections/ContactSection.tsx#L22-L29), which can cause TypeScript conflicts. The one in `ContactSection` should be removed.

### Code Quality

9. **Duplicate assets file** — [src/data/assets.ts](src/data/assets.ts) and [src/lib/assets.ts](src/lib/assets.ts) are byte-for-byte identical. Only `src/lib/assets.ts` is imported by components; `src/data/assets.ts` is unused and should be deleted.

10. **Placeholder stats data** ([src/data/site.ts:38-43](src/data/site.ts#L38-L43))
    `["10B+", "Companies"]` is clearly wrong (10 billion companies). The stats array appears to contain placeholder data that was never replaced with real figures.

11. **Footer link data is all placeholder** ([src/data/site.ts:72-85](src/data/site.ts#L72-L85))
    All three footer columns repeat the same four links, and the "Contacts" column lists "Terms of Service" twice. These links are static strings with no `href` values.

12. **`/social-links` has no i18n support** ([src/app/social-links/page.tsx](src/app/social-links/page.tsx))
    The page lives outside the `[locale]` folder so it has no language switcher, RTL layout, or Arabic translation.

13. **`not-found.tsx` is unstyled** ([src/app/not-found.tsx](src/app/not-found.tsx))
    Returns a bare `<div>Page Not Found</div>` with no layout, navigation, or branding. Users who hit a 404 have no way to navigate back to the site.

14. **Middleware pathnames incomplete** ([middleware.ts](middleware.ts))
    Only top-level routes are listed in the `pathnames` config. The four service sub-pages (`/services/administrative-consulting`, etc.) are missing, so they won't receive localized URL slugs.

15. **`docker-compose.yml` missing required secrets** ([docker-compose.yml](docker-compose.yml))
    Production container will fail to send emails or verify CAPTCHA because no environment variables are wired in. Add an `env_file: .env` directive or explicit `environment` entries.

16. **Two sections commented out on the home page** ([src/app/[locale]/page.tsx:28-29](src/app/[locale]/page.tsx#L28-L29))
    `<WhoWeAre />` and `<CommandCenterSystem />` are imported but commented out. Either remove the dead code and their imports, or restore the sections.

---

## Contact

- Email: info@rowadalqimma.com
- Phone: +966 55 400 8202
- Address: Riyadh, Qurtubah District, Al-Hassan Ibn Hussein St.
- WhatsApp: +966 55 376 8622

# Samreen Hasan Zaidi — Portfolio

A dark-mode, developer-styled portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Content is pulled from `lib/data.ts` — edit that one file to update anything on the site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

All text (name, summary, skills, experience, certifications, awards, contact links) lives in `lib/data.ts`. There's no CMS or database — just edit the values and save.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**

```bash
npm install -g vercel
vercel
```

Follow the prompts (log in, confirm project settings, deploy). Vercel auto-detects Next.js — no config needed.

**Option B — GitHub + Vercel dashboard**

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repository, and click **Deploy**. Vercel will detect the Next.js framework automatically and use `npm run build` / `.next` output — no settings to change.

## Project structure

```
app/            Next.js App Router pages, layout, global styles
components/     Section components (Hero, Skills, Experience, etc.)
lib/data.ts     All portfolio content — edit this to personalize
public/         Static assets (add a favicon/og-image here if desired)
```

## Notes

- Phone number from the source resume was intentionally left off the public site. Add it to `lib/data.ts` and wire it into `components/Contact.tsx` if you want it visible.
- `metadataBase` in `app/layout.tsx` is set to a placeholder (`https://example.com`) — update it to your real Vercel domain once deployed, for correct social-share previews.

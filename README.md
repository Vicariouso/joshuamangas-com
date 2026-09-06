# joshuamangas.com

Personal brand site for **Joshua Mangas** — founder of SGAF (School Governance Assurance Framework), serving chair of governors, and previously SLT.

A single-page Next.js site covering who he is, SGAF, NetCall, selected governance content, and contact details.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-friendly (no auth, CMS, or database)

## Local development

Install dependencies, then start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import the GitHub repo Vicariouso/joshuamangas-com in Vercel.
2. Framework preset: Next.js (auto-detected). Build command next build; default output.
3. Deploy from the main branch.
4. When ready for the custom domain: add joshuamangas.com (and www if desired) under Project Settings Domains, then point DNS as Vercel instructs. Do not purchase domains from this repo workflow.

No environment variables are required for the current homepage.

## Links

- Site (intended): https://joshuamangas.com
- SGAF: https://governanceassurance.co.uk
- NetCall: https://netcallumpire.com/
- Repo: https://github.com/Vicariouso/joshuamangas-com

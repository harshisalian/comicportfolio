# Harshitha Salian — Portfolio (Next.js)

Next.js 15 (App Router) + TypeScript. Your original `style.css` is kept as `app/globals.css`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Where to edit things
- `lib/data.ts` — all text: about panels, stack, projects, certifications, blog list, contact info
- `components/` — one component per section
- `app/blog/[slug]/page.tsx` — blog post page
- `app/globals.css` — styles

## Contact form
1. Create a free form at https://formspree.io and copy the form ID.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID=yourid`.
3. On Vercel, add the same variable under Project Settings -> Environment Variables.
Without it, the form falls back to opening the visitor's mail app.

## Deploy
Push to GitHub, import the repo at vercel.com. No settings needed.

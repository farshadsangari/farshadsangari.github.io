# Farshad Sangari — Portfolio

Personal site for Farshad Sangari Abiz — AI Software Engineer & Generative AI Researcher.

**Site:** https://farshadsangari.github.io/

## Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

Open http://localhost:8080/

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build (static prerender for GitHub Pages) |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Deploy

Pushing to `main` runs GitHub Actions, which builds the static site and deploys it to GitHub Pages (`https://farshadsangari.github.io/`).

In the repo settings, Pages source must be **GitHub Actions** (not “Deploy from a branch”).

## Stack

- TanStack Start (React)
- Vite
- Tailwind CSS
- TypeScript

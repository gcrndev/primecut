# Prime Cut Web App

Modern landing experience for a premium barbershop. This repo contains a Vite + React + shadcn/ui frontend that you can customize for your own brand.

## Getting Started

1. Ensure you have Node.js and npm installed (we recommend [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).
2. Clone and install dependencies:

```sh
git clone YOUR_GIT_URL
cd YOUR_PROJECT_NAME
npm install
```

3. Start the dev server:

```sh
npm run dev
```

4. Visit the printed URL (defaults to `http://localhost:5173`) to preview changes.

## Available Scripts

- `npm run dev` – start Vite in development mode
- `npm run build` – create an optimized production build
- `npm run build:dev` – production build using the development config
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the project

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui component primitives
- React Router for routing

## Deployment

Deploy the `dist` output folder to your preferred static host (Vercel, Netlify, Cloudflare Pages, etc.). Run `npm run build`, then follow your host’s upload instructions.

## Placeholder Reference

| Placeholder             | Location                                      | What to supply                                          |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------- |
| `YOUR_GIT_URL`          | `README.md` (clone command)                   | Git URL of your repository                              |
| `YOUR_PROJECT_NAME`     | `README.md` (cd command)                      | Directory name created by `git clone`                   |
| `YOUR_SOCIAL_IMAGE_URL` | `index.html` (Open Graph + Twitter meta tags) | Absolute URL to the social sharing image for your brand |

Replace each placeholder before deploying/handing off the project to ensure accurate branding.

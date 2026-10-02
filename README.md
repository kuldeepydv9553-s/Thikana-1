# Thikana Cafe and Restaurant

A responsive restaurant frontend built with React, Vite, React Router, and Leaflet.

## Run locally

Use Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm ci
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy to Vercel

Import the repository in Vercel and configure:

- **Root Directory:** `Thikana cafe and restaurant` when the repository root is its parent folder; leave as `.` if this project folder is the repository root.
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm ci`
- **Node.js Version:** 22.x (20.19+ also supported)

The included `vercel.json` rewrites frontend routes to the Vite app entry point so direct visits and refreshes on routes such as `/menu` and `/order-tracking` work.

No environment variables are required for the current demo. Browser geolocation requires user permission and a secure context such as HTTPS; the delivery rider location is simulated.

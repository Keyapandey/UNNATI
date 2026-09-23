# UNNATI — React Frontend

This version converts the original multi-page HTML frontend into a React/Vite frontend.

## What was preserved

- Existing page markup and CSS styling
- Existing IDs/classes used by the calculators and forms
- Existing localStorage flows
- Existing English/Hindi language system
- Existing financial calculators and planners
- Existing UNNATI assistant
- Existing navigation between all frontend screens

## Structure

- `src/pages/` — React JSX page components converted from the original HTML pages
- `src/components/LegacyPage.jsx` — mounts the existing page-specific JS after the React page is rendered
- `src/legacy/` — existing frontend JavaScript, adapted only for SPA navigation
- `src/legacySources.js` — Vite raw imports for the legacy JS modules
- `public/css/` — original CSS files
- `public/assets/` — original assets
- `public/languages/` — English/Hindi translation JSON files
- `src/main.jsx` — React SPA routing/navigation
- `index.html` — Vite entry point (this is the only HTML file required by Vite)

## Run

```bash
npm install
npm run dev
```

If npm reports a missing optional `rolldown` native binding, delete `node_modules` and `package-lock.json`, then run `npm install` again.

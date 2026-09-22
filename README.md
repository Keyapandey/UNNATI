# UNNATI — React SPA Migration

This version keeps the original UNNATI HTML/CSS/JavaScript implementation and places it under a React + Vite SPA shell.

## What was preserved
- Existing HTML markup
- Existing CSS files and visual styling
- Existing JavaScript behavior/calculations
- Existing assets and language JSON files
- Existing localStorage data flow

## Navigation fix
All existing `.html` links and the original `window.location.href` redirects are routed through the React History API bridge. This prevents a full browser/page reload between UNNATI steps.

## Run
```bash
npm install
npm run dev
```

Then open the Vite localhost URL.

This is intentionally a preservation-first migration: no UI redesign or feature changes were introduced.

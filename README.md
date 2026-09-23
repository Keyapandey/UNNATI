UNNATI — React Frontend
This version converts the original multi-page HTML frontend into a React + Vite frontend while preserving the existing functionality and user interface.
What was preserved
- Existing page structure, UI, and CSS styling
- Existing IDs and classes required by calculators and forms
- Existing localStorage data flows
- Existing English/Hindi language system
- Existing financial calculators and repayment planners
- Existing UNNATI assistant
- Existing navigation across all frontend screens
- Existing frontend assets and translation files
Project Structure
- src/pages/ — React JSX components for all frontend pages
- src/components/ — Reusable React components and legacy integration
- src/legacy/ — Existing frontend JavaScript adapted for the React environment
- src/legacySources.js — Vite imports for legacy JavaScript modules
- src/main.jsx — React entry point and client-side navigation
- src/app.css — Global React application styling
- public/css/ — Existing CSS resources
- public/assets/ — Images, icons, and other frontend assets
- public/languages/ — English and Hindi translation files
- index.html — Vite's main HTML entry point
Tech Stack
- React
- Vite
- JavaScript / JSX
- CSS
- LocalStorage
- HTML5
- Existing frontend JavaScript modules
Getting Started
Install the dependencies:
npm install
Start the development server:
npm run dev
The application will then be available at the local Vite development URL shown in the terminal.
Build for Production
To create a production build:
npm run build
To preview the production build locally:
npm run preview
Note
The project uses React as the frontend framework while retaining the existing frontend logic and styling required for the prototype's calculators, forms, language system, navigation, and other functionality. `rolldown` native binding, delete `node_modules` and `package-lock.json`, then run `npm install` again.

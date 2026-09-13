# 🧱 DevStack Builder

**DevStack Builder** is a React + TypeScript web app that lets you browse a curated list of modern
development technologies — frontend, backend, database, language, styling, DevOps, and tooling — and
build your own personal tech stack by adding the ones you like to a "Your Stack" panel.

## 🛠️ Tech Used

- **React 19 + TypeScript** (Vite) — typed, component-based UI
- **Tailwind CSS v4** — utility-first styling via the `@tailwindcss/vite` plugin, with a single shared
  brand gradient (orange → pink → violet)
- **React-Toastify** — toast notifications for add / duplicate / remove / remove-all actions
- **JSON** — technology data loaded at runtime via `fetch`, typed against a `Technology` interface

## ✨ Features

1. **Build-your-own stack** — click "Add to Stack" on any of the 15 technology cards and it instantly
   appears in the sticky "Your Stack" sidebar, with the source card's button switching to a disabled
   "✓ Added to Stack" state.
2. **Guarded duplicates & one-click reset** — trying to add the same technology twice shows a toast
   warning instead of a duplicate entry; "Remove All" clears the whole stack, and each stack item also
   has its own ✕ to remove just that one.
3. **Fully responsive, themeable, type-safe UI** — a sticky navbar that collapses into a hamburger menu
   on mobile, a 3 → 2 → 1 column technology grid, and a whole-site gradient theme defined in exactly one
   place (`tailwind.config.js`). Every component's props are typed via `Technology` in
   `src/types/technology.ts`, so passing the wrong shape of data is a compile-time error, not a runtime bug.


## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To type-check and build for production:

```bash
npm run build
```

## 📁 Project Structure

    src/
      assets/
        hero illustration
        logo
        hamburger icon
        devicon
      types/
        technology.ts
      components/
        Navbar
        Hero
        Loader
        TechnologyCard
        TechnologyGrid
        YourStack
        Footer(.tsx)
      App.tsx data fetching, loading state, stack state/logic
      main.tsx app entry + ToastContainer
    public/
      data/
        technologies.json technology data, fetched at runtime
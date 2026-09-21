# Dev Insights — Mini Blog

An internal mini blog platform for Dev Insights employees to share quick web development tips, insights, and updates. Built with **React 18**, **TypeScript**, and **Vite**.

## Getting Started

This project is scaffolded and run with [Vite](https://vitejs.dev/), so there is no separate build config to manage — Vite handles the dev server, TypeScript compilation, and production bundling.

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/Umurerwa3/Mini_Blog_ReactProject.git
cd Mini_Blog_ReactProject
npm install
```

### Running the app

```bash
npm run dev
```

This starts the Vite dev server (with hot module reload) at `http://localhost:5173`.

### Building for production

```bash
npm run build
```

Type-checks the project with `tsc` and outputs an optimized production build to `dist/`.

### Previewing the production build

```bash
npm run preview
```

### "Testing" the app

There is no automated test suite in this assessment. To manually verify the app works:

1. Run `npm run dev` and open the printed local URL in a browser.
2. Confirm the Header renders the "DevInsights" logo and the "New Post" link.
3. Confirm three sample posts render under "Latest Posts", each with a title, author, content preview, and date.
4. Confirm the post authored by "Aline Mukamana" is visually highlighted, and the most recent post shows a "New!" badge.
5. Open the browser console and confirm `[withLogger] Header mounted` is logged on load.

## Project Structure

```
src/
├── components/
│   ├── Header/        # Site logo + nav link
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Post/           # Single blog post card (reusable)
│   │   ├── Post.tsx
│   │   └── Post.css
│   └── PostList/        # Renders the list of Post cards
│       ├── PostList.tsx
│       └── PostList.css
├── data/
│   └── posts.ts        # Hardcoded sample post data
├── hoc/
│   └── withLogger.tsx  # Higher-order component for mount/unmount logging
├── types/
│   └── Post.ts          # Shared Post TypeScript interface
├── App.tsx              # Root component: renders Header + PostList
├── App.css
├── main.tsx             # React entry point
└── index.css            # Global styles
```

Each component lives in its own folder alongside its stylesheet, and shared types/data are pulled out of the components so they can be reused or swapped for a real API later without touching the UI layer.

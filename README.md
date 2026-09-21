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

## Component Design Choices

### Functional vs. Class Component (`Post`)

The `Post` component is implemented as a **functional component**, not a class component. Reasoning:

- `Post` is purely presentational — it takes a `post` object (and an optional `highlightAuthor` string) as props and renders them. It has no internal state and no lifecycle logic of its own, so a class component's `render()`, `this.props`, and constructor boilerplate would add ceremony without adding value.
- Functional components are the current standard in React (the official docs, and every piece of module material from these first three weeks, present hooks-based functional components as the default). Writing a class component here would go against that convention for no functional benefit.
- Functional components compose more naturally with `React.memo` (used for optimization, see below) and with the `withLogger` higher-order component — both are simpler to apply to a function than to a class.

All other components in this app (`Header`, `PostList`, `App`) are functional for the same reasons.

## Styling

Two styling approaches are used, on purpose, in different places:

1. **External CSS files** — Every component (`Header`, `Post`, `PostList`, `App`) has its own co-located `.css` file imported directly into the component. This keeps styles scoped by naming convention (BEM-ish, e.g. `post__title`, `header__nav-link`) and keeps the component files focused on markup/logic rather than style declarations.
2. **Inline styles** — Used for one-off, dynamic, per-instance styling that depends on runtime data rather than a fixed class. In `Post.tsx`, the `logoStyle`-equivalent pattern is used in `Header.tsx` for the logo's font weight, and — more importantly — `Post.tsx` applies an inline `style={{ borderLeftColor: '#f0a500' }}` conditionally, driven by whether the post's author matches the `highlightAuthor` prop.

### Conditional styling

Two conditional styling rules are implemented in `Post.tsx`:

- **Author highlight** — Posts authored by "Aline Mukamana" (passed down from `PostList` as `highlightAuthor`) get the `post--highlighted` class (a soft background tint) *and* an inline `borderLeftColor`, demonstrating both styling methods reacting to the same condition.
- **"New!" badge** — Posts with a `date` within the last 24 hours (checked against `Date.now()`) render a small green "New!" badge next to the title.

## Optimization & Higher-Order Components

- **`React.memo`** — The `Post` component is wrapped in `memo()` before export (`src/components/Post/Post.tsx`). Since `PostList` maps over an array to render several `Post` cards, `memo` prevents a `Post` card from re-rendering when its own props haven't changed, even if a parent re-renders for an unrelated reason.
- **Unique `key` prop** — `PostList` renders posts with `key={post.id}` (a stable, unique post ID) rather than the array index, so React can correctly track which DOM node maps to which post across re-renders/reorders.
- **`withLogger` HOC** — `src/hoc/withLogger.tsx` is a generic higher-order component that wraps any component and logs `[withLogger] <ComponentName> mounted` / `unmounted` to the console via a `useEffect` with an empty dependency array and a cleanup function. It's applied to `Header` in `App.tsx` (`const HeaderWithLogger = withLogger(Header)`), demonstrating cross-cutting behavior (logging) added without modifying the wrapped component itself.

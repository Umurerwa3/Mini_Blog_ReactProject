import type { Post } from '../types/Post'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with TypeScript Generics',
    author: 'Aline Mukamana',
    content:
      'Generics let you write reusable, type-safe components and functions without giving up type checking. Here is a quick tour of the syntax...',
    date: '2026-09-21',
  },
  {
    id: 2,
    title: 'Why We Moved to Vite for Local Development',
    author: 'James Okoro',
    content:
      'Our build times dropped from over a minute to under a second after switching from Webpack to Vite. Here is what changed under the hood...',
    date: '2026-09-18',
  },
  {
    id: 3,
    title: '5 CSS Layout Tricks Every Frontend Dev Should Know',
    author: 'Aline Mukamana',
    content:
      'Flexbox and Grid solve most layout problems, but a few lesser-known properties can save you from writing extra markup entirely...',
    date: '2026-09-10',
  },
]

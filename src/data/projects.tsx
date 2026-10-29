import type { ReactNode } from 'react'
import type { TechKey } from './techs'

export interface Project {
  /** Nazwa folderu ze zdjęciami: src/assets/projects/<slug>/ */
  slug: string
  title: string
  /** Podtytuł nad nazwą, np. „full-stack". */
  kind: string
  description: string
  stack: TechKey[]
  bullets: ReactNode[]
  /** Link do repozytorium. Brak = brak linku. */
  sourceUrl?: string
}

// Etykieta na początku punktu opisu (pogrubiona).
const B = ({ children }: { children: ReactNode }) => <strong className="em">{children}</strong>
const L = ({ children }: { children: ReactNode }) => <strong className="bl-k">{children}</strong>

// Kolejność = kolejność na stronie; okno ze zdjęciami jest na zmianę po lewej i po prawej.
export const PROJECTS: Project[] = [
  {
    slug: 'movie-central',
    title: 'Movie Central',
    kind: 'full-stack',
    description: "A **movie discovery app** where users can search films, rate and review them, watch trailers and manage personal watchlists.",
    stack: ['java', 'springBoot', 'postgres', 'react', 'docker'],
    bullets: [
      <>
        <L>Movie discovery:</L> <B>TMDB API</B> integration for movie search, detailed information, trailers and trending titles
      </>,
      <>
        <L>Personal profile:</L> Watchlists, rating history, statistics and avatar, with public browsing and personalised features
      </>,
      <>
        <L>Data synchronization:</L> Movies are stored locally when users interact with them, with details refreshed after <B>24 hours</B>
      </>,
    ],
    sourceUrl: 'https://github.com/MateuszGruntkowski/Movie-Platform',
  },
  {
    slug: 'pit-wall',
    title: 'Pit Wall',
    kind: 'F1 companion app',
    description: "A **Formula 1 platform** featuring race results, driver statistics, championship standings and **machine-learning predictions**.",
    stack: ['react', 'typescript', 'fastapi', 'sklearn', 'pandas', 'numpy'],
    bullets: [
      <>
        <L>Race coverage:</L> Calendar, race results, circuit details and weather forecasts
      </>,
      <>
        <L>Driver analytics:</L> Career statistics, season results and current and historical standings
      </>,
      <>
        <L>ML predictions:</L> <B>Random forest</B> model estimating each driver's chances of winning, reaching the podium or finishing in the top 5 or top 10, trained on race results since 2013
      </>,
      <>
        <L>Prediction service:</L> Separate <B>FastAPI</B> backend serving precomputed predictions refreshed in the background, so the front end never triggers model runs
      </>,
    ],
    sourceUrl: 'https://github.com/MateuszGruntkowski/F1-Hub',
  },
  {
    slug: 'social-platform',
    title: 'Social Platform',
    kind: 'full-stack',
    description: "A **social publishing platform** where users create posts, interact through likes and comments, and explore content by category and tag.",
    stack: ['java', 'springBoot', 'postgres', 'react', 'docker'],
    bullets: [
      <>
        <L>Content management:</L> Posts, drafts and image uploads
      </>,
      <>
        <L>Social features:</L> Likes, comments and a category- and tag-filtered feed
      </>,
      <>
        <L>Admin panel:</L> Post and comment moderation, category and tag management, secured with <B>role-based access control</B>
      </>,
    ],
    sourceUrl: 'https://github.com/MateuszGruntkowski/Blog-Platform',
  },
]

// Projekty tylko wymienione w sekcji „More projects" (bez opisów).
export const MORE_PROJECTS = ['Credit Risk Modeling', 'Health Insurance Cost Prediction', 'Customer Segmentation', 'Ecommerce Store']

// Zdjęcia projektu leżą w src/assets/projects/<slug>/ (kolejność wg nazwy pliku: 01-…, 02-…).
// Vite wczytuje tylko pliki, które istnieją – nic więcej nie trzeba zmieniać.
const files = import.meta.glob<string>('/src/assets/projects/*/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getImages(slug: string): string[] {
  return Object.keys(files)
    .filter((path) => path.includes(`/projects/${slug}/`))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => files[path])
}

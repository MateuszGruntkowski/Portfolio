import { PROFILE } from './profile'

const assets = import.meta.glob<string>('/src/assets/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' })

/** Adres zdjęcia profilowego z PROFILE.photo (nazwa pliku w src/assets/ albo pełny adres) albo undefined. */
export function getPhoto(): string | undefined {
  const p = PROFILE.photo.trim()
  if (!p) return undefined
  if (p.startsWith('/') || p.startsWith('http')) return p
  return assets[`/src/assets/${p.replace(/^\.?\/?(src\/)?(assets\/)?/, '')}`]
}

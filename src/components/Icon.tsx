import { ICON_PATHS, type BrandIcon } from '../data/icons'

export function Icon({ name, className }: { name: BrandIcon | 'mail'; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {name === 'mail' ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </g>
      ) : (
        <path d={ICON_PATHS[name]} />
      )}
    </svg>
  )
}

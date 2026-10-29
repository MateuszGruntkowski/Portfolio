import { TECHS, type Tech, type TechKey } from '../data/techs'
import { techLogo } from '../data/logos'
import { Icon } from './Icon'

// Logo o ciemnych barwach (np. granat pandas) dostaje jasne tło, żeby było widoczne.
const ON_LIGHT: TechKey[] = ['pandas', 'mysql', 'sklearn']

/** Logo technologii + podpis. Plik logo: src/assets/logos/tech/<klucz>.svg. Bez pliku: puste pole na logo. */
export function TechGrid({ stack }: { stack: TechKey[] }) {
  return (
    <ul className="sk-grid">
      {stack.map((key) => {
        const tech: Tech = TECHS[key]
        const url = techLogo(key)
        return (
          <li key={key} className="sk-item">
            {url ? (
              <img className={ON_LIGHT.includes(key) ? 'sk-logo on-light' : 'sk-logo'} src={url} alt="" width={56} height={56} loading="lazy" />
            ) : tech.icon ? (
              <Icon className="sk-logo sk-inline" name={tech.icon} />
            ) : (
              <span className="sk-logo sk-missing" role="img" aria-label={`${tech.label} logo to be added`}>
                logo
              </span>
            )}
            <span className="sk-name">{tech.label}</span>
          </li>
        )
      })}
    </ul>
  )
}

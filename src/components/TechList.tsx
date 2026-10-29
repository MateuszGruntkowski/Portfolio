import type { CSSProperties } from 'react'
import { TECHS, type Tech, type TechKey } from '../data/techs'
import { Icon } from './Icon'
import { techLogo } from '../data/logos'


export function TechList({ stack }: { stack: TechKey[] }) {
  return (
    <ul className="tls">
      {stack.map((key) => {
        const tech: Tech = TECHS[key]
        return (
          <li key={key} className="tl" style={{ '--c': tech.color } as CSSProperties}>
            {techLogo(key) && !['pandas', 'mysql', 'sklearn'].includes(key) ? (
              <img className="ti-img" src={techLogo(key)} alt="" width={14} height={14} />
            ) : tech.icon ? (
              <Icon className="ti" name={tech.icon} />
            ) : (
              <i className="td" />
            )}
            {tech.label}
          </li>
        )
      })}
    </ul>
  )
}

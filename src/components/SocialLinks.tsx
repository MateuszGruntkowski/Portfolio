import { LINKS } from '../data/profile'
import { Icon } from './Icon'

type Link = (typeof LINKS)[number]

// LinkedIn nie ma ikony w simple-icons, więc używamy litery „in".
function Glyph({ id, size }: { id: Link['id']; size: 'icon' | 'row' }) {
  if (id === 'linkedin') return <span className="hd" style={{ fontSize: size === 'icon' ? 17 : 20 }}>in</span>
  return <Icon className="si" name={id === 'github' ? 'github' : 'mail'} />
}

/** Przyciski z ikonami w hero. Brak adresu = nieklikalne, oznaczone pole. */
export function SocialIcons() {
  return LINKS.map((l) =>
    l.url ? (
      <a key={l.id} className="ib" href={l.url} aria-label={`${l.label} profile`}>
        <Glyph id={l.id} size="icon" />
      </a>
    ) : (
      <span key={l.id} className="ib off" role="img" aria-label={`${l.label} link not added yet`} title={`${l.label}: add your link`}>
        <Glyph id={l.id} size="icon" />
      </span>
    ),
  )
}

/** Wiersze kontaktowe w stopce. */
export function ContactRows() {
  return LINKS.map((l) => {
    const content = (
      <>
        <span className="contact-icon">
          <Glyph id={l.id} size="row" />
        </span>
        <span className="contact-text">
          <span className="mono">{l.label}</span>
          <span>{l.url ? l.text : 'Not added yet'}</span>
        </span>
      </>
    )
    return l.url ? (
      <a key={l.id} className="contact-row" href={l.url}>
        {content}
        <span className="mono" aria-hidden="true">↗</span>
      </a>
    ) : (
      <div key={l.id} className="contact-row off">
        {content}
      </div>
    )
  })
}

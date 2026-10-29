import type { CSSProperties, ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  id: string
  number: string
  title: string
  style?: CSSProperties
  /** false = odsłania się tylko nagłówek; elementy w środku animują się same (projekty, osiągnięcia). */
  reveal?: boolean
  children: ReactNode
}

export function Section({ id, number, title, style, reveal = true, children }: Props) {
  const heading = (
    <div className="sh">
      <span className="mono">// {number}</span>
      <h2 className="hd">{title}</h2>
    </div>
  )

  return (
    <section id={id} className="sec" style={style}>
      <div className="wrap">
        {reveal ? (
          <Reveal amount={0.1}>
            {heading}
            {children}
          </Reveal>
        ) : (
          <>
            <Reveal>{heading}</Reveal>
            {children}
          </>
        )}
      </div>
    </section>
  )
}

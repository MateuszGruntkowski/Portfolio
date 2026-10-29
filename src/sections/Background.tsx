import { motion } from 'motion/react'
import { reveal } from '../components/Reveal'
import { rich } from '../components/Rich'
import { LogoSlot } from '../components/LogoSlot'
import { Section } from '../components/Section'
import { ACHIEVEMENTS, EDUCATION } from '../data/content'

export function Education() {
  return (
    <Section id="education" number="04" title="Education">
      <div className="row-wrap">
        {EDUCATION.map((e) => (
          <article key={e.status} className="card card-pad">
            <div className="card-head">
              <div className="mono">{e.status}</div>
              <LogoSlot name="university" alt="Poznań University of Economics and Business" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <h3 className="hd" style={{ fontSize: 28, lineHeight: 1.1 }}>
                {e.degree}
              </h3>
              <div className="body">{e.school}</div>
            </div>
            <div style={{ paddingTop: 12, borderTop: '1px solid #2B2E31' }}>
              {e.rows.map((r) => (
                <div key={r.label} className="kv">
                  <span className="lab" style={{ paddingTop: 3 }}>
                    {r.label}
                  </span>
                  <span>{rich(r.value)}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Achievements() {
  return (
    <Section id="achievements" number="05" title="Achievements" reveal={false} style={{ paddingBottom: 112 }}>
      <div className="row-wrap">
        {ACHIEVEMENTS.map((a) => (
          <motion.div
            key={a.title}
            {...reveal}
            className="card card-pad"
            style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '16px 32px' }}
          >
            <div className="hd" style={{ flex: '0 0 auto', fontSize: 56, lineHeight: 1, color: 'var(--accent)' }}>
              {a.value}
            </div>
            <div style={{ flex: '1 1 220px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <h3 className="hd" style={{ fontSize: 22, lineHeight: 1.2 }}>
                {a.title}
              </h3>
              <p className="body" style={{ fontSize: 16 }}>
                {rich(a.text)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

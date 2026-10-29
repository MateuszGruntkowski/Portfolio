import { rich } from '../components/Rich'
import { LogoSlot } from '../components/LogoSlot'
import { Section } from '../components/Section'
import { TechGrid } from '../components/TechGrid'
import { TechList } from '../components/TechList'
import { EXPERIENCE as E, EXPLORING, SKILL_GROUPS } from '../data/content'

export function Experience() {
  return (
    <Section id="experience" number="02" title="Experience" style={{ paddingTop: 88 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 56px' }}>
        <div style={{ flex: '0 0 240px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="mono" style={{ color: '#D4D5D2', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ flex: '0 0 8px', height: 8, background: 'var(--accent)' }} />
            {E.period}
          </div>
          <div style={{ paddingTop: 12 }}>
            <LogoSlot name="employer" alt="IT.integro" />
          </div>
        </div>
        <div style={{ flex: '999 1 400px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <h3 className="hd" style={{ fontSize: 30, lineHeight: 1.1 }}>
              {E.title}
            </h3>
            <div className="body">{E.company}</div>
          </div>
          <p className="body" style={{ color: '#D4D5D2' }}>
            {rich(E.description)}
          </p>
          <ul className="bl">
            {E.bullets.map((b) => (
              <li key={b} className="li">
                <span className="dot" />
                <span>{rich(b)}</span>
              </li>
            ))}
          </ul>
          <TechList stack={E.stack} />
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" number="03" title="Skills" style={{ paddingBottom: 104 }}>
      <div className="sk-rows">
        {SKILL_GROUPS.map((g) => (
          <div key={g.label} className="sk-row">
            <h3 className="hd sk-label">{g.label}</h3>
            <TechGrid stack={g.stack} />
          </div>
        ))}
      </div>
      <p className="stk" style={{ marginTop: 40, color: '#8E9194' }}>
        <span className="k">exploring</span>&nbsp; {EXPLORING}
      </p>
    </Section>
  )
}

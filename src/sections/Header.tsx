import { Fragment } from 'react'
import { motion } from 'motion/react'
import { fadeUp, stagger } from '../components/Reveal'
import { rich } from '../components/Rich'
import { SocialIcons } from '../components/SocialLinks'
import { getPhoto } from '../data/photo'
import { PROFILE } from '../data/profile'

export function Header() {
  const photo = getPhoto()
  const factText = { fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 16, lineHeight: 1.45 }

  return (
    <header id="top" className="hero-under-nav">
      <div className="wrap" style={{ paddingTop: 52, paddingBottom: 88 }}>

        <motion.div
          className="hero-row"
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '56px 72px', paddingTop: 72 }}
        >
          <div style={{ flex: '999 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
            <motion.div variants={fadeUp} className="mono">
              {PROFILE.role}
            </motion.div>
            <motion.h1 variants={fadeUp} className="hd" style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
              Mateusz
              <br />
              Gruntkowski
            </motion.h1>
            <motion.p variants={fadeUp} className="body hero-intro" style={{ fontSize: 20, lineHeight: 1.55, maxWidth: 580, color: '#D4D5D2' }}>
              {rich(PROFILE.intro)}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="stk"
              style={{
                display: 'grid',
                gridTemplateColumns: '84px minmax(0, 1fr)',
                columnGap: 14,
                rowGap: 10,
                maxWidth: 580,
                paddingTop: 16,
                borderTop: '1px solid #2B2E31',
              }}
            >
              {PROFILE.facts.map((f) => (
                <Fragment key={f.key}>
                  <span className="k">{f.key}</span>
                  {f.marker ? (
                    <span style={{ display: 'flex', gap: 10, alignItems: 'baseline', ...factText }}>
                      <span style={{ flex: '0 0 8px', height: 8, background: 'var(--accent)', transform: 'translateY(-1px)' }} />
                      <span>{rich(f.value)}</span>
                    </span>
                  ) : (
                    <span style={factText}>{rich(f.value)}</span>
                  )}
                </Fragment>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, paddingTop: 6 }}
            >
              <a className="btn" href="#projects">
                View projects
              </a>
              <a className="btn-line" href={PROFILE.cvUrl} download>
                Download CV
              </a>
              <span style={{ width: 1, height: 24, background: '#2B2E31', margin: '0 4px' }} />
              <SocialIcons />
            </motion.div>
          </div>

          <motion.figure variants={fadeUp} className="hero-side">
            {/* Zdjęcie w cienkiej, animowanej zielonej obwódce (CSS: .photo-frame). Ścieżkę pliku ustawia się w src/data/photo.ts */}
            <div className="photo-frame">
              {photo ? (
                <div className="ph">
                  <img className="ph-img" src={photo} alt={PROFILE.name} width={240} height={300} />
                </div>
              ) : (
                <div className="ph" role="img" aria-label="Portrait placeholder">
                  <span className="mono" style={{ textAlign: 'center' }}>
                    your photo
                    <br />
                    portrait · 4 : 5
                  </span>
                </div>
              )}
            </div>
            <figcaption className="mono">Mateusz Gruntkowski · Poznań</figcaption>
            <ul className="hl" aria-label="Highlights">
              {PROFILE.highlights.map((h) => (
                <li key={h.value}>
                  <span className="hd hl-v">{h.value}</span>
                  <span className="mono">{h.label}</span>
                </li>
              ))}
            </ul>
          </motion.figure>
        </motion.div>
      </div>
    </header>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { Icon } from './Icon'
import { LINKS, NAV, PROFILE } from '../data/profile'

/** Przyklejony pasek nawigacji. Tło pojawia się dopiero po przewinięciu (IntersectionObserver, bez nasłuchu scroll). */
/** Cienki pasek u góry: szerokość = postęp przewijania strony (pełny na samym dole). */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
}

export function Nav() {
  const sentinel = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <ScrollProgress />
      <div ref={sentinel} className="nav-sentinel" aria-hidden="true" />
      <div className={scrolled ? 'nav-bar scrolled' : 'nav-bar'}>
        <div className="wrap">
          <nav aria-label="Main" className="nav-in">
            <a className="hd nav-name" href="#top">
              {PROFILE.name}
            </a>
            <div className="nav-links">
              {NAV.map((n) => (
                <a key={n.href} className="nl" href={n.href}>
                  {n.label}
                </a>
              ))}
              <a className="nl" href={LINKS[0].url} aria-label="GitHub profile" style={{ color: '#ECECE8' }}>
                <Icon className="si" name="github" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

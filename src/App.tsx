import { MotionConfig } from 'motion/react'
import { Achievements, Education } from './sections/Background'
import { Experience, Skills } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Intro } from './components/Intro'
import { Nav } from './components/Nav'
import { Header } from './sections/Header'
import { Projects } from './sections/Projects'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <Intro />
    <div className="page">
      <Nav />
      <Header />
      <main>
        <Projects />
        <div style={{ marginTop: 112, background: '#17191B', borderTop: '1px solid #2B2E31', borderBottom: '1px solid #2B2E31' }}>
          <Experience />
          <Skills />
        </div>
        <Education />
        <Achievements />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  )
}

import { motion } from 'motion/react'
import { ProjectCard } from '../components/ProjectCard'
import { reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { LINKS } from '../data/profile'
import { MORE_PROJECTS, PROJECTS } from '../data/projects'

export function Projects() {
  return (
    <Section id="projects" number="01" title="Projects" style={{ paddingTop: 0 }} reveal={false}>
      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.slug} project={p} number={i + 1} reverse={i % 2 === 1} separated={i > 0} />
      ))}

      <motion.div {...reveal} className="more">
        <p className="body">
          More projects are available on my GitHub, including{' '}
          <span style={{ color: '#ECECE8' }}>{MORE_PROJECTS.join(', ')}</span>.
        </p>
        <a className="plink" href={LINKS[0].url}>
          View GitHub ↗
        </a>
      </motion.div>
    </Section>
  )
}

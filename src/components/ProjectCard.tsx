import { motion } from 'motion/react'
import { getImages, type Project } from '../data/projects'
import { rich } from './Rich'
import { ProjectWindow } from './ProjectWindow'
import { reveal } from './Reveal'
import { TechList } from './TechList'

interface Props {
  project: Project
  number: number
  /** Okno ze zdjęciami po prawej stronie (zamiast po lewej). */
  reverse?: boolean
  /** Górny odstęp i linia oddzielająca od poprzedniego projektu. */
  separated?: boolean
}

export function ProjectCard({ project, number, reverse, separated }: Props) {
  return (
    <motion.article
      {...reveal}
      className={`proj fz${reverse ? ' rev' : ''}${separated ? ' proj-row' : ''}`}
    >
      <ProjectWindow title={project.title} images={getImages(project.slug)} />
      <div className="pcol">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="mono">
            {String(number).padStart(2, '0')} · {project.kind}
          </span>
          <h3 className="hd ptitle" style={{ fontSize: 36, lineHeight: 1.08 }}>
            {project.title}
          </h3>
          <p className="body">{rich(project.description)}</p>
        </div>
        <TechList stack={project.stack} />
        <ul className="bl">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="li">
              <span className="dot" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {project.sourceUrl && (
          <div className="plinks">
            <a className="plink" href={project.sourceUrl}>
              Source ↗
            </a>
          </div>
        )}
      </div>
    </motion.article>
  )
}

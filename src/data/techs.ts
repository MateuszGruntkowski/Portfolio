import type { BrandIcon } from './icons'

export interface Tech {
  label: string
  /** Oryginalny kolor marki – używany do obramowania i ikony etykiety. */
  color: string
  /** Brak ikony = etykieta z kolorową kropką. */
  icon?: BrandIcon
}

// Jedno miejsce, gdzie definiujemy wygląd technologii. Projekty i umiejętności
// odwołują się do kluczy, więc kolor i ikona są wszędzie spójne.
export const TECHS = {
  // backend
  java: { label: 'Java', color: '#E8793A', icon: 'java' },
  springBoot: { label: 'Spring Boot 3', color: '#6DB33F', icon: 'springboot' },
  python: { label: 'Python', color: '#5C9BD1', icon: 'python' },
  fastapi: { label: 'FastAPI', color: '#2FB5A5', icon: 'fastapi' },
  // frontend
  javascript: { label: 'JavaScript', color: '#E8CF3A', icon: 'js' },
  typescript: { label: 'TypeScript', color: '#3D8BD9', icon: 'ts' },
  react: { label: 'React', color: '#61DAFB', icon: 'react' },
  html: { label: 'HTML', color: '#E8683F', icon: 'html' },
  css: { label: 'CSS', color: '#33A9DC' },
  tailwind: { label: 'Tailwind CSS', color: '#38BDF8', icon: 'tailwind' },
  // bazy danych
  postgres: { label: 'PostgreSQL', color: '#5E8FD0', icon: 'pg' },
  mysql: { label: 'MySQL', color: '#4F8DB8' },
  sqlite: { label: 'SQLite', color: '#44A3D8', icon: 'sqlite' },
  mongodb: { label: 'MongoDB', color: '#47A248', icon: 'mongodb' },
  sql: { label: 'SQL', color: '#8E9194' },
  // narzędzia i devops
  git: { label: 'Git', color: '#E8573A', icon: 'git' },
  github: { label: 'GitHub', color: '#C9CDD1', icon: 'github' },
  docker: { label: 'Docker', color: '#2496ED', icon: 'docker' },
  maven: { label: 'Maven', color: '#D9475F' },
  postman: { label: 'Postman', color: '#FF6C37', icon: 'postman' },
  swagger: { label: 'Swagger / OpenAPI', color: '#7CC243', icon: 'swagger' },
  azureDevops: { label: 'Azure DevOps', color: '#3B96E8' },
  xml: { label: 'XML', color: '#E8A14A' },
  // ai / llm
  claudeCode: { label: 'Claude Code', color: '#D97757', icon: 'claude' },
  codex: { label: 'Codex', color: '#C9CDD1' },
  copilot: { label: 'GitHub Copilot', color: '#8B7CF6', icon: 'copilot' },
  // data & ml
  sklearn: { label: 'scikit-learn', color: '#F7931E' },
  pandas: { label: 'pandas', color: '#E7609E', icon: 'pandas' },
  numpy: { label: 'NumPy', color: '#4D77CF', icon: 'numpy' },
  matplotlib: { label: 'Matplotlib', color: '#4F8FC0' },
  seaborn: { label: 'Seaborn', color: '#4C9BB5' },
  pytorch: { label: 'PyTorch', color: '#EE4C2C', icon: 'pytorch' },
  // testy
  junit: { label: 'JUnit 5', color: '#3CB878', icon: 'junit' },
  pytest: { label: 'pytest', color: '#2DB1E8', icon: 'pytest' },
  // erp
  al: { label: 'AL', color: '#5AA0E8' },
  d365: { label: 'Dynamics 365 Business Central', color: '#5AA0E8' },
  nav: { label: 'Dynamics NAV 2018', color: '#5AA0E8' },
} as const satisfies Record<string, Tech>

export type TechKey = keyof typeof TECHS

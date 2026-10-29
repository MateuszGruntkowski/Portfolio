import type { TechKey } from './techs'

export const EXPERIENCE = {
  period: '07.2026 – Present',
  title: 'ERP Developer / Consultant (intern)',
  company: 'IT.integro',
  description: 'Developing and supporting **Microsoft Dynamics 365 Business Central** solutions in the **AL** language.',
  bullets: [
    'Designed and implemented a **module for scheduling inspections of fixed assets**, including its data structures, data flow and automated tests',
    "Extending the functionality of one of the company's custom Business Central modules",
    "Maintaining the company's internal Business Central system: diagnosing and fixing defects",
    'Collaborating with **international clients** to analyse and resolve reported issues',
    'Also worked with **Microsoft Dynamics NAV 2018**',
  ],
  stack: ['al', 'd365', 'nav', 'docker', 'xml', 'git', 'azureDevops'] as TechKey[],
}

// Tylko konkretne technologie i narzędzia – bez pojęć ogólnych (REST, prompt engineering, RAG, CI/CD).
export const SKILL_GROUPS: { label: string; stack: TechKey[] }[] = [
  { label: 'Backend', stack: ['java', 'springBoot', 'python', 'fastapi'] },
  { label: 'Frontend', stack: ['typescript', 'javascript', 'react', 'html', 'css', 'tailwind'] },
  { label: 'Databases', stack: ['postgres', 'mysql', 'sqlite', 'mongodb'] },
  { label: 'Data & ML', stack: ['sklearn', 'pytorch', 'pandas', 'numpy', 'matplotlib', 'seaborn'] },
  { label: 'Tools & testing', stack: ['git', 'github', 'docker', 'postman', 'azureDevops'] },
  { label: 'AI tools', stack: ['claudeCode', 'codex', 'copilot'] },
  { label: 'ERP', stack: ['al', 'd365', 'nav'] },
]

export const EXPLORING = 'RAG, AI agents, vector databases, Next.js'

const DEGREE = 'Computer Science & Econometrics'
const SCHOOL = 'Poznań University of Economics and Business'

export const EDUCATION = [
  {
    status: 'MSc · in progress · expected 2027',
    degree: DEGREE,
    school: SCHOOL,
    rows: [
      { label: 'specialization', value: 'IT in Business and Administration' },
      { label: 'thesis', value: 'Topic still open; most likely an application of **AI**' },
    ],
  },
  {
    status: 'BSc · completed',
    degree: DEGREE,
    school: SCHOOL,
    rows: [
      { label: 'specialization', value: 'Electronic Business' },
      { label: 'GPA', value: '**4.63** / 5.0' },
      {
        label: 'thesis',
        value: 'Application of **NLP** in Detecting and Classifying **Cyberbullying** in Online Comments',
      },
    ],
  },
]

export const ACHIEVEMENTS = [
  { value: 'Top 5%', title: "Rector's scholarship", text: 'Awarded to the **top 5%** of students for academic excellence.' },
  {
    value: '2nd',
    title: 'National thesis competition',
    text: "**2nd prize** in the national competition for the best Bachelor's thesis in Computer Science in Economics. Organised by NTIE (Naukowe Towarzystwo Informatyki Ekonomicznej).",
  },
]

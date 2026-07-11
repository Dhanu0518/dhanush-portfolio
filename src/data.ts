import type { ExperienceItem, ProjectItem, SkillGroup } from './types'

export const PROFILE = {
  name: 'S Dhanush',
  initials: 'SD',
  role: 'Senior Frontend Engineer',
  location: 'Bengaluru, India',
  email: 'sdhanush0777@gmail.com',
  phone: '8296488228',
  phoneHref: 'tel:8296488228',
  linkedin: 'https://linkedin.com/in/s-dhanush-152b28256',
  linkedinLabel: 'linkedin.com/in/s-dhanush-152b28256',
  github: 'https://github.com/Dhanu0518',
  githubLabel: 'github.com/Dhanu0518',
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Tata Elxsi',
    location: 'Bengaluru, India',
    dates: '07/2023 — PRESENT',
    bullets: [
      'Led <b>Azure AD SSO + RBAC</b> integration securing data for <b>10,000+ users</b>, cutting auth support tickets by 20%.',
      'Engineered a centralized state architecture with <b>Redux Toolkit + RTK Query</b>, reducing redundant API calls by 40%.',
      'Architected a modular component library and design system, cutting frontend dev cycles by 30% with 100% UI consistency across 3 enterprise apps.',
      'Mentor junior engineers on React best practices, Git workflows, and clean code.',
    ],
  },
  {
    role: 'Internship Trainee',
    company: 'Tata Elxsi',
    location: 'Bengaluru, India',
    dates: '02/2023 — 07/2023',
    bullets: [
      'Built foundational React.js skills through hands-on training in component-based architecture.',
      'Contributed to frontend features using React.js and SharePoint Framework (SPFx) in an Agile team.',
    ],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'iProfiler – TalentHub',
    bullets: [
      'Internal enterprise platform for employee skill management and project allocation.',
      'Redux Toolkit + REST API integration handling async flows and error states.',
      'Azure AD SSO integration for secure enterprise access.',
    ],
    tags: ['React', 'Redux Toolkit', 'Azure AD SSO'],
  },
  {
    title: 'RBAC + Azure AD SSO Starter Kit',
    status: 'launching-soon',
    bullets: [
      'Production-ready React + TypeScript starter kit for enterprise authentication.',
      'Route-level guards, element-level permission checks, custom useRoles() hook.',
      'Built to cut SSO/RBAC implementation time from weeks to days.',
    ],
    tags: ['React', 'TypeScript', 'MSAL React', 'RBAC'],
  },
]

export const SKILLS: SkillGroup[] = [
  { label: '// languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { label: '// frameworks & state', items: ['React.js', 'Next.js', 'Redux Toolkit', 'RTK Query', 'SPFx'] },
  { label: '// ui & styling', items: ['Tailwind CSS', 'SASS/SCSS', 'Material UI', 'Storybook', 'Design Systems'] },
  { label: '// auth & security', items: ['Azure AD (SSO)', 'MSAL React', 'RBAC'] },
  { label: '// tools', items: ['Git', 'Azure DevOps', 'Agile/Scrum', 'Webpack/Vite'] },
]

export const TERMINAL_LINES: { text: string; granted?: boolean }[] = [
  { text: '&gt; initializing profile...' },
  { text: '&gt; role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <b>Senior Frontend Engineer</b>' },
  { text: '&gt; experience &nbsp;&nbsp;&nbsp;: <b>3+ years</b>' },
  { text: '&gt; systems_secured : <b>10,000+ users</b> (Azure AD SSO + RBAC)' },
  { text: '&gt; api_calls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <b>-40%</b> (Redux Toolkit + RTK Query)' },
  { text: '&gt; dev_cycles &nbsp;&nbsp;&nbsp;: <b>-30%</b> (modular component library)' },
  { text: '&gt; status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ACCESS GRANTED — open to new roles', granted: true },
]

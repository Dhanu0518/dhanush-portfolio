export interface ExperienceItem {
  role: string
  company: string
  location: string
  dates: string
  bullets: string[]
}

export interface ProjectItem {
  title: string
  status?: 'launching-soon'
  bullets: string[]
  tags: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

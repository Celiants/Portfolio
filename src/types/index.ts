export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  year: string
  role: string
  tools: string[]
  tags: string[]
  description: string
  overview: string
  cover: string
  coverPosition?: string
  coverSize?: string
  images: string[]
  links: ProjectLink[]
  color: string
  accent: string
}

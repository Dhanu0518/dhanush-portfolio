import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../data'

function ProjectCard({ item }: { item: (typeof PROJECTS)[number] }) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`proj-card reveal${inView ? ' in' : ''}`}>
      <div className="proj-top">
        <span className="proj-title">{item.title}</span>
        {item.status === 'launching-soon' && <span className="pill-soon">LAUNCHING SOON</span>}
      </div>
      <ul className="proj-desc-list">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="tag-row">
        {item.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref: headRef, inView: headIn } = useReveal<HTMLDivElement>()

  return (
    <section id="projects">
      <div ref={headRef} className={`sec-head reveal${headIn ? ' in' : ''}`}>
        <div className="eyebrow mono">PROJECTS</div>
        <div className="sec-title">What I've shipped on my own</div>
      </div>
      <div className="proj-grid">
        {PROJECTS.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
    </section>
  )
}

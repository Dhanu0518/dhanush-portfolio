import { useReveal } from '../hooks/useReveal'
import { EXPERIENCE } from '../data'

function ExpCard({ item }: { item: (typeof EXPERIENCE)[number] }) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`exp-card reveal${inView ? ' in' : ''}`}>
      <div className="exp-top">
        <span className="exp-role">{item.role}</span>
        <span className="exp-dates mono">{item.dates}</span>
      </div>
      <div className="exp-co">
        {item.company} · {item.location}
      </div>
      <ul>
        {item.bullets.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  const { ref: headRef, inView: headIn } = useReveal<HTMLDivElement>()

  return (
    <section id="experience">
      <div ref={headRef} className={`sec-head reveal${headIn ? ' in' : ''}`}>
        <div className="eyebrow mono">EXPERIENCE</div>
        <div className="sec-title">Where I've built things</div>
      </div>

      {EXPERIENCE.map((item, i) => (
        <ExpCard key={i} item={item} />
      ))}
    </section>
  )
}

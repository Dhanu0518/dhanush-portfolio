import { useReveal } from '../hooks/useReveal'
import { SKILLS } from '../data'

function SkillGroupRow({ group }: { group: (typeof SKILLS)[number] }) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`skill-group reveal${inView ? ' in' : ''}`}>
      <div className="skill-group-label mono">{group.label}</div>
      <div className="chip-row">
        {group.items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref: headRef, inView: headIn } = useReveal<HTMLDivElement>()

  return (
    <section id="skills">
      <div ref={headRef} className={`sec-head reveal${headIn ? ' in' : ''}`}>
        <div className="eyebrow mono">SKILLS</div>
        <div className="sec-title">What I work with</div>
      </div>
      {SKILLS.map((group, i) => (
        <SkillGroupRow key={i} group={group} />
      ))}
    </section>
  )
}

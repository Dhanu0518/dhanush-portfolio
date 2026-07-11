import { useReveal } from '../hooks/useReveal'
import { TERMINAL_LINES } from '../data'

export default function Terminal() {
  const { ref, inView } = useReveal<HTMLDivElement>()

  return (
    <div className="terminal-wrap">
      <div
        ref={ref}
        className={`terminal reveal${inView ? ' in show' : ''}`}
      >
        <div className="term-dots">
          <span />
          <span />
          <span />
        </div>
        {TERMINAL_LINES.map((line, i) => (
          <div
            key={i}
            className={`term-line${line.granted ? ' granted' : ''}`}
            dangerouslySetInnerHTML={{ __html: line.text }}
          />
        ))}
      </div>
    </div>
  )
}

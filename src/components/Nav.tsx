import { PROFILE } from '../data'

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="nav-id">
          <div className="nav-chip">{PROFILE.initials}</div>
          <span className="nav-name">{PROFILE.name}</span>
        </div>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="status-pill">
          <span className="dot" />
          Open to work
        </div>
      </div>
    </nav>
  )
}

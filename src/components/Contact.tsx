import { useReveal } from "../hooks/useReveal";
import { PROFILE } from "../data";

export default function Contact() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div ref={ref} className={`contact-box reveal${inView ? " in" : ""}`}>
        <div className="contact-title display">Let's work together</div>
        <p className="contact-sub">
          Open to Senior Frontend Engineer roles in Bengaluru and remote. Reach
          out directly — I reply fast.
        </p>
        <div className="contact-links">
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
            {PROFILE.email}
          </a>
          <a href={PROFILE.phoneHref} className="btn btn-ghost">
            {PROFILE.phone}
          </a>
          <a
            href={PROFILE.linkedin}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

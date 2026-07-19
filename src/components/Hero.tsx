import { useEffect, useState } from "react";
import { PROFILE } from "../data";

export default function Hero() {
  const [showBadge, setShowBadge] = useState(false);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBadge(true), 150);
    const t2 = setTimeout(() => setGranted(true), 150 + 700 + 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="hero" style={{ borderTop: "none" }}>
      <div className="hero-grid">
        <div>
          <div className="eyebrow mono">
            FRONTEND ENGINEER · BENGALURU, INDIA
          </div>
          <h1 className="display">
            Building secure interfaces for <span>enterprise-scale</span>{" "}
            products.
          </h1>
          <p className="hero-sub">
            Frontend Engineer with <b>3+ years</b> specializing in React.js,
            TypeScript, and enterprise authentication — Azure AD SSO, RBAC, and
            scalable state architecture with Redux Toolkit.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a
              href={PROFILE.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="badge-stage">
          <div className={`badge${showBadge ? " show" : ""}`}>
            <div className="badge-clip" />
            <div className="badge-top">
              <span className="badge-org mono">TATA ELXSI · ACCESS</span>
              <span className={`led${granted ? " granted" : ""}`} />
            </div>
            <div className="badge-photo">
              {PROFILE.initials}
              <div className="scan-line" />
            </div>
            <div className="badge-name">{PROFILE.name}</div>
            <div className="badge-role">{PROFILE.role}</div>
            <div className="badge-barcode">
              {[60, 100, 40, 80, 55, 95, 35, 70, 50, 90, 60, 45].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className={`badge-status mono${granted ? " granted" : ""}`}>
              {granted ? "ACCESS GRANTED" : "VERIFYING..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

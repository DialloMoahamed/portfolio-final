import { useState } from "react";
import useInView from "../hooks/useInView";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [contactRef, contactVisible] = useInView();

  return (
    <section id="contact" ref={contactRef}>
        <div className="contact-inner">
          <div className={`fade-in${contactVisible ? " visible" : ""}`}>
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              Let's build something{" "}
              <span style={{ color: "var(--accent)" }}>great</span>
            </h2>
          </div>
          <p className={`contact-desc fade-in delay-1${contactVisible ? " visible" : ""}`}>
            Have a project in mind, or just want to say hi? My inbox is always open. I'll get back to you as soon as possible.
          </p>

          {!submitted ? (
            <div className={`contact-form fade-in delay-2${contactVisible ? " visible" : ""}`}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="Mohamed Attahir" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="mohamedattahirdiallo@gmail.com" type="email" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" placeholder="Project Inquiry" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me about your project..." />
              </div>
              <button className="btn-primary" style={{ alignSelf: "flex-start" }} onClick={() => setSubmitted(true)}>
                Send Message →
              </button>
            </div>
          ) : (
            <div
              className={`fade-in visible about-card`}
              style={{ maxWidth: 400, textAlign: "center" }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
              <div style={{ fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
                Message Sent!
              </div>
              <div style={{ color: "var(--muted)", fontSize: 14 }}>
                Thanks for reaching out. I'll reply within 24 hours.
              </div>
            </div>
          )}

          <div className={`contact-links fade-in delay-3${contactVisible ? " visible" : ""}`}>
            {[
              { icon: "⌥", label: "GitHub", href: "#" },
              { icon: "◈", label: "LinkedIn", href: "#" },
              { icon: "◉", label: "Twitter / X", href: "#" },
              { icon: "✉", label: "mohamedattahirdiallo@gmail.com", href: "mohamedattahirdiallo@gmail.com" },
            ].map((s) => (
              <a className="social-link" href={s.href} key={s.label}>
                <span className="social-icon">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
  );
}
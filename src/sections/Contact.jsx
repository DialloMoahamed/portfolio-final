import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useInView from "../hooks/useInView";
import { useLang } from "../i18n";

// ─── CONFIGURATION EMAILJS ───────────────────────────────────────────────────
// Les identifiants se règlent dans un fichier .env (voir .env.example) ou, sur
// Vercel/Netlify, dans les variables d'environnement du projet.
// Valeurs de repli = celles qui étaient déjà dans le code.
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_2fc66vn";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "k1hodw9";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "W0QvLbGOavk1E1P2c";
const CONTACT_EMAIL = "mohamedattahirdiallo@gmail.com";

// Réseaux affichés : ajoute une entrée avec un vrai lien pour qu'elle apparaisse.
const SOCIALS = [
  { icon: "⌥", label: "GitHub", href: "https://github.com/DialloMoahamed" },
  { icon: "✉", label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
];

// Traduit une erreur EmailJS en message lisible
function explainError(err) {
  const status = err?.status;
  const text = err?.text || err?.message || "";
  if (status === 400 || status === 412) return `Configuration EmailJS invalide (${status}) : ${text}`;
  if (status === 403) return "Ce domaine n'est pas autorisé dans EmailJS (Account → Security).";
  if (status === 429) return "Trop de messages envoyés. Réessaie dans quelques minutes.";
  if (!status) return "Connexion impossible. Vérifie ta connexion Internet.";
  return `Erreur ${status} : ${text}`;
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { t } = useLang();
  const [contactRef, contactVisible] = useInView();
  const formRef = useRef(null);

  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorDetail, setErrorDetail] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const validate = () => {
    const e = {};
    if (!fields.name.trim())    e.name    = "Ton nom est requis.";
    if (!fields.email.trim())   e.email   = "Ton email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Email invalide.";
    if (!fields.subject.trim()) e.subject = "Le sujet est requis.";
    if (!fields.message.trim()) e.message = "Le message est requis.";
    else if (fields.message.trim().length < 10) e.message = "Minimum 10 caractères.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    if (status === "sending") return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    // Anti-spam : un robot remplit le champ caché, un humain non → on fait semblant d'envoyer
    if (honeypot) { setStatus("success"); return; }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Variables du template : on envoie les deux conventions courantes
          from_name: fields.name, from_email: fields.email, subject: fields.subject, message: fields.message,
          name: fields.name, email: fields.email, title: fields.subject,
          to_name: "Mohamed Attahir", reply_to: fields.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorDetail(explainError(err));
      setStatus("error");
    }
  };

  const handleReset = () => { setStatus("idle"); setErrors({}); setErrorDetail(""); };

  return (
    <section id="contact" ref={contactRef}>
      <div className="contact-inner">

        <div className={`fade-in${contactVisible ? " visible" : ""}`}>
          <div className="section-tag">{t("contact.tag")}</div>
          <h2 className="section-title">
            {t("contact.title1")} <span style={{ color: "var(--accent)" }}>{t("contact.title2")}</span>
          </h2>
        </div>

        <p className={`contact-desc fade-in delay-1${contactVisible ? " visible" : ""}`}>
          Tu as un projet en tête, ou tu veux juste dire bonjour ? Mon inbox est toujours ouvert. Je te réponds dans les 24h.
        </p>

        {status === "success" && (
          <div className="fade-in visible about-card" style={{ maxWidth: 420, textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
            <div style={{ fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message envoyé !</div>
            <div style={{ color: "var(--muted)", fontSize: 14, marginBottom: 24 }}>Merci de m'avoir contacté. Je te réponds très bientôt.</div>
            <button className="btn-ghost" onClick={handleReset}>Envoyer un autre message</button>
          </div>
        )}

        {status === "error" && (
          <div className="fade-in visible contact-error-box">
            <span className="contact-error-icon">⚠</span>
            <div>
              <strong>L'envoi a échoué.</strong><br />
              {errorDetail && <span style={{ color: "var(--muted)", fontSize: 12 }}>{errorDetail}<br /></span>}
              <span style={{ color: "var(--muted)", fontSize: 13 }}>
                Écris-moi directement à <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--accent)" }}>{CONTACT_EMAIL}</a>
              </span>
            </div>
            <button className="btn-ghost" style={{ marginLeft: "auto" }} onClick={handleReset}>Réessayer</button>
          </div>
        )}

        {(status === "idle" || status === "sending") && (
          <div ref={formRef} className={`contact-form fade-in delay-2${contactVisible ? " visible" : ""}`}>
            <input className="form-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nom <span style={{ color: "var(--accent)" }}>*</span></label>
                <input className={`form-input${errors.name ? " form-input--error" : ""}`} placeholder="Mohamed Attahir" name="name" value={fields.name} onChange={handleChange} disabled={status === "sending"} />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Email <span style={{ color: "var(--accent)" }}>*</span></label>
                <input className={`form-input${errors.email ? " form-input--error" : ""}`} placeholder="toi@email.com" type="email" name="email" value={fields.email} onChange={handleChange} disabled={status === "sending"} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Sujet <span style={{ color: "var(--accent)" }}>*</span></label>
              <input className={`form-input${errors.subject ? " form-input--error" : ""}`} placeholder="Demande de collaboration" name="subject" value={fields.subject} onChange={handleChange} disabled={status === "sending"} />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Message <span style={{ color: "var(--accent)" }}>*</span></span>
                <span style={{ color: "var(--muted)", fontSize: 12, fontWeight: 400 }}>{fields.message.length} / 1000</span>
              </label>
              <textarea className={`form-textarea${errors.message ? " form-input--error" : ""}`} placeholder="Dis-moi tout sur ton projet..." name="message" value={fields.message} onChange={handleChange} maxLength={1000} disabled={status === "sending"} />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>
            <button className="btn-primary" style={{ alignSelf: "flex-start", minWidth: 200 }} onClick={handleSubmit} disabled={status === "sending"}>
              {status === "sending" ? (
                <span className="contact-spinner-row"><span className="contact-spinner" />Envoi en cours…</span>
              ) : "Envoyer le message →"}
            </button>
          </div>
        )}

        <div className={`contact-links fade-in delay-3${contactVisible ? " visible" : ""}`}>
          {SOCIALS.map((s) => (
            <a className="social-link" href={s.href} key={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <span className="social-icon">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

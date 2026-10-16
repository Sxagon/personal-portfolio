import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import SectionHead from "./SectionHead";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="section wrap contact" aria-labelledby="contact-title">
      <div className="contact__card">
        <div className="contact__copy">
          <SectionHead id="contact" title={t("title")} />
          <p className="contact__text">{t("text")}</p>
          <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>{t("write")}</a>
            <CopyEmail email={profile.email} label={t("copy")} done={t("copied")} />
          </div>
          <ul className="contact__links">
            <li>
              <a href={profile.github} target="_blank" rel="noopener me" className="social">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener me" className="social">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <svg className="contact__plane" viewBox="0 0 300 260" aria-hidden="true">
          <path id="plane-path" d="M20 230 C 60 120, 160 220, 180 140 S 120 60, 260 40" fill="none" stroke="var(--ink)" strokeWidth="2.6" strokeDasharray="2 10" strokeLinecap="round" />
          <g filter="url(#rough)">
            <path d="M206 24l74 6-56 52-6-26z" fill="#fff" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
            <path d="M218 56l62-26-50 40z" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
          </g>
          <path d="M40 60c10-8 20-8 28 0M30 90c6-4 12-4 18 0" fill="none" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}

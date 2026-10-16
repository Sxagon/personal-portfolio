import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";

/** Summary card next to the timeline: a drawn tear-off calendar showing the start year. */
export default function ExperienceAside() {
  const t = useTranslations("experience");
  const tf = useTranslations("about.facts");
  const years = new Date().getFullYear() - profile.startYear;

  return (
    <aside className="xp-aside">
      <div className="xp-card">
        <span className="tape tape--l" aria-hidden="true" />
        <svg className="xp-cal" viewBox="0 0 220 200" aria-hidden="true">
          <g filter="url(#rough)">
            <path d="M24 44h172a10 10 0 0 1 10 10v124a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10V54a10 10 0 0 1 10-10z" fill="#fff" stroke="var(--ink)" strokeWidth="3" />
            <path d="M14 54a10 10 0 0 1 10-10h172a10 10 0 0 1 10 10v26H14z" fill="var(--pink)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
            <path d="M60 30v28M160 30v28" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" />
            <path d="M178 188l28-28v18a10 10 0 0 1-10 10z" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
          </g>
          <text x="110" y="148" textAnchor="middle" className="xp-cal__year">{profile.startYear}</text>
        </svg>
        <p className="xp-card__years">{tf("years", { count: years })}</p>
        <p className="xp-card__text">{t("summary", { year: profile.startYear })}</p>
        {profile.cvUrl && (
          <a className="btn btn--primary" href={profile.cvUrl} download>
            {t("cv")}
          </a>
        )}
      </div>
    </aside>
  );
}

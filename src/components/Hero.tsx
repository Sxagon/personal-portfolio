import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import HeroSketch from "./HeroSketch";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__name">
          <span>Michal</span>
          <span>Lipka</span>
          <svg className="hero__underline" viewBox="0 0 420 28" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M4 18c60-10 130-14 210-10s140 6 202-6"
              fill="none"
              stroke="var(--cobalt)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </h1>
        <p className="hero__role">{t("role")}</p>
        <p className="hero__lead">{t("lead")}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>{t("ctaEmail")}</a>
          <a className="btn" href="#experience">{t("ctaExperience")}</a>
        </div>
      </div>
      <div className="hero__art">
        <HeroSketch
          alt={t("sketchAlt")}
          labels={{
            web: t("labels.web"),
            mobile: t("labels.mobile"),
            server: t("labels.server"),
            data: t("labels.data"),
          }}
          since={t("since", { year: profile.startYear })}
        />
      </div>
    </section>
  );
}

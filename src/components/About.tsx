import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import SectionHead from "./SectionHead";
import LazyPhoto from "./LazyPhoto";

export default function About() {
  const t = useTranslations("about");
  const years = new Date().getFullYear() - profile.startYear;

  return (
    <section id="about" className="section wrap about" aria-labelledby="about-title">
      <figure className="polaroid">
        <span className="tape tape--l" aria-hidden="true" />
        <span className="tape tape--r" aria-hidden="true" />
        <div className="polaroid__img">
          {/* TODO: replace profile.photo with your own picture */}
          <LazyPhoto src={profile.photo} alt={t("photoAlt")} sizes="(max-width: 760px) 280px, 360px" />
        </div>
      </figure>

      <div className="about__body">
        <SectionHead id="about" title={t("title")} />
        <p className="about__text">{t("text1", { year: profile.startYear })}</p>
        <p className="about__text">{t("text2")}</p>

        <dl className="facts">
          <div>
            <dt>{t("facts.location")}</dt>
            <dd>{t("facts.locationValue")}</dd>
          </div>
          <div>
            <dt>{t("facts.since")}</dt>
            <dd>
              {profile.startYear}
              <small>{t("facts.years", { count: years })}</small>
            </dd>
          </div>
          <div>
            <dt>{t("facts.focus")}</dt>
            <dd>{t("facts.focusValue")}</dd>
          </div>
          <div>
            <dt>{t("facts.languages")}</dt>
            <dd>{t("facts.languagesValue")}</dd>
          </div>
        </dl>

        {profile.cvUrl && (
          <a className="btn btn--primary" href={profile.cvUrl} download>
            {t("cv")}
          </a>
        )}
      </div>
    </section>
  );
}

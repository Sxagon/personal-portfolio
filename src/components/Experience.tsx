import { useTranslations } from "next-intl";
import SectionHead from "./SectionHead";
import TimelineLine from "./TimelineLine";
import ExperienceAside from "./ExperienceAside";

type Entry = { period: string; role: string; company: string; text: string };

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <div className="tl">
      <div className="tl__body">
        <TimelineLine />
        <ol className="tl__list">
          {entries.map((e, i) => (
            <li key={i} className="tl__item">
              <span className="tl__dot" aria-hidden="true" />
              <p className="tl__period">{e.period}</p>
              <div className="tl__card">
                <h3>{e.role}</h3>
                <p className="tl__company">{e.company}</p>
                {e.text && <p className="tl__text">{e.text}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** Edit entries in /messages/*.json (experience.items). */
export default function Experience() {
  const t = useTranslations("experience");
  return (
    <section id="experience" className="section wrap" aria-labelledby="experience-title">
      <SectionHead id="experience" title={t("title")} aside={t("aside")} />
      <div className="experience">
        <Timeline entries={t.raw("items") as Entry[]} />
        <ExperienceAside />
      </div>
    </section>
  );
}

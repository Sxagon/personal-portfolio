import Image from "next/image";
import { useTranslations } from "next-intl";
import { profile } from "@/content/profile";
import SectionHead from "./SectionHead";

type Project = {
  title: string;
  type: string;
  text: string;
  tags: string[];
  url?: string;
  image?: string;
  badge?: string;
};

const accents = ["var(--yellow)", "var(--lilac)", "var(--mint)", "var(--pink)"];

/**
 * Projects are edited in /messages/*.json (projects.items).
 * Optional fields per item: "url", "image" (path in /public) and "badge".
 */
export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Project[];

  return (
    <section id="projects" className="section wrap" aria-labelledby="projects-title">
      <SectionHead id="projects" title={t("title")} aside={t("aside")} />
      <ul className="projects">
        {items.map((p, i) => {
          const wide = i % 4 === 0 || i % 4 === 3;
          return (
            <li key={p.title + i} className="project" style={{ ["--accent" as string]: accents[i % accents.length] }}>
              <div className="project__frame">
                {p.badge && <span className="project__badge">{p.badge}</span>}
                <div className="project__bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="project__shot">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={t("shotAlt", { name: p.title })}
                      fill
                      sizes={wide ? "(max-width: 760px) 92vw, 760px" : "(max-width: 760px) 92vw, 380px"}
                      unoptimized={p.image.endsWith(".svg")}
                    />
                  ) : (
                    <span className="project__note">{t("screenshot")}</span>
                  )}
                </div>
              </div>
              <div className="project__meta">
                <p className="project__type">{p.type}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="project__tags" aria-label="Tags">
                  {p.tags.map((tag) => (
                    <li key={tag} className="chip">{tag}</li>
                  ))}
                </ul>
                {p.url && (
                  <a className="link" href={p.url} target="_blank" rel="noopener" aria-label={t("openLabel", { name: p.title })}>
                    {t("open")}
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="projects__more">
        <svg className="projects__stack" viewBox="0 0 160 120" aria-hidden="true">
          <g stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" filter="url(#rough)">
            <rect x="34" y="14" width="96" height="70" rx="8" fill="var(--pink)" transform="rotate(8 82 49)" />
            <rect x="26" y="22" width="96" height="70" rx="8" fill="var(--mint)" transform="rotate(-5 74 57)" />
            <rect x="30" y="32" width="96" height="70" rx="8" fill="#fff" />
            <path d="M30 48h96" fill="none" />
            <path d="M44 66h52M44 80h38" fill="none" strokeLinecap="round" />
          </g>
        </svg>
        <div className="projects__moretext">
          <h3>{t("more.title")}</h3>
          <p>{t("more.text")}</p>
        </div>
        <a className="btn btn--primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(t("more.subject"))}`}>
          {t("more.cta")}
        </a>
      </div>
    </section>
  );
}

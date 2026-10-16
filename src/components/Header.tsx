import { useLocale, useTranslations } from "next-intl";
import LangSwitch from "./LangSwitch";

const sections = ["about", "services", "stack", "projects", "experience", "contact"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  return (
    <header className="header" id="top">
      <a className="skip" href="#content">{t("skip")}</a>
      <div className="wrap header__inner">
        <a href="#top" className="mark" aria-label="Michal Lipka">
          <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
            <path
              d="M8 32c0-14 10-24 24-24s24 10 24 24-10 24-24 24S8 46 8 32z"
              fill="var(--yellow)"
              stroke="var(--ink)"
              strokeWidth="3"
              filter="url(#rough)"
            />
            <path
              d="M19 42V23l8 12 8-12v19M40 23v19h8"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Michal Lipka</span>
        </a>
        <nav className="nav" aria-label={t("main")}>
          {sections.map((s) => (
            <a key={s} href={`#${s}`}>{t(s)}</a>
          ))}
        </nav>
        <LangSwitch label={t("language")} locale={locale} />
      </div>
    </header>
  );
}

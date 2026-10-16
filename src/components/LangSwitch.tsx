import Link from "next/link";
import { routing } from "@/i18n/routing";

/** Language toggle. The site is a single page per locale, so each option links to the locale root. */
export default function LangSwitch({ label, locale }: { label: string; locale: string }) {
  return (
    <nav className="lang" aria-label={label}>
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={`/${l}`}
            hrefLang={l}
            lang={l}
            className={`lang__opt${active ? " is-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}

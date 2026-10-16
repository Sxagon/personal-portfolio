import { getTranslations } from "next-intl/server";
import { profile, stack } from "@/content/profile";

/** JSON-LD (schema.org) describing the person behind the site, used by search engines for rich results. */
export default async function StructuredData({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const url = `${profile.siteUrl}/${locale}`;

  const person = {
    "@type": "Person",
    "@id": `${profile.siteUrl}/#person`,
    name: profile.name,
    givenName: "Michal",
    familyName: "Lipka",
    jobTitle: t("jobTitle"),
    description: t("description"),
    url,
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin],
    address: { "@type": "PostalAddress", addressCountry: "CZ" },
    knowsLanguage: ["cs", "en"],
    knowsAbout: stack.flatMap((g) => g.items.map((i) => i.name)),
    worksFor: { "@type": "Organization", name: "Batlify Internet s.r.o.", url: "https://www.batlify.com" },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#page`,
        url,
        name: t("title"),
        description: t("description"),
        inLanguage: locale,
        mainEntity: { "@id": person["@id"] },
      },
      {
        "@type": "WebSite",
        "@id": `${profile.siteUrl}/#website`,
        url: profile.siteUrl,
        name: profile.name,
        inLanguage: ["cs", "en"],
        publisher: { "@id": person["@id"] },
      },
      person,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text; "<" is escaped to keep it safe inside a script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

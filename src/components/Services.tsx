import { useTranslations } from "next-intl";
import SectionHead from "./SectionHead";
import ServicesTabs, { type ServiceArea } from "./ServicesTabs";
import type { Area } from "./AreaIllustration";

const areas: { id: Area; color: string }[] = [
  { id: "web", color: "var(--yellow)" },
  { id: "systems", color: "var(--mint)" },
  { id: "mobile", color: "var(--pink)" },
  { id: "infrastructure", color: "var(--lilac)" },
];

export default function Services() {
  const t = useTranslations("services");

  // Texts are resolved on the server so the interactive tabs ship without any i18n runtime.
  const data: ServiceArea[] = areas.map((a) => ({
    ...a,
    name: t(`items.${a.id}.name`),
    text: t(`items.${a.id}.text`),
    points: t.raw(`items.${a.id}.points`) as string[],
    stack: t.raw(`items.${a.id}.stack`) as string[],
  }));

  return (
    <section id="services" className="section wrap" aria-labelledby="services-title">
      <SectionHead id="services" title={t("title")} aside={t("aside")} />
      <ServicesTabs areas={data} label={t("title")} stackLabel={t("stackLabel")} />
    </section>
  );
}

import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { stack } from "@/content/profile";
import SectionHead from "./SectionHead";

// Subtle fixed tilts so the sheet feels hand-placed without looking messy.
const tilts = [-1.5, 1, -0.5, 1.5, -1, 0.5];
const groupColors: Record<string, string> = {
  languages: "var(--yellow)",
  databases: "var(--mint)",
  frameworks: "var(--pink)",
  infrastructure: "var(--lilac)",
};

export default function Stack() {
  const t = useTranslations("stack");
  let n = 0;

  return (
    <section id="stack" className="section wrap" aria-labelledby="stack-title">
      <SectionHead id="stack" title={t("title")} />

      <div className="board">
        {stack.map((group) => (
          <div key={group.id} className="board__group" style={{ ["--group-color" as string]: groupColors[group.id] }}>
            <h3 className="board__label">{t(`groups.${group.id}`)}</h3>
            <ul className="board__items">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="sticker"
                  style={{ ["--tilt" as string]: `${tilts[n++ % tilts.length]}deg` } as CSSProperties}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt="" width={30} height={30} className="sticker__logo" loading="lazy" decoding="async" />
                  <span className="sticker__name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

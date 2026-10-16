"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import AreaIllustration, { type Area } from "./AreaIllustration";

export type ServiceArea = {
  id: Area;
  color: string;
  name: string;
  text: string;
  points: string[];
  stack: string[];
};

export default function ServicesTabs({ areas, label, stackLabel }: { areas: ServiceArea[]; label: string; stackLabel: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = areas[active];

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern).
  const onKey = (e: KeyboardEvent) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + areas.length) % areas.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="services">
      <div className="services__tabs" role="tablist" aria-label={label} aria-orientation="vertical" onKeyDown={onKey}>
        {areas.map((a, i) => {
          const selected = i === active;
          return (
            <button
              key={a.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${a.id}`}
              aria-selected={selected}
              aria-controls="services-panel"
              tabIndex={selected ? 0 : -1}
              className={`services__tab${selected ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              style={{ ["--tab-color" as string]: a.color }}
            >
              <span className="services__tabtxt">{a.name}</span>
            </button>
          );
        })}
      </div>

      <div
        id="services-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="services__panel"
        style={{ ["--panel-color" as string]: current.color }}
      >
        <div key={current.id} className="services__content">
          <div className="services__ill">
            <AreaIllustration area={current.id} />
          </div>
          <div className="services__copy">
            <h3>{current.name}</h3>
            <p>{current.text}</p>
            <ul className="checklist">
              {current.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="services__stack">
              <span>{stackLabel}:</span>
              {current.stack.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

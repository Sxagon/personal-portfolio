import type { CSSProperties } from "react";

type Labels = { web: string; mobile: string; server: string; data: string };

const INK = "var(--ink)";

/** Animation delay for a drawing step; the sequence itself lives in CSS (.draw / .fade / .pop). */
const at = (step: number): CSSProperties => ({ ["--d" as string]: `${(0.15 + step * 0.16).toFixed(2)}s` });

const stroke = {
  stroke: INK,
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Props for a path that gets "drawn" on load (stroke first, then fill). */
const draw = (step: number) => ({ className: "draw", pathLength: 1, style: at(step) });

const cables = {
  browser: "M312 128 C 360 128, 352 206, 404 214",
  phone: "M184 392 C 262 392, 330 336, 404 330",
  db: "M486 402 C 488 444, 440 452, 386 448",
};

/**
 * Hero illustration: a browser and a phone talking to a server rack backed by a database.
 * Pure SVG + CSS animations (no client JavaScript). Respects prefers-reduced-motion via CSS.
 */
export default function HeroSketch({ labels, since, alt }: { labels: Labels; since: string; alt: string }) {
  return (
    <svg className="sketch" viewBox="0 0 600 540" role="img" aria-label={alt}>
      {/* soft colour blobs behind the drawing */}
      <path className="pop" style={at(0)} d="M70 60c60-40 180-30 230 10s30 120-40 140-210 10-230-50 0-70 40-100z" fill="var(--mint)" opacity={0.45} />
      <path className="pop" style={at(1)} d="M380 150c50-30 160-10 180 60s0 170-60 200-150 0-160-80 0-150 40-180z" fill="var(--pink)" opacity={0.35} />

      <g filter="url(#rough)">
        {/* cables (dashed) */}
        {Object.values(cables).map((d, i) => (
          <path key={i} className="fade" style={at(9 + i)} d={d} fill="none" {...stroke} strokeDasharray="2 9" />
        ))}

        {/* browser window */}
        <path {...draw(0)} d="M42 40h258a12 12 0 0 1 12 12v156a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12V52a12 12 0 0 1 12-12z" fill="#fff" {...stroke} />
        <path {...draw(1)} d="M30 74h282" fill="none" {...stroke} />
        <path {...draw(2)} d="M50 92h118a7 7 0 0 1 0 14H50a7 7 0 0 1 0-14z" fill="var(--cobalt)" {...stroke} />
        <path {...draw(2)} d="M46 124h200M46 140h160" fill="none" {...stroke} strokeWidth={2.4} opacity={0.5} />
        <path {...draw(3)} d="M54 158h92a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H54a8 8 0 0 1-8-8v-30a8 8 0 0 1 8-8z" fill="var(--yellow)" {...stroke} />
        <path {...draw(3)} d="M178 158h110a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H178a8 8 0 0 1-8-8v-30a8 8 0 0 1 8-8z" fill="var(--pink)" {...stroke} />

        {/* phone */}
        <path {...draw(4)} d="M84 290h80a22 22 0 0 1 22 22v158a22 22 0 0 1-22 22H84a22 22 0 0 1-22-22V312a22 22 0 0 1 22-22z" fill="#fff" {...stroke} />
        <path {...draw(5)} d="M82 318h84a6 6 0 0 1 6 6v128a6 6 0 0 1-6 6H82a6 6 0 0 1-6-6V324a6 6 0 0 1 6-6z" fill="var(--mint)" {...stroke} />
        <path {...draw(5)} d="M108 303h32" fill="none" {...stroke} />
        <path {...draw(6)} d="M90 338h44M90 354h64" fill="none" {...stroke} strokeWidth={2.4} />
        <path {...draw(6)} d="M90 376h60a6 6 0 0 1 6 6v46a6 6 0 0 1-6 6H90a6 6 0 0 1-6-6v-46a6 6 0 0 1 6-6z" fill="#fff" {...stroke} />

        {/* server rack */}
        <path {...draw(5)} d="M418 148h132a14 14 0 0 1 14 14v226a14 14 0 0 1-14 14H418a14 14 0 0 1-14-14V162a14 14 0 0 1 14-14z" fill="var(--lilac)" {...stroke} />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            {...draw(6 + i * 0.5)}
            d={`M428 ${166 + i * 74}h112a6 6 0 0 1 6 6v46a6 6 0 0 1-6 6H428a6 6 0 0 1-6-6v-46a6 6 0 0 1 6-6z`}
            fill="#fff"
            {...stroke}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <path
            key={`v${i}`}
            {...draw(7 + i * 0.5)}
            d={`M478 ${184 + i * 74}h52M478 ${196 + i * 74}h52M478 ${208 + i * 74}h36`}
            fill="none"
            {...stroke}
            strokeWidth={2.2}
            opacity={0.55}
          />
        ))}

        {/* database */}
        <path {...draw(7)} d="M262 412v54c0 10 28 18 62 18s62-8 62-18v-54" fill="var(--yellow)" {...stroke} />
        <path {...draw(7.5)} d="M262 412c0-10 28-18 62-18s62 8 62 18-28 18-62 18-62-8-62-18z" fill="#fff" {...stroke} />
        <path {...draw(8)} d="M262 440c0 10 28 18 62 18s62-8 62-18" fill="none" {...stroke} />

        {/* cloud */}
        <path {...draw(8.5)} d="M440 112c-16 0-24-12-18-24s22-12 26-6c4-14 28-18 36-2 14-4 26 8 20 22-2 6-8 10-16 10z" fill="#fff" {...stroke} />
      </g>

      {/* server status LEDs */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          className="led"
          style={{ ["--blink" as string]: `${1.4 + i * 0.5}s`, ["--d" as string]: `${2 + i * 0.3}s` }}
          cx={448}
          cy={196 + i * 74}
          r={7}
          fill={i === 1 ? "var(--yellow)" : "var(--mint)"}
          stroke={INK}
          strokeWidth={2.5}
        />
      ))}

      {/* packets travelling along the cables */}
      <g className="packets">
        {[
          { d: cables.browser, c: "var(--cobalt)", dur: 2.2 },
          { d: cables.phone, c: "var(--pink)", dur: 2.8 },
          { d: cables.db, c: "var(--yellow)", dur: 1.9 },
        ].map((p, i) => (
          <circle key={i} className="fade" style={{ ["--d" as string]: `${3 + i * 0.4}s` }} r={7} fill={p.c} stroke={INK} strokeWidth={2.5}>
            <animateMotion path={p.d} dur={`${p.dur}s`} begin={`${3 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>

      {/* handwritten labels */}
      <g className="sketch__labels">
        <g className="pop" style={at(10)}>
          <text x="40" y="24">{labels.web}</text>
        </g>
        <g className="pop" style={at(10.5)}>
          <text x="196" y="300">{labels.mobile}</text>
          <path d="M194 306c-8 6-14 10-22 12" fill="none" {...stroke} strokeWidth={2.2} />
        </g>
        <g className="pop" style={at(11)}>
          <text x="372" y="62">{labels.server}</text>
          <path d="M420 70c6 8 8 12 10 20" fill="none" {...stroke} strokeWidth={2.2} />
        </g>
        <g className="pop" style={at(11.5)}>
          <text x="404" y="482">{labels.data}</text>
          <path d="M400 474c-6-4-10-8-12-14" fill="none" {...stroke} strokeWidth={2.2} />
        </g>
        <g className="pop" style={at(12.5)}>
          <text x="36" y="262" className="sketch__since">{since}</text>
          <path d="M38 272c40 6 90 4 140-6" fill="none" stroke="var(--cobalt)" strokeWidth={3} strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

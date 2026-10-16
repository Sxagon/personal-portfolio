import type { CSSProperties } from "react";

export type Area = "web" | "systems" | "mobile" | "infrastructure";

const s = {
  stroke: "var(--ink)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Small drawn illustration for each service area; re-draws (CSS) whenever the area changes. */
export default function AreaIllustration({ area }: { area: Area }) {
  // Each element is drawn by CSS (.draw / .fade); the delay staggers the sequence.
  const d = (i: number) => ({
    className: "draw draw--quick",
    pathLength: 1,
    style: { ["--d" as string]: `${(i * 0.08).toFixed(2)}s` } as CSSProperties,
  });

  return (
    <svg viewBox="0 0 320 240" className="area-ill" aria-hidden="true">
      <g filter="url(#rough)">
        {area === "web" && (
          <>
            <path d="M28 30h264a10 10 0 0 1 10 10v160a10 10 0 0 1-10 10H28a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10z" fill="#fff" {...s} {...d(0)} />
            <path d="M18 60h284" fill="none" {...s} {...d(1)} />
            <path d="M40 80h90v100H40z" fill="var(--yellow)" {...s} {...d(2)} />
            <path d="M150 80h130v20H150z" fill="var(--cobalt)" {...s} {...d(3)} />
            <path d="M150 116h120M150 134h100M150 152h110" fill="none" {...s} strokeWidth={2.4} {...d(4)} />
            <path d="M150 166h60a8 8 0 0 1 8 8v0a8 8 0 0 1-8 8h-60a8 8 0 0 1-8-8v0a8 8 0 0 1 8-8z" fill="var(--pink)" {...s} {...d(5)} />
            <path d="M218 190l14 30 6-12 12-4z" fill="#fff" {...s} {...d(6)} />
          </>
        )}
        {area === "systems" && (
          <>
            <path d="M24 36h200a10 10 0 0 1 10 10v130a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10V46a10 10 0 0 1 10-10z" fill="var(--ink)" fillOpacity={1} {...s} {...d(0)} />
            <path d="M34 66l16 12-16 12M60 92h40" fill="none" stroke="var(--mint)" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" {...d(1)} />
            <path d="M34 120h120M34 140h80" fill="none" stroke="#fff" strokeOpacity={0.6} strokeWidth={3} strokeLinecap="round" {...d(2)} />
            <circle cx="250" cy="160" r="44" fill="var(--yellow)" {...s} {...d(3)} />
            <path d="M250 106v18M250 196v18M196 160h18M286 160h18M212 122l12 12M276 186l12 12M212 198l12-12M276 134l12-12" fill="none" {...s} strokeWidth={4} {...d(4)} />
            <circle cx="250" cy="160" r="16" fill="#fff" {...s} {...d(5)} />
            <circle cx="270" cy="62" r="22" fill="var(--pink)" {...s} {...d(6)} />
            <path d="M258 62h24M270 50v24" fill="none" {...s} {...d(7)} />
          </>
        )}
        {area === "mobile" && (
          <>
            <path d="M118 14h84a20 20 0 0 1 20 20v172a20 20 0 0 1-20 20h-84a20 20 0 0 1-20-20V34a20 20 0 0 1 20-20z" fill="#fff" {...s} {...d(0)} />
            <path d="M114 40h92v160h-92z" fill="var(--mint)" {...s} {...d(1)} />
            <path d="M146 26h28" fill="none" {...s} {...d(1)} />
            <path d="M126 56h68v44h-68z" fill="#fff" {...s} {...d(2)} />
            <path d="M126 116h30v30h-30zM164 116h30v30h-30zM126 154h30v30h-30zM164 154h30v30h-30z" fill="var(--yellow)" {...s} {...d(3)} />
            <path d="M40 70c-14 10-14 40 0 50M60 80c-8 6-8 24 0 30" fill="none" {...s} {...d(4)} />
            <path d="M280 70c14 10 14 40 0 50M260 80c8 6 8 24 0 30" fill="none" {...s} {...d(4)} />
          </>
        )}
        {area === "infrastructure" && (
          <>
            <path d="M60 70c-22 0-32-18-22-34s32-14 36-6c8-20 44-24 52 0 22-6 36 14 26 32-4 6-12 8-20 8z" fill="#fff" {...s} {...d(0)} />
            <path d="M180 40h110a10 10 0 0 1 10 10v170a10 10 0 0 1-10 10H180a10 10 0 0 1-10-10V50a10 10 0 0 1 10-10z" fill="var(--lilac)" {...s} {...d(1)} />
            <path d="M186 56h98v44h-98zM186 112h98v44h-98zM186 168h98v44h-98z" fill="#fff" {...s} {...d(2)} />
            <path d="M30 172v40c0 8 20 14 46 14s46-6 46-14v-40" fill="var(--yellow)" {...s} {...d(3)} />
            <path d="M30 172c0-8 20-14 46-14s46 6 46 14-20 14-46 14-46-6-46-14z" fill="#fff" {...s} {...d(4)} />
            <path d="M100 80c20 10 40 0 70 10M122 190c20 0 30-10 48-20" fill="none" {...s} strokeDasharray="1 8" className="fade" style={{ ["--d" as string]: "0.5s" } as CSSProperties} />
            <circle cx="202" cy="78" r="6" fill="var(--mint)" {...s} strokeWidth={2.4} />
            <circle cx="202" cy="134" r="6" fill="var(--mint)" {...s} strokeWidth={2.4} />
            <circle cx="202" cy="190" r="6" fill="var(--yellow)" {...s} strokeWidth={2.4} />
          </>
        )}
      </g>
    </svg>
  );
}

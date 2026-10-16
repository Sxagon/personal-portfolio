/** A hand-drawn vertical line that draws itself as the timeline scrolls into view (CSS scroll-driven animation). */
export default function TimelineLine() {
  const d = "M10 0 C 4 60, 16 120, 10 200 S 4 340, 10 400";
  return (
    <div className="tl__line" aria-hidden="true">
      <svg viewBox="0 0 20 400" preserveAspectRatio="none" width="100%" height="100%">
        <path d={d} fill="none" stroke="var(--ink)" strokeOpacity="0.15" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        {/* No non-scaling-stroke here: it would break pathLength-based dash drawing. */}
        <path className="tl__progress" d={d} pathLength={1} fill="none" stroke="var(--cobalt)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

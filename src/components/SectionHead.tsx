/** Section heading with a short handwritten aside that carries a hint about the section. */
export default function SectionHead({ id, title, aside }: { id: string; title: string; aside?: string }) {
  return (
    <div className="shead">
      <h2 id={`${id}-title`} className="shead__title">{title}</h2>
      {aside && (
        <p className="shead__aside">
          <svg viewBox="0 0 60 30" width="48" height="24" aria-hidden="true">
            <path d="M56 6C40 4 20 8 8 22m0 0 2-10m-2 10 10-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {aside}
        </p>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Renders the photo only once it is about to scroll into view,
 * so it never competes with the first paint on slow mobile connections.
 */
export default function LazyPhoto({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="lazy-photo">
      {visible && <Image src={src} alt={alt} fill sizes={sizes} />}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </noscript>
    </div>
  );
}

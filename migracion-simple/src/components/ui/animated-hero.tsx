import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { withBase } from "@/lib/url";

/**
 * Rotating-word hero headline. Adapted from the shadcn "animated-hero" block:
 * the rotating word communicates the site's core promise (clear, trustworthy,
 * Spanish-language immigration information) the moment a visitor arrives.
 *
 * The rotating spans stay mounted at all times (only their opacity changes),
 * so they'd otherwise all be exposed to assistive tech at once and get read
 * as one run-on word — the wrapper is aria-hidden and a static sr-only
 * string carries the meaning instead. The rotation itself also respects
 * prefers-reduced-motion (WCAG 2.2.2: auto-updating content needs a way to
 * stop), matching the pause-on-reduced-motion pattern already used in
 * global.css for the site's other animations.
 */
function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const titles = useMemo(
    () => ["clara", "confiable", "en español", "gratuita", "verificada"],
    []
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, prefersReducedMotion]);

  return (
    <div>
      <h1 className="text-5xl md:text-6xl max-w-2xl tracking-tight font-regular [text-shadow:0_2px_14px_rgba(0,0,0,.35)]">
        <span className="!text-white">Información migratoria</span>
        <span className="relative flex w-full overflow-hidden pt-1 pb-2 md:pb-3" aria-hidden="true">
          &nbsp;
          {titles.map((title, index) => (
            <motion.span
              key={title}
              className="absolute font-semibold text-[var(--flag-blue)]"
              initial={{ opacity: 0, y: "-100" }}
              transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 50 }}
              animate={
                titleNumber === index
                  ? { y: 0, opacity: 1 }
                  : { y: titleNumber > index ? -150 : 150, opacity: 0 }
              }
            >
              {title}
            </motion.span>
          ))}
        </span>
        <span className="sr-only">clara, confiable, en español, gratuita y verificada</span>
      </h1>
    </div>
  );
}

/** CTA row used alongside {@link AnimatedHero}, kept separate so it can sit
 * after the lead paragraph instead of directly under the headline. */
function AnimatedHeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={withBase("/guias")} className="btn-pill btn-pill--light">
        <span className="btn-pill-icon">
          <MoveRight className="h-4 w-4" />
        </span>
        <span>Ver todas las guías</span>
      </a>
      <a href="#situaciones" className="btn-pill btn-pill--red">
        <span>Buscar mi situación</span>
        <span className="btn-pill-icon">
          <MoveRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}

export { AnimatedHero, AnimatedHeroActions };

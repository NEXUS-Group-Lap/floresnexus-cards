import React, { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
  /** Reemplaza el spotlight que sigue el mouse por un anillo rojo-azul que gira
   * continuamente alrededor del borde (ver .glow-spin-ring en global.css). */
  spin?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  // Narrower sweep than the presets above, tuned to the site's amber/gold brand accent
  // so the glow reads as "gold" instead of drifting across the hue wheel.
  gold: { base: 40, spread: 35 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'gold',
  size = 'md',
  width,
  height,
  customSize = false,
  spin = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        // --x/--y stay viewport-absolute: with backgroundAttachment "fixed" that's what
        // keeps the spotlight visually aligned with the real cursor across every card.
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));

        // --xp/--yp only drive the hue pick further down, so compute those relative to
        // this card's own box instead of the whole window. Otherwise a card that isn't
        // centered on the page (e.g. docked to one side) drifts away from its intended
        // glowColor and can land on a completely different hue.
        const rect = cardRef.current.getBoundingClientRect();
        const xp = rect.width ? (x - rect.left) / rect.width : 0;
        const yp = rect.height ? (y - rect.top) / rect.height : 0;
        cardRef.current.style.setProperty('--xp', Math.min(1, Math.max(0, xp)).toFixed(2));
        cardRef.current.style.setProperty('--yp', Math.min(1, Math.max(0, yp)).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ''; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = (): CSSProperties & Record<string, string | number> => {
    const baseStyles: CSSProperties & Record<string, string | number> = {
      '--base': base,
      '--spread': spread,
      '--radius': '14',
      '--border': '3',
      '--backdrop': 'hsl(0 0% 60% / 0.12)',
      '--backup-border': 'var(--backdrop)',
      '--size': '200',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: spin ? 'var(--border-size) solid transparent' : 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
    };

    if (spin) {
      // El anillo giratorio (.glow-spin-ring) reemplaza el spotlight de mouse,
      // así que apagamos el brillo/halo de [data-glow] en vez de quitar el atributo
      // (evita pisar las reglas ::before/::after compartidas en global.css).
      baseStyles['--bg-spot-opacity'] = 0;
      baseStyles['--border-spot-opacity'] = 0;
      baseStyles['--border-light-opacity'] = 0;
      baseStyles['--outer'] = 0;
    }

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  return (
    <div
      ref={cardRef}
      data-glow
      style={getInlineStyles()}
      className={`
        ${getSizeClasses()}
        ${!customSize ? 'aspect-[3/4]' : ''}
        rounded-2xl
        relative
        grid
        grid-rows-[1fr_auto]
        shadow-[0_1rem_2rem_-1rem_black]
        p-4
        gap-4
        backdrop-blur-[5px]
        ${className}
      `}
    >
      {spin && <span className="glow-spin-ring" aria-hidden="true" />}
      <div ref={innerRef} data-glow></div>
      {children}
    </div>
  );
};

export { GlowCard }

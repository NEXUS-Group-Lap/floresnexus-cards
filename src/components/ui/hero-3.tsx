"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SitePreview {
  name: string;
  url: string;
}

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  images?: string[];
  sites?: SitePreview[];
  className?: string;
}

const ActionButton = ({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) => {
  const classes =
    variant === "primary"
      ? "px-8 py-3 rounded-full bg-mono-black text-mono-white font-semibold shadow-lg transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75"
      : "px-8 py-3 rounded-full bg-transparent text-mono-black font-semibold border-2 border-mono-black transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75";

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  images,
  sites,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const marqueeItems = sites
    ? [...sites, ...sites, ...sites, ...sites, ...sites, ...sites]
    : [...(images || []), ...(images || [])];

  return (
    <section
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 text-center",
        className
      )}
      style={{ background: "#F7F5F0" }}
    >
      <div className="z-10 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-mono-lighter px-4 py-1.5 text-sm font-medium text-mono-gray backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.5)" }}
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl font-bold tracking-tighter text-mono-black md:text-7xl"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-mono-gray"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <ActionButton href={ctaHref} variant="primary">
            {ctaText}
          </ActionButton>
          {secondaryCtaText && (
            <ActionButton href={secondaryCtaHref} variant="secondary">
              {secondaryCtaText}
            </ActionButton>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-1/3 w-full md:h-2/5" style={{ maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)" }}>
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
                width: sites ? "220px" : undefined,
                height: sites ? undefined : undefined,
              }}
            >
              {sites ? (
                <div
                  className="overflow-hidden rounded-2xl border border-mono-lighter bg-white shadow-md"
                  style={{ width: "220px", height: "160px" }}
                >
                  <div className="flex items-center gap-1 border-b border-mono-lighter bg-white px-2 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF5F57" }} />
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FEBC2E" }} />
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#28C840" }} />
                    <span className="ml-1.5 flex-1 truncate rounded bg-mono-white px-2 py-0.5 text-[7px] text-mono-gray">
                      floresnexus.cards{(item as SitePreview).url}
                    </span>
                  </div>
                  <div style={{ position: "relative", width: "100%", height: "calc(100% - 24px)", overflow: "hidden" }}>
                    <iframe
                      src={(item as SitePreview).url}
                      title={`${(item as SitePreview).name} preview`}
                      loading="lazy"
                      tabIndex={-1}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "400%",
                        height: "400%",
                        transform: "scale(0.25)",
                        transformOrigin: "top left",
                        border: "none",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] h-48 md:h-64">
                  <img
                    src={item as string}
                    alt={`Showcase image ${index + 1}`}
                    className="h-full w-full rounded-2xl object-cover shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedMarqueeHero;

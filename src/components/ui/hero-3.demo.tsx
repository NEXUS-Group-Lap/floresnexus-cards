import { AnimatedMarqueeHero } from "./hero-3";

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=800&fit=crop&auto=format&q=80",
];

export default function AnimatedHeroDemo() {
  return (
    <AnimatedMarqueeHero
      tagline="floresnexus.cards"
      title={
        <>
          Nexus Cards for
          <br />
          Local Businesses
        </>
      }
      description="Simple, mobile-friendly business pages built by Flores Nexus Group."
      ctaText="View Active Nexus Cards"
      ctaHref="#active-cards"
      secondaryCtaText="Get Your Business Online"
      secondaryCtaHref="https://floresnexus.com"
      images={DEMO_IMAGES}
    />
  );
}

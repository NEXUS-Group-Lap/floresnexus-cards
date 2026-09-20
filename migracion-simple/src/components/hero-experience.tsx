import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { AnimatedHero, AnimatedHeroActions } from "@/components/ui/animated-hero";
import { withBase } from "@/lib/url";
import imgProcesoMigratorio from "../assets/images/categoria-documentos.jpg";
import imgIceCorte from "../assets/images/categoria-corte-inmigracion.jpg";
import imgEntrarQuedarme from "../assets/images/categoria-visas.jpg";
import imgSinEstatus from "../assets/images/categoria-sin-estatus-legal.jpg";
import imgNoSe from "../assets/images/categoria-mitos-miedos.jpg";

type IconName =
  | "document" | "scale" | "plane" | "person" | "question"
  | "home" | "shield" | "mail" | "clock" | "briefcase" | "compass" | "alert";

function Icon({ name, className }: { name: IconName; className?: string }) {
  const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "document": return <svg {...p} className={className}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M9.5 12h5M9.5 15.5h5" /></svg>;
    case "scale": return <svg {...p} className={className}><path d="M12 3v3M5 8l7-2 7 2M4 8h16M6 8l-3 6h6l-3-6zM18 8l-3 6h6l-3-6zM7 21h10M12 11v10" /></svg>;
    case "plane": return <svg {...p} className={className}><path d="M2 16l7-1.5 5.5-7.5c.6-.8 1.9-.3 1.8.7l-1 6.3 5.2-1c.9-.2 1.5.9.9 1.6L16 20l-4-1-2.5 2-1-3-4-1 2-2.5z" /></svg>;
    case "person": return <svg {...p} className={className}><circle cx="12" cy="8" r="3.4" /><path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" /></svg>;
    case "question": return <svg {...p} className={className}><circle cx="12" cy="12" r="9" /><path d="M9.3 9.3a2.7 2.7 0 1 1 3.8 2.5c-.9.5-1.4 1-1.4 2.1" /><path d="M12 17.2h.01" /></svg>;
    case "home": return <svg {...p} className={className}><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9.5h12V10" /><path d="M10 19.5v-5h4v5" /></svg>;
    case "shield": return <svg {...p} className={className}><path d="M12 3.5l7 2.6v5.4c0 4.6-2.9 7.9-7 9-4.1-1.1-7-4.4-7-9V6.1z" /><path d="M9 12l2 2 4-4.2" /></svg>;
    case "mail": return <svg {...p} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
    case "clock": return <svg {...p} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
    case "briefcase": return <svg {...p} className={className}><rect x="3" y="7.5" width="18" height="12" rx="2" /><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" /><path d="M3 12.5h18" /></svg>;
    case "compass": return <svg {...p} className={className}><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-6 2 2-6z" /></svg>;
    case "alert": return <svg {...p} className={className}><path d="M12 3.5 21.5 20h-19z" /><path d="M12 9.5v4.2M12 16.8h.01" /></svg>;
  }
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface SituationItem { label: string; href: string; icon: IconName }
interface Situation {
  id: string;
  icon: IconName;
  label: string;
  description: string;
  items: SituationItem[];
  headline: string;
  blurb: string[];
  quote: string;
  image: string;
}

const SITUATIONS: Situation[] = [
  {
    id: "proceso-migratorio",
    icon: "document",
    label: "Tengo un proceso migratorio",
    description: "Documentos, cartas y casos abiertos con USCIS.",
    headline: "Información para un futuro más claro.",
    blurb: ["Recursos confiables. Explicaciones simples.", "Un paso a la vez."],
    quote: "Las personas informadas toman mejores decisiones.",
    image: imgProcesoMigratorio.src,
    items: [
      { label: "¿Qué significa tener un caso pendiente?", href: "/es/casos/que-significa-caso-pendiente", icon: "document" },
      { label: "Cómo reviso mi caso en USCIS", href: "/es/casos/como-revisar-caso-uscis", icon: "compass" },
      { label: "Entender una carta de USCIS", href: "/es/uscis/como-entender-carta-uscis", icon: "mail" },
      { label: "Tiempos de procesamiento de USCIS", href: "/es/casos/tiempos-procesamiento-uscis", icon: "clock" },
      { label: "Mi permiso de trabajo venció: ¿puedo seguir trabajando?", href: "/es/permiso-trabajo/ead-vencido-puedo-trabajar", icon: "briefcase" },
      { label: "Documentos migratorios importantes", href: "/es/documentos/documentos-migratorios-importantes", icon: "document" },
    ],
  },
  {
    id: "ice-corte",
    icon: "scale",
    label: "Tengo un problema con ICE/corte",
    description: "Corte de inmigración, detención y tus derechos.",
    headline: "Conoce tus derechos, con calma.",
    blurb: ["Corte, ICE y detención explicados en lenguaje simple.", "Sin tecnicismos legales."],
    quote: "Entender el proceso es el primer paso para enfrentarlo.",
    image: imgIceCorte.src,
    items: [
      { label: "¿Qué derechos tengo en un proceso de inmigración?", href: "/es/corte/derechos-en-proceso-de-inmigracion", icon: "shield" },
      { label: "¿Por qué razones puede ICE detenerme?", href: "/es/ice/razones-detencion", icon: "alert" },
      { label: "¿Cómo reviso mi caso de corte (EOIR)?", href: "/es/corte/como-revisar-caso-eoir", icon: "compass" },
      { label: "¿Puedo pedir fianza?", href: "/es/ice/puedo-pedir-fianza", icon: "document" },
      { label: "¿Qué es una Notice to Appear (NTA)?", href: "/es/corte/que-es-notice-to-appear-nta", icon: "mail" },
      { label: "¿Tengo derecho a un abogado?", href: "/es/detencion/derecho-a-abogado-inmigracion", icon: "person" },
    ],
  },
  {
    id: "entrar-quedarme",
    icon: "plane",
    label: "Quiero entrar o quedarme en EE. UU.",
    description: "Visas, I-94, TPS y parole.",
    headline: "Tu entrada, paso a paso.",
    blurb: ["Visas, I-94, TPS y parole explicados con enlaces oficiales.", "Claridad sobre tu estatus."],
    quote: "Saber dónde estás te ayuda a decidir hacia dónde ir.",
    image: imgEntrarQuedarme.src,
    items: [
      { label: "¿Qué es el I-94 y por qué importa?", href: "/es/entrada/que-es-i94", icon: "document" },
      { label: "¿Cómo reviso o descargo mi I-94?", href: "/es/entrada/como-descargar-i94", icon: "compass" },
      { label: "Entré legalmente, pero mi estadía venció", href: "/es/entrada/entre-legalmente-pero-se-vencio-mi-estadia", icon: "clock" },
      { label: "Tengo parole: ¿eso es estatus migratorio?", href: "/es/parole/parole-estatus", icon: "shield" },
      { label: "¿Mi permiso de trabajo sigue válido tras un cambio en TPS/parole?", href: "/es/tps-parole/permiso-trabajo-sigue-valido", icon: "briefcase" },
      { label: "Mi TPS está por terminar: ¿qué pasa?", href: "/es/tps/tps-termina-que-pasa", icon: "alert" },
    ],
  },
  {
    id: "sin-estatus",
    icon: "person",
    label: "No tengo estatus legal",
    description: "Información y opciones para tu situación.",
    headline: "Tu situación, tus opciones.",
    blurb: ["Información sobre tus derechos y los pasos que puedes tomar.", "Sin juicios, solo hechos."],
    quote: "Conocer tus derechos no cambia tu situación, pero sí tus decisiones.",
    image: imgSinEstatus.src,
    items: [
      { label: "¿Qué derechos tengo?", href: "/es/sin-estatus/derechos-proceso-deportacion", icon: "shield" },
      { label: "¿Qué documentos debo preparar?", href: "/es/sin-estatus/documentos-preparar-si-arresto", icon: "document" },
      { label: "¿Qué hacer si me detiene inmigración o ICE?", href: "/es/detencion/que-hacer-si-me-detiene-inmigracion", icon: "home" },
      { label: "¿Qué es la salida voluntaria?", href: "/es/regresar/salida-voluntaria", icon: "plane" },
      { label: "¿Qué puede pasar después de un arresto?", href: "/es/ice/que-pasa-despues-arresto", icon: "alert" },
      { label: "Tengo asilo pendiente: ¿cómo reviso mi caso?", href: "/es/asilo/como-saber-donde-esta-mi-caso", icon: "compass" },
    ],
  },
  {
    id: "no-se",
    icon: "question",
    label: "No sé qué opción elegir",
    description: "Empieza por lo más común — te ayudamos a ubicarte.",
    headline: "Empecemos por lo más común.",
    blurb: ["Te ayudamos a ubicarte y a encontrar por dónde empezar.", "Un paso a la vez."],
    quote: "No hace falta saberlo todo para dar el primer paso.",
    image: imgNoSe.src,
    items: [
      { label: "¿Qué significa tener un caso pendiente?", href: "/es/casos/que-significa-caso-pendiente", icon: "document" },
      { label: "Documentos migratorios importantes", href: "/es/documentos/documentos-migratorios-importantes", icon: "briefcase" },
      { label: "Mitos y miedos comunes", href: "/guias#mitos-y-miedos", icon: "alert" },
      { label: "Ver todas las guías", href: "/guias", icon: "compass" },
    ],
  },
];

const POPULAR_TOPICS = ["I-94", "Asilo", "Permiso de trabajo", "USCIS"];

const fade: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.16, ease: "easeIn" } },
};

export default function HeroExperience() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = SITUATIONS.find((s) => s.id === selectedId) ?? null;

  return (
    <div className="hero-grid">
      <AnimatePresence mode="wait" initial={false}>
        {!selected ? (
          <motion.div key="intro" variants={fade} initial="initial" animate="animate" exit="exit">
            <AnimatedHero />
            <p className="lead mt-4 !text-white [text-shadow:0_2px_10px_rgba(0,0,0,.4)]">
              Te ayudamos a entender documentos, casos, corte, ICE, USCIS, I-94 y otros temas de inmigración
              en un lenguaje sencillo, con enlaces directos a la fuente oficial.
            </p>

            <div className="mt-7">
              <AnimatedHeroActions />
            </div>

            <form action={withBase("/guias")} method="get" className="mt-8">
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Buscar</div>
              <div
                className="flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-4 pr-1.5 transition-colors focus-within:border-primary"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <input
                  type="search"
                  name="q"
                  placeholder="Escribe un tema, por ejemplo: permiso de trabajo…"
                  className="min-w-0 flex-1 border-none bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button type="submit" className="btn-pill btn-pill--red flex-shrink-0">
                  <span>Buscar</span>
                  <span className="btn-pill-icon">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Temas populares</span>
              {POPULAR_TOPICS.map((t) => (
                <a
                  key={t}
                  href={withBase(`/guias?q=${encodeURIComponent(t)}`)}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold text-foreground transition hover:border-primary hover:text-primary hover:no-underline"
                >
                  {t}
                </a>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="results" variants={fade} initial="initial" animate="animate" exit="exit">
            <span className="eyebrow">Después de seleccionar:</span>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon name={selected.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="font-bold text-foreground">{selected.label}</div>
                <div className="text-sm text-muted-foreground">{selected.description}</div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="ml-auto -my-2 -mr-1 flex-shrink-0 rounded px-2 py-2 text-xs font-bold text-primary hover:underline"
              >
                Cambiar
              </button>
            </div>

            <h3 className="mb-3 mt-7 text-lg">¿Qué necesitas saber?</h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {selected.items.map((item) => (
                <a
                  key={item.href}
                  href={withBase(item.href)}
                  className="group flex items-center gap-2.5 rounded-lg border border-border bg-card px-3.5 py-3 text-sm transition hover:border-primary hover:shadow-md hover:no-underline"
                >
                  <Icon name={item.icon} className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="flex-1 font-semibold text-foreground">{item.label}</span>
                  <Chevron />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {!selected ? (
          <motion.aside id="situaciones" key="picker" variants={fade} initial="initial" animate="animate" exit="exit" className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <h3 className="mb-4 text-lg">¿Qué necesitas resolver?</h3>
            <div className="flex flex-col gap-2">
              {SITUATIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedId(s.id)}
                  className="block w-full text-left transition hover:-translate-y-0.5 active:translate-y-0"
                >
                  <GlowCard
                    customSize
                    spin
                    className="!flex !h-auto w-full !flex-row items-center !gap-3 !rounded-full !p-4 !px-6 ![--backdrop:var(--bg)]"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-foreground">{s.label}</span>
                    <Chevron />
                  </GlowCard>
                </button>
              ))}
            </div>
          </motion.aside>
        ) : (
          <motion.aside
            key="illustration"
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-border p-8"
            style={{ background: "linear-gradient(180deg, var(--soft), var(--surface))" }}
          >
            <div className="glow glow-red" style={{ width: 260, height: 260, top: -90, right: -70 }} aria-hidden="true" />
            <div className="glow glow-gold" style={{ width: 200, height: 200, bottom: -70, left: -70 }} aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-xl">{selected.headline}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {selected.blurb[0]}
                <br />
                {selected.blurb[1]}
              </p>
            </div>
            <div className="relative z-10 flex flex-1 items-center justify-center py-4" aria-hidden="true">
              <div className="relative h-44 w-44">
                <img
                  src={selected.image}
                  alt=""
                  className="h-full w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
                />
                <span className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <Icon name={selected.icon} className="h-5 w-5" />
                </span>
              </div>
            </div>
            <p className="relative z-10 font-serif text-sm italic text-muted-foreground">
              {selected.quote}
            </p>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

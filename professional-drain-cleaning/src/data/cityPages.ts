export interface CityPage {
  slug: string;
  city: string;
  isHome: boolean;
  en: {
    intro: string;
    faq: { q: string; a: string }[];
  };
  es: {
    intro: string;
    faq: { q: string; a: string }[];
  };
}

export const CITY_PAGES: CityPage[] = [
  {
    slug: "north-fort-myers",
    city: "North Fort Myers",
    isHome: true,
    en: {
      intro:
        "Professional Drain Cleaner is based right here in North Fort Myers, so local homes and businesses get fast response times without a dispatch fee for driving across the county. From clogged drains to full drain line camera inspections, we're minutes away.",
      faq: [
        { q: "Do you charge a trip fee for North Fort Myers?", a: "No — since we're based in North Fort Myers, local calls don't carry an extra dispatch fee." },
        { q: "Can you come out the same day?", a: "In most cases yes, especially for North Fort Myers addresses. Call or text and we'll confirm availability." },
        { q: "Do you work on both houses and businesses?", a: "Yes, we handle residential and commercial drain and plumbing work throughout North Fort Myers." },
      ],
    },
    es: {
      intro:
        "Professional Drain Cleaner tiene su base aquí mismo en North Fort Myers, así que las casas y negocios locales reciben respuesta rápida sin cargo extra por trasladarse por el condado. Desde drenajes tapados hasta inspecciones completas con cámara, estamos a minutos de distancia.",
      faq: [
        { q: "¿Cobran cargo de traslado en North Fort Myers?", a: "No — como tenemos base en North Fort Myers, las llamadas locales no tienen cargo extra de traslado." },
        { q: "¿Pueden venir el mismo día?", a: "En la mayoría de los casos sí, especialmente en direcciones de North Fort Myers. Llama o manda mensaje y confirmamos disponibilidad." },
        { q: "¿Trabajan en casas y negocios?", a: "Sí, atendemos trabajos de drenaje y plomería residenciales y comerciales en todo North Fort Myers." },
      ],
    },
  },
  {
    slug: "cape-coral",
    city: "Cape Coral",
    isHome: false,
    en: {
      intro:
        "Cape Coral has more canals than any other city in the world, and a lot of older homes have been converted from septic to city sewer over the years — both of which make drain line condition and camera inspections especially important. We serve homeowners and businesses across Cape Coral.",
      faq: [
        { q: "Do you serve all of Cape Coral, including SW and NW?", a: "Yes, we cover Cape Coral homes and businesses across the city." },
        { q: "Can you inspect drain lines before I buy a home in Cape Coral?", a: "Yes, we offer camera drain inspections that are useful for pre-purchase checks, especially on older canal-front homes." },
        { q: "Do you handle septic-to-sewer conversion plumbing?", a: "We handle related drain line and underground plumbing work — call to describe your specific situation." },
      ],
    },
    es: {
      intro:
        "Cape Coral tiene más canales que cualquier otra ciudad del mundo, y muchas casas más antiguas han sido convertidas de séptico a sewer municipal con los años — ambas cosas hacen que el estado de las tuberías y las inspecciones con cámara sean especialmente importantes. Atendemos casas y negocios en todo Cape Coral.",
      faq: [
        { q: "¿Atienden todo Cape Coral, incluyendo SW y NW?", a: "Sí, cubrimos casas y negocios en toda la ciudad de Cape Coral." },
        { q: "¿Pueden inspeccionar las tuberías antes de comprar una casa en Cape Coral?", a: "Sí, ofrecemos inspección con cámara, útil para revisiones antes de comprar, especialmente en casas más antiguas frente a canal." },
        { q: "¿Trabajan en plomería relacionada con conversión de séptico a sewer?", a: "Manejamos trabajo relacionado de tuberías y plomería subterránea — llama y cuéntanos tu caso." },
      ],
    },
  },
  {
    slug: "fort-myers",
    city: "Fort Myers",
    isHome: false,
    en: {
      intro:
        "From the historic downtown River District to the neighborhoods along College Parkway and McGregor Blvd, Fort Myers has a mix of older homes with aging pipes and newer construction. We provide drain cleaning, camera inspections, and full plumbing service across Fort Myers.",
      faq: [
        { q: "Do you serve downtown Fort Myers and the surrounding area?", a: "Yes, we cover downtown Fort Myers and the surrounding neighborhoods." },
        { q: "Do older Fort Myers homes need different drain service?", a: "Older cast iron or clay drain lines are more prone to blockages and root intrusion — a camera inspection helps identify the exact issue before we recommend a fix." },
        { q: "Is emergency plumbing available in Fort Myers?", a: "Yes, we offer 24/7 emergency service for drain and plumbing issues in Fort Myers." },
      ],
    },
    es: {
      intro:
        "Desde el histórico downtown y el River District hasta los vecindarios de College Parkway y McGregor Blvd, Fort Myers tiene una mezcla de casas antiguas con tuberías envejecidas y construcción nueva. Ofrecemos limpieza de drenajes, inspección con cámara y servicio completo de plomería en todo Fort Myers.",
      faq: [
        { q: "¿Atienden el downtown de Fort Myers y alrededores?", a: "Sí, cubrimos el downtown de Fort Myers y los vecindarios cercanos." },
        { q: "¿Las casas antiguas de Fort Myers necesitan un servicio diferente?", a: "Las tuberías antiguas de hierro fundido o barro son más propensas a obstrucciones y raíces — una inspección con cámara ayuda a identificar el problema exacto antes de recomendar una solución." },
        { q: "¿Hay servicio de emergencia en Fort Myers?", a: "Sí, ofrecemos servicio de emergencia 24/7 para drenajes y plomería en Fort Myers." },
      ],
    },
  },
  {
    slug: "lehigh-acres",
    city: "Lehigh Acres",
    isHome: false,
    en: {
      intro:
        "Many Lehigh Acres properties rely on private wells and septic systems rather than city utilities, which means well pump, pressure tank, and water filtration issues come up alongside standard drain problems. We handle both for homes throughout Lehigh Acres.",
      faq: [
        { q: "Do you work on well water systems in Lehigh Acres?", a: "Yes, we handle well pump, pressure switch, pressure tank, and whole-house filtration work in addition to drain cleaning." },
        { q: "What if my water pressure is low?", a: "Low pressure is often tied to the well pump or pressure tank — call and describe the symptoms and we'll diagnose it." },
        { q: "Do you serve the whole Lehigh Acres grid, not just the main roads?", a: "Yes, we cover residential streets throughout Lehigh Acres, not just the main corridors." },
      ],
    },
    es: {
      intro:
        "Muchas propiedades en Lehigh Acres dependen de pozos privados y sistemas sépticos en lugar de servicios municipales, por lo que los problemas de bomba de pozo, tanque de presión y filtración de agua se presentan junto con los problemas normales de drenaje. Atendemos ambos en casas de todo Lehigh Acres.",
      faq: [
        { q: "¿Trabajan en sistemas de agua de pozo en Lehigh Acres?", a: "Sí, manejamos bomba de pozo, pressure switch, tanque de presión y filtración para toda la casa, además de limpieza de drenajes." },
        { q: "¿Qué pasa si tengo poca presión de agua?", a: "La baja presión suele estar relacionada con la bomba de pozo o el tanque de presión — llama y describe los síntomas para diagnosticarlo." },
        { q: "¿Atienden toda la cuadrícula de Lehigh Acres, no solo las calles principales?", a: "Sí, cubrimos calles residenciales en todo Lehigh Acres, no solo los corredores principales." },
      ],
    },
  },
  {
    slug: "bonita-springs",
    city: "Bonita Springs",
    isHome: false,
    en: {
      intro:
        "Bonita Springs sits between Fort Myers and Naples along the Gulf coast, with a mix of established neighborhoods and gated communities. We provide drain cleaning, camera inspections, and plumbing service for homes and businesses throughout Bonita Springs.",
      faq: [
        { q: "Do you service gated communities in Bonita Springs?", a: "Yes, just let us know the gate/entry process when you schedule and we'll coordinate access." },
        { q: "How fast can you respond in Bonita Springs?", a: "Response time depends on current jobs, but we serve Bonita Springs regularly — call to check same-day availability." },
        { q: "Do you handle both drain clogs and full remodel plumbing?", a: "Yes, from a single clogged drain to rough-in plumbing for a bathroom remodel." },
      ],
    },
    es: {
      intro:
        "Bonita Springs está entre Fort Myers y Naples en la costa del Golfo, con una mezcla de vecindarios establecidos y comunidades cerradas. Ofrecemos limpieza de drenajes, inspección con cámara y servicio de plomería para casas y negocios en todo Bonita Springs.",
      faq: [
        { q: "¿Atienden comunidades cerradas en Bonita Springs?", a: "Sí, solo indícanos el proceso de acceso/portón al agendar y coordinamos la entrada." },
        { q: "¿Qué tan rápido pueden responder en Bonita Springs?", a: "El tiempo de respuesta depende de los trabajos en curso, pero atendemos Bonita Springs regularmente — llama para confirmar disponibilidad el mismo día." },
        { q: "¿Manejan tanto destapes simples como remodelaciones completas?", a: "Sí, desde un drenaje tapado hasta el rough-in de plomería para una remodelación de baño." },
      ],
    },
  },
  {
    slug: "estero",
    city: "Estero",
    isHome: false,
    en: {
      intro:
        "Estero has grown quickly with newer construction around Coconut Point and the surrounding communities, alongside older established homes. We handle drain cleaning, water heater installation, and plumbing repairs for Estero homes and businesses.",
      faq: [
        { q: "Do you serve newer Estero communities as well as older homes?", a: "Yes, we work on both new construction plumbing issues and repairs on older Estero homes." },
        { q: "Can you install a water heater in Estero?", a: "Yes, we install and replace electric tank water heaters, including connections and drain pan setup." },
        { q: "Do you offer commercial plumbing in Estero?", a: "Yes, we service commercial properties in Estero in addition to residential work." },
      ],
    },
    es: {
      intro:
        "Estero ha crecido rápidamente con construcción nueva alrededor de Coconut Point y las comunidades cercanas, junto a casas más antiguas ya establecidas. Manejamos limpieza de drenajes, instalación de calentadores de agua y reparaciones de plomería para casas y negocios en Estero.",
      faq: [
        { q: "¿Atienden tanto comunidades nuevas como casas antiguas en Estero?", a: "Sí, trabajamos tanto en problemas de plomería de construcción nueva como en reparaciones de casas más antiguas en Estero." },
        { q: "¿Pueden instalar un calentador de agua en Estero?", a: "Sí, instalamos y reemplazamos calentadores eléctricos, incluyendo conexiones y drain pan." },
        { q: "¿Ofrecen plomería comercial en Estero?", a: "Sí, atendemos propiedades comerciales en Estero además del trabajo residencial." },
      ],
    },
  },
  {
    slug: "naples",
    city: "Naples",
    isHome: false,
    en: {
      intro:
        "Naples ranges from historic downtown homes to upscale North Naples communities, and drain or plumbing issues look a little different depending on the age of the property. We provide drain cleaning, camera inspections, and plumbing service throughout Naples.",
      faq: [
        { q: "Do you travel to Naples for service calls?", a: "Yes, Naples is part of our regular service area — call to confirm availability for your address." },
        { q: "Can you inspect older drain lines in downtown Naples homes?", a: "Yes, camera drain inspection is a good first step on older Naples homes before any repair or excavation." },
        { q: "Do you work in North Naples communities?", a: "Yes, we service homes and businesses throughout Naples, including North Naples." },
      ],
    },
    es: {
      intro:
        "Naples va desde casas históricas del downtown hasta comunidades exclusivas en North Naples, y los problemas de drenaje o plomería varían según la antigüedad de la propiedad. Ofrecemos limpieza de drenajes, inspección con cámara y servicio de plomería en todo Naples.",
      faq: [
        { q: "¿Se trasladan a Naples para dar servicio?", a: "Sí, Naples es parte de nuestra zona de servicio regular — llama para confirmar disponibilidad en tu dirección." },
        { q: "¿Pueden inspeccionar tuberías antiguas en casas del downtown de Naples?", a: "Sí, la inspección con cámara es un buen primer paso en casas antiguas de Naples antes de cualquier reparación o excavación." },
        { q: "¿Trabajan en comunidades de North Naples?", a: "Sí, atendemos casas y negocios en todo Naples, incluyendo North Naples." },
      ],
    },
  },
];

const _b = import.meta.env.BASE_URL ?? '/';
const base = _b.endsWith('/') ? _b : _b + '/';

// ============================================
// STRIPE PAYMENT LINK PLACEHOLDERS
// Replace "#" with real Stripe links when ready
// ============================================
export const stripeLinks = {
  nexusMini: '#',         // NEXUS_MINI_STRIPE_LINK
  starter: '#',           // STARTER_STRIPE_LINK
  professional: '#',      // PROFESSIONAL_STRIPE_LINK
  businessQuoteForm: '#', // BUSINESS_QUOTE_FORM_LINK
  onboardingForm: '#',    // ONBOARDING_FORM_LINK
  changeRequest: '#',     // CHANGE_REQUEST_FORM_LINK
  updatePack: '#',        // UPDATE_PACK_STRIPE_LINK
  careersForm: '#',       // CAREERS_APPLICATION_FORM_LINK
};

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'Flores Nexus Group',
    title: 'Flores Nexus Group - Simple Monthly Websites for Local Businesses',
    description:
      'Professional websites built for you, managed for you, and launched without agency prices. Starter at $299 setup + $79/month.',
    keywords:
      'Flores Nexus Group, web design, local business website, small business website, monthly website, Cape Coral, bilingual website',
    email: 'info@floresnexusgroup.com',
    ogTitle: 'Flores Nexus Group - Simple Monthly Websites for Local Businesses',
    ogDescription: 'Built for you. Managed for you. Without agency prices.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Flores Nexus Group',
    twitterDescription: 'Simple monthly websites for local businesses. Built and managed for you.',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Plans', href: `${base}#pricing` },
      { name: 'How It Works', href: `${base}#how-it-works` },
      { name: 'FAQ', href: `${base}#faq` },
      { name: 'Servicios', href: `${base}servicios` },
    ],
    cta: {
      text: 'View Plans',
      href: `${base}#pricing`,
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Simple monthly websites',
    subheadline: 'for local businesses',
    description:
      'Get a professional online presence built for you, managed for you, and launched without agency prices.',
    spanishLine: '',
    cta: {
      primary: {
        text: 'View Plans',
        href: `${base}#pricing`,
      },
      secondary: {
        text: 'Start My Website',
        href: `${base}#contact`,
      },
    },
    stats: [
      { value: '150+', label: 'Businesses Served' },
      { value: '5–7 days', label: 'After Info Received' },
      { value: 'EN / ES', label: 'English & Spanish' },
    ],
  },

  // ============================================
  // WHO WE HELP
  // ============================================
  whoWeHelp: {
    title: 'Who We Help',
    subtitle:
      'We build websites for local service businesses that need a professional online presence — without agency prices.',
    businesses: [
      { icon: 'heroicons:wrench-screwdriver', label: 'Handyman' },
      { icon: 'heroicons:home-modern', label: 'Remodeling' },
      { icon: 'heroicons:scissors', label: 'Lawn Care' },
      { icon: 'heroicons:sparkles', label: 'Cleaning' },
      { icon: 'heroicons:beaker', label: 'Pressure Washing' },
      { icon: 'heroicons:paint-brush', label: 'Painting' },
      { icon: 'heroicons:home', label: 'Roofing' },
      { icon: 'heroicons:user', label: 'Barbers' },
      { icon: 'heroicons:truck', label: 'Food Trucks' },
      { icon: 'heroicons:cog-6-tooth', label: 'Mobile Mechanics' },
    ],
  },

  // ============================================
  // VALUE COMPARISON
  // ============================================
  valueComparison: {
    title: 'Built for You. Managed for You.',
    subtitle: 'Without agency prices.',
    rows: [
      { label: 'Monthly cost', agency: '$1,500–$5,000+', nexus: 'From $79/month' },
      { label: 'Setup time', agency: '4–8 weeks', nexus: '5–7 days after info received' },
      { label: 'Contract', agency: 'Annual commitment', nexus: 'Cancel anytime' },
      { label: 'Bilingual support', agency: 'Extra cost', nexus: 'Included' },
      { label: 'Who builds it', agency: 'Multiple people, slow process', nexus: 'Our team, for you' },
      { label: 'Hosting included', agency: 'Extra cost', nexus: 'Included in all plans' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'What We Deliver',
    subtitle:
      'Every website we build comes with everything a local service business needs to get found and contacted.',
    items: [
      { icon: 'lightning', title: 'Professional Websites' },
      { icon: 'code', title: 'Smart Integrations' },
      { icon: 'chart', title: 'Basic Analytics' },
      { icon: 'chat', title: 'Bilingual Support' },
      { icon: 'shield', title: 'Secure & Hosted' },
      { icon: 'clock', title: 'Live in 5–7 Days' },
      { icon: 'brush', title: 'Custom Branding' },
      { icon: 'layers', title: 'Contact Visibility' },
      { icon: 'zap', title: 'Mobile-Friendly' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Five simple steps from choosing a plan to going live.',
  },

  // ============================================
  // PLAN SCOPE & ADD-ON OPTIONS
  // ============================================
  planScope: {
    title: 'Plan Scope & Add-On Options',
    intro:
      'Every Flores Nexus Group plan is designed with a clear scope so clients know what they are receiving before starting.',
    basePlans:
      'Base plans include a professional website structure, mobile-friendly design, contact visibility, hosting, and the features listed under each plan.',
    addOns:
      'Additional features such as advanced SEO, booking systems, CRM, online payments, automations, social media management, extra pages, or larger redesigns can be quoted separately.',
    addOnItems: [
      { label: 'Advanced SEO', detail: 'Basic website structure is included. Advanced SEO work is available as a custom service.' },
      { label: 'Booking & Scheduling', detail: 'Booking systems and appointment tools are available through custom plans or upgrades.' },
      { label: 'CRM & Automations', detail: 'CRM, booking tools, online payments, and automations are available through custom plans or upgrades.' },
      { label: 'Social Media Management', detail: 'Social media management and content creation are outside base plan scope and can be quoted separately.' },
      { label: 'Extra Pages & Redesigns', detail: 'Each plan includes the updates listed in the plan. Additional pages or larger changes can be requested separately.' },
      { label: 'Ownership Transfer', detail: 'Monthly plans are managed inside the Flores Nexus Group system. Ownership transfer can be discussed separately if needed.' },
    ],
    production: 'Production begins after payment and complete client information are received.',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Local business owners across Florida working with Flores Nexus Group.',
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Simple, Transparent Pricing',
    subtitle:
      'Site ready in 5–7 days after payment and complete client information.',
    plans: [
      {
        name: 'Starter Website',
        setup: '$299',
        monthly: '$79',
        period: '/month',
        description: 'Simple professional website for small local businesses.',
        featured: false,
        requestQuote: false,
        features: [
          'One-page website',
          'Business info & services section',
          'Call/text button',
          'Google Maps or service area',
          'Social links',
          'Mobile-friendly design',
          'Hosting included',
          'One pre-launch revision',
        ],
        notIncluded:
          'Does not include: unlimited edits, advanced SEO, monthly support calls, marketing, social media management, or guaranteed results.',
        cta: {
          text: 'Start Starter Website',
          href: '#',
        },
      },
      {
        name: 'Professional Website',
        setup: '$699',
        monthly: '$149',
        period: '/month',
        description: 'Complete website and stronger online presentation.',
        badge: 'RECOMMENDED',
        featured: true,
        requestQuote: false,
        features: [
          'Up to 5 pages',
          'Home, Services, About, Gallery, Contact',
          'Basic contact form',
          'Google Maps or service area',
          'Basic copywriting',
          'Mobile-friendly design',
          'Hosting included',
          'One small update per month',
        ],
        notIncluded:
          'Small update = replacing one photo, correcting short text, or updating contact info. New pages, redesigns, and advanced work are not included.',
        cta: {
          text: 'Start Professional Website',
          href: '#',
        },
      },
      {
        name: 'Business System',
        setup: '$2,500+',
        monthly: '$399+',
        period: '/month',
        description:
          'Advanced tools, integrations, booking, payments, CRM, and automations.',
        featured: false,
        requestQuote: true,
        features: [
          'Advanced quote forms',
          'Booking systems',
          'Online payments',
          'CRM or email integration',
          'Email automation',
          'Landing pages',
          'Analytics & reporting',
          'Multiple locations',
          'External integrations',
        ],
        notIncluded: 'Requires a custom quote. Price depends on scope and integrations needed.',
        cta: {
          text: 'Request Quote',
          href: '#',
        },
      },
    ],
    nexusMiniCard: {
      name: 'Nexus Card',
      tag: 'Entry Option',
      setup: '$99',
      monthly: '$29',
      annual: '$299',
      description:
        'Not a full website. A simple digital business card — a professional shareable link with your business info and contact buttons.',
      features: [
        'Business name & phone number',
        'Call and text/WhatsApp button',
        'Service area & basic hours',
        '3–5 services listed',
        'One main image or background',
        'Social links',
        'Mobile-friendly design',
        'Hosted on a Flores Nexus managed link',
      ],
      disclaimer:
        'No edits after launch. Includes one initial setup only. The domain, hosting, design, code, and structure remain owned and managed by Flores Nexus Group. Ownership transfer is not included in this plan.',
      cta: {
        text: 'Start Nexus Card',
        href: '#',
      },
    },
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Clear answers about ownership, payment, changes, and delivery.',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Ready to Start Your Website?',
    subtitle:
      'Choose a plan, complete payment, and submit your onboarding information so we can begin reviewing your project.',
    benefits: [
      'No long-term commitment required',
      'Response within 24 hours',
      'English and Spanish support',
      'Clear pricing — no surprises',
    ],
    email: 'info@floresnexusgroup.com',
    form: {
      cta: 'Send Message',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Email',
          placeholder: 'john@yourbusiness.com',
          required: true,
        },
        company: {
          label: 'Business Name',
          placeholder: 'Your Business Name',
          required: false,
        },
        message: {
          label: 'What do you need?',
          placeholder:
            'Tell us about your business and what you are looking for...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // LEGAL
  // ============================================
  legal: {
    companyName: 'Flores Nexus Group LLC',
    location: 'Cape Coral, Florida, United States',
    email: 'Floresnexusgroup@gmail.com',
    privacyLastUpdated: 'May 2025',
    tosLastUpdated: 'May 2025',
    cancellationLastUpdated: 'May 2025',
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Flores Nexus Group — Simple monthly websites for local businesses. Built for you. Managed for you.',
    columns: [
      {
        title: 'Plans',
        links: [
          { name: 'Starter Website', href: `${base}#pricing` },
          { name: 'Professional Website', href: `${base}#pricing` },
          { name: 'Business System', href: `${base}#pricing` },
          { name: 'Nexus Card', href: `${base}#pricing` },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'How It Works', href: `${base}#how-it-works` },
          { name: 'FAQ', href: `${base}#faq` },
          { name: 'Contact', href: `${base}#contact` },
          { name: 'Servicios', href: `${base}servicios` },
          { name: 'Careers', href: `${base}careers` },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: `${base}privacy-policy` },
          { name: 'Terms of Service', href: `${base}terms-of-service` },
          { name: 'Cancellation Policy', href: `${base}cancellation-policy` },
        ],
      },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: 'facebook' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} Flores Nexus Group LLC. All rights reserved.`,
  },
};

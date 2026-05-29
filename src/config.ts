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
      { name: 'Who We Help', href: '#who-we-help' },
      { name: 'Plans', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'View Plans',
      href: '#pricing',
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
    spanishLine:
      'Páginas web simples para negocios locales — hechas por nosotros, administradas por nosotros y sin precios de agencia.',
    cta: {
      primary: {
        text: 'View Plans',
        href: '#pricing',
      },
      secondary: {
        text: 'Start My Website',
        href: '#contact',
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
  // WHAT WE ARE NOT
  // ============================================
  whatWeAreNot: {
    title: 'What Flores Nexus Group Is Not',
    subtitle:
      'We want you to know exactly what you are getting — and what you are not.',
    items: [
      {
        statement: 'Not an open support agency',
        meaning:
          'We do not offer unlimited calls, open-ended support, or ongoing project work outside your plan scope.',
      },
      {
        statement: 'No guaranteed sales or leads',
        meaning:
          'We provide a professional online presence. We do not guarantee sales, calls, leads, revenue, or business growth.',
      },
      {
        statement: 'No social media management in base plans',
        meaning:
          'Social media management, ad campaigns, and content creation are outside the scope of Starter and Professional plans.',
      },
      {
        statement: 'No unlimited edits or redesigns',
        meaning:
          'Changes are limited by your plan. Professional includes one small update per month. Other changes are billed separately.',
      },
      {
        statement: 'No guaranteed Google ranking',
        meaning:
          'Our websites are built with basic structure and contact visibility. Advanced SEO work must be quoted separately.',
      },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Trusted by Small Businesses',
    subtitle: 'See what our clients have to say about Flores Nexus Group',
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
      name: 'Nexus Mini Card',
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
        text: 'Start Mini Card',
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
    title: 'Start with a Plan or Request a Quote',
    subtitle:
      'Not sure which plan fits your business? Send us a message and we will help you choose.',
    benefits: [
      'No commitment required',
      'Response within 24 hours',
      'English and Spanish support',
      'Clear pricing based on your needs',
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
          { name: 'Starter Website', href: '#pricing' },
          { name: 'Professional Website', href: '#pricing' },
          { name: 'Business System', href: '#pricing' },
          { name: 'Nexus Mini Card', href: '#pricing' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'Who We Help', href: '#who-we-help' },
          { name: 'How It Works', href: '#how-it-works' },
          { name: 'FAQ', href: '#faq' },
          { name: 'Contact', href: '#contact' },
          { name: 'Careers', href: '/careers' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '/privacy-policy' },
          { name: 'Terms of Service', href: '/terms-of-service' },
          { name: 'Cancellation Policy', href: '/cancellation-policy' },
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

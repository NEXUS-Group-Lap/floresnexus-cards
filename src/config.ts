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
  // SITE METADATA
  // ============================================
  site: {
    name: 'Flores Nexus Group',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Plans', href: `${base}servicios#planes` },
      { name: 'How It Works', href: `${base}servicios#como-funciona` },
      { name: 'FAQ', href: `${base}servicios#faq` },
      { name: 'Servicios', href: `${base}servicios` },
    ],
    cta: {
      text: 'View Plans',
      href: `${base}servicios#planes`,
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
          { name: 'Starter Website', href: `${base}servicios#planes` },
          { name: 'Professional Website', href: `${base}servicios#planes` },
          { name: 'Business System', href: `${base}servicios#planes` },
          { name: 'Nexus Card', href: `${base}servicios#planes` },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'How It Works', href: `${base}servicios#como-funciona` },
          { name: 'FAQ', href: `${base}servicios#faq` },
          { name: 'Contact', href: `${base}servicios#contact` },
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

// =====================================================
// PLANS DATA — Single source of truth
// Used by: Pricing.astro (cards) + /plans/* (detail pages)
// =====================================================
const _b = import.meta.env.BASE_URL ?? '/';
const base = _b.endsWith('/') ? _b : _b + '/';

export interface PlanStep {
  step: string;
  description: string;
}

export interface Plan {
  id: string;
  name: string;
  tag?: string;
  setup: string;
  monthly: string;
  period: string;
  annual?: string;
  badge?: string;
  featured: boolean;
  requestQuote: boolean;
  isEntryOption?: boolean;
  description: string;
  bestFor: string;
  detailPageUrl: string;
  paymentLink: string | null; // null = no direct payment (Business System)
  paymentButtonText: string;
  cardButtonText: string;
  features: string[];
  notIncluded: string;
  disclaimer?: string;
  processSteps: PlanStep[];
}

// -------------------------------------------------------
// MAIN PLANS (shown as the 3 primary cards in pricing)
// -------------------------------------------------------
export const mainPlans: Plan[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    setup: '$299',
    monthly: '$79',
    period: '/month',
    featured: false,
    requestQuote: false,
    description: 'Simple professional website for small local businesses.',
    bestFor:
      'Small businesses that need a simple professional online presence to make it easier for customers to find and contact them. One page, no extras, just what you need.',
    detailPageUrl: `${base}plans/starter-website/`,
    paymentLink: 'https://buy.stripe.com/placeholder-starter',
    paymentButtonText: 'Pay for Starter Website',
    cardButtonText: 'Start Starter Website',
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
    processSteps: [
      {
        step: 'Review this plan',
        description:
          'Confirm what is included and that the Starter Website is the right fit for your business.',
      },
      {
        step: 'Complete payment',
        description:
          'Pay the $299 setup fee securely through Stripe. Monthly billing of $79 starts after your site goes live.',
      },
      {
        step: 'Fill out the onboarding form',
        description:
          'Tell us your business name, services, phone number, service area, and send your photos or logo.',
      },
      {
        step: 'We build it',
        description:
          'Our team builds your one-page website. Production starts only after payment and complete information are received.',
      },
      {
        step: 'Review and launch',
        description:
          'We send you a preview link. You approve or request one revision. Your site goes live in 5–7 days.',
      },
    ],
  },
  {
    id: 'professional-website',
    name: 'Professional Website',
    setup: '$699',
    monthly: '$149',
    period: '/month',
    badge: 'RECOMMENDED',
    featured: true,
    requestQuote: false,
    description: 'Complete website and stronger online presentation.',
    bestFor:
      'Businesses that need a complete multi-page website with a stronger online presentation, a contact form, and a gallery to showcase their work.',
    detailPageUrl: `${base}plans/professional-website/`,
    paymentLink: 'https://buy.stripe.com/placeholder-professional',
    paymentButtonText: 'Pay for Professional Website',
    cardButtonText: 'Start Professional Website',
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
    processSteps: [
      {
        step: 'Review this plan',
        description:
          'Confirm what is included and that the Professional Website is the right fit for your business.',
      },
      {
        step: 'Complete payment',
        description:
          'Pay the $699 setup fee securely through Stripe. Monthly billing of $149 starts after your site goes live.',
      },
      {
        step: 'Fill out the onboarding form',
        description:
          'Tell us your business name, services, page content, photos, logo, and contact info for all 5 pages.',
      },
      {
        step: 'We build it',
        description:
          'Our team builds your 5-page website. Production starts only after payment and complete information are received.',
      },
      {
        step: 'Review and launch',
        description:
          'We send you a preview link. You review all pages, request one revision if needed, approve, and your site goes live.',
      },
    ],
  },
  {
    id: 'business-system',
    name: 'Business System',
    setup: '$2,500+',
    monthly: '$399+',
    period: '/month',
    featured: false,
    requestQuote: true,
    description:
      'Advanced tools, integrations, booking, payments, CRM, and automations.',
    bestFor:
      'Businesses that need more than a website — booking systems, online payments, CRM integrations, automated follow-ups, and advanced tools built around their operations.',
    detailPageUrl: `${base}plans/business-system/`,
    paymentLink: null, // No direct checkout — requires quote
    paymentButtonText: 'Request Custom Quote',
    cardButtonText: 'View Business System',
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
    notIncluded:
      'Requires a custom quote. Price depends on scope and integrations needed. This is not a fixed-price plan.',
    processSteps: [
      {
        step: 'Request a quote',
        description:
          'Fill out the inquiry form with your business needs, current tools, and what you are trying to accomplish.',
      },
      {
        step: 'Discovery call',
        description:
          'We schedule a short call to understand your requirements and define the scope of the project.',
      },
      {
        step: 'Receive a custom proposal',
        description:
          'We send you a detailed proposal with scope, timeline, and pricing. No commitment until you approve.',
      },
      {
        step: 'Approve and begin',
        description:
          'Once you approve the proposal and complete the setup payment, production begins.',
      },
      {
        step: 'Build, test, and launch',
        description:
          'We build, test, and prepare your Business System for launch. You review before it goes live.',
      },
    ],
  },
];

// -------------------------------------------------------
// NEXUS MINI CARD (shown as the entry-level option below)
// -------------------------------------------------------
export const nexusMiniCardPlan: Plan = {
  id: 'mini-card',
  name: 'Nexus Mini Card',
  tag: 'Entry Option',
  setup: '$99',
  monthly: '$29',
  period: '/month',
  annual: '$299',
  featured: false,
  requestQuote: false,
  isEntryOption: true,
  description:
    'Not a full website. A simple digital business card — a professional shareable link with your business info and contact buttons.',
  bestFor:
    'Business owners who need a professional shareable link right now but are not ready for a full website. A good first step or for very simple needs.',
  detailPageUrl: `${base}plans/mini-card/`,
  paymentLink: 'https://buy.stripe.com/placeholder-mini-card',
  paymentButtonText: 'Pay for Mini Card',
  cardButtonText: 'Start Mini Card',
  disclaimer:
    'No edits after launch. Includes one initial setup only. The domain, hosting, design, code, and structure remain owned and managed by Flores Nexus Group. Ownership transfer is not included in this plan.',
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
  notIncluded:
    'No edits after launch. Not a full website. No domain ownership. No redesigns, additional pages, or content updates after activation.',
  processSteps: [
    {
      step: 'Review this option',
      description:
        'Confirm the Nexus Mini Card fits your current needs. It is a digital card, not a full website.',
    },
    {
      step: 'Complete payment',
      description:
        'Pay the $99 setup fee. Choose monthly ($29/month) or annual ($299/year) billing.',
    },
    {
      step: 'Fill out the setup form',
      description:
        'Send us your business name, phone number, services, service area, and one main photo.',
    },
    {
      step: 'We build it',
      description:
        'We set up your Nexus Mini Card. Production starts only after payment and complete information are received.',
    },
    {
      step: 'Review and activate',
      description:
        'We send you the link to review. Once you confirm, it goes live. No changes can be made after activation.',
    },
  ],
};

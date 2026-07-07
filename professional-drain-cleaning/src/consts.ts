// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Professional Drain Cleaning';
export const SITE_DESCRIPTION = 'Professional Drain Cleaning provides drain cleaning, camera inspections, toilet and water heater installation, bathroom remodel plumbing, well water systems, and underground plumbing for homes and businesses in Southwest Florida. Licensed and insured. Based in Cape Coral. Call 239-791-0937.';
export const SEO_TITLE_HOME = 'Professional Drain Cleaning | 24/7 Drain & Plumbing Services in Southwest Florida';
export const SEO_TITLE_CONTACT = 'Request Service | Professional Drain Cleaning';
export const CONTACT_DESCRIPTION = 'Request drain cleaning or plumbing service from Professional Drain Cleaning. Call, text, or WhatsApp us — available 24/7 in Cape Coral and Southwest Florida.';

export const PHONE_DISPLAY = '239-791-0937';
export const PHONE_TEL = 'tel:+12397910937';
export const WHATSAPP_URL = 'https://wa.me/12397910937';
export const EMAIL_ADDRESS = 'Yasmanialvarez94@gmail.com';
export const EMAIL_MAILTO = `mailto:${EMAIL_ADDRESS}`;
export const GOOGLE_PROFILE_URL = 'https://share.google/GemoSo4Bu0IE5JtMm';
export const GOOGLE_REVIEWS_URL = GOOGLE_PROFILE_URL;
export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_PROFILE_URL;

export const TIKTOK_URL = 'https://www.tiktok.com/@professionasplomero1';
export const INSTAGRAM_URL = 'https://www.instagram.com/proffesionaldraincleaning';
export const FACEBOOK_URL = 'https://www.facebook.com/yasmani.alvarez.980';

export const OWNER_NAME = 'Yasmani';

export const SERVICE_AREAS = [
    'Cape Coral',
    'Fort Myers',
    'North Fort Myers',
    'Lehigh Acres',
    'Bonita Springs',
    'Estero',
    'Naples',
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', icon: 'simple-icons:facebook', url: FACEBOOK_URL },
    { name: 'Instagram', icon: 'simple-icons:instagram', url: INSTAGRAM_URL },
    { name: 'TikTok', icon: 'simple-icons:tiktok', url: TIKTOK_URL },
    { name: 'Google', icon: 'simple-icons:google', url: GOOGLE_PROFILE_URL },
];

// Base path of the deployment (e.g. "/professionaldraincleaning/" on floresnexus.cards)
export const BASE = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

export const NAV_MENU = [
    {
        url: BASE,
        title: "Home",
        es: "Inicio"
    },
    {
        url: `${BASE}#emergency`,
        title: "Emergency",
        es: "Emergencia"
    },
    {
        url: `${BASE}#service-area`,
        title: "Service Area",
        es: "Zona de Servicio"
    },
    {
        url: `${BASE}#about`,
        title: "About Us",
        es: "Nosotros"
    },
    {
        url: `${BASE}#services`,
        title: "Services",
        es: "Servicios"
    },
    {
        url: `${BASE}#gallery`,
        title: "Gallery",
        es: "Galería"
    },
    {
        url: `${BASE}#reviews`,
        title: "Reviews",
        es: "Reseñas"
    },
    {
        url: `${BASE}#request-service`,
        title: "Request Service",
        es: "Solicitar Servicio"
    },
    {
        url: `${BASE}contact`,
        title: "Contact",
        es: "Contacto"
    }
];

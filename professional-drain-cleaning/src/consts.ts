// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Professional Drain Cleaner';
export const LEGAL_NAME = 'Professional Drain Cleaner LLC';
export const SITE_DESCRIPTION = 'Professional Drain Cleaner LLC provides drain cleaning, camera inspections, toilet and water heater installation, bathroom remodel plumbing, well water systems, and underground plumbing for homes and businesses in Southwest Florida. Licensed and insured. Based in North Fort Myers. Call 239-791-0937.';
export const SEO_TITLE_HOME = 'Professional Drain Cleaner | 24/7 Drain & Plumbing Services in Southwest Florida';
export const SEO_TITLE_CONTACT = 'Request Service | Professional Drain Cleaner';
export const CONTACT_DESCRIPTION = 'Request drain cleaning or plumbing service from Professional Drain Cleaner. Call, text, or WhatsApp us — available 24/7 in North Fort Myers, Cape Coral, and Southwest Florida.';
export const SEO_TITLE_COMPANY_INFO = 'Company Information & Florida License | Professional Drain Cleaner LLC';
export const COMPANY_INFO_DESCRIPTION = 'Official Florida business registration details for Professional Drain Cleaner LLC: Sunbiz document number, FEI/EIN, registered agent, and business address in North Fort Myers, FL.';
export const SEO_TITLE_SERVICE_AREAS = 'Service Areas | Professional Drain Cleaner';
export const SERVICE_AREAS_DESCRIPTION = 'Professional Drain Cleaner provides drain cleaning and plumbing services in North Fort Myers, Cape Coral, Fort Myers, Lehigh Acres, Bonita Springs, Estero, and Naples, FL. Find your city and call 24/7.';

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
    'North Fort Myers',
    'Cape Coral',
    'Fort Myers',
    'Lehigh Acres',
    'Bonita Springs',
    'Estero',
    'Naples',
];

// Registered business address (per Florida Sunbiz filing)
export const BUSINESS_STREET = '936 Jolly Rd';
export const BUSINESS_CITY = 'North Fort Myers';
export const BUSINESS_STATE = 'FL';
export const BUSINESS_ZIP = '33903';

// Florida Sunbiz filing details (sunbiz.org, Document Number L23000262811)
export const SUNBIZ = {
    documentNumber: 'L23000262811',
    fein: '93-1760347',
    dateFiled: '05/30/2023',
    effectiveDate: '05/30/2023',
    state: 'FL',
    status: 'ACTIVE',
    registeredAgent: 'Yasmani Alvarez Torres',
    principalAddress: `${BUSINESS_STREET}, ${BUSINESS_CITY}, ${BUSINESS_STATE} ${BUSINESS_ZIP}`,
    mailingAddress: `${BUSINESS_STREET}, ${BUSINESS_CITY}, ${BUSINESS_STATE} ${BUSINESS_ZIP}`,
};

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
        url: `${BASE}service-areas`,
        title: "Cities We Serve",
        es: "Ciudades Que Atendemos"
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

export interface AgencyInfo {
  name: string;
  full: string;
  color: string;
  soft: string;
}

// Un color fijo por agencia para que el usuario aprenda a reconocerlas
// de un vistazo (mismo color en las insignias de arriba y en las fuentes de abajo).
export const AGENCIES: Record<string, AgencyInfo> = {
  USCIS: { name: 'USCIS', full: 'Servicios de Ciudadanía e Inmigración', color: '#174ea6', soft: '#eef4ff' },
  EOIR:  { name: 'EOIR',  full: 'Corte de Inmigración', color: '#7c3aed', soft: '#f4efff' },
  ICE:   { name: 'ICE',   full: 'Control de Inmigración y Aduanas', color: '#b42318', soft: '#fef2f1' },
  CBP:   { name: 'CBP',   full: 'Aduanas y Protección Fronteriza', color: '#0e7c66', soft: '#eafbf6' },
  DOJ:   { name: 'DOJ',   full: 'Departamento de Justicia', color: '#475467', soft: '#f2f4f7' },
  DHS:   { name: 'DHS',   full: 'Departamento de Seguridad Nacional', color: '#9a3412', soft: '#fff3ec' },
  'Federal Register': { name: 'Federal Register', full: 'Registro Federal del Gobierno de EE. UU.', color: '#6b7280', soft: '#f4f4f5' },
  'Department of State': { name: 'Dept. de Estado', full: 'Departamento de Estado', color: '#0369a1', soft: '#eef8ff' },
  'Social Security Administration': { name: 'SSA', full: 'Administración del Seguro Social', color: '#166534', soft: '#eefbf1' }
};

const DEFAULT_AGENCY: AgencyInfo = { name: 'Gobierno', full: 'Fuente oficial del gobierno', color: '#174ea6', soft: '#eef4ff' };

export function getAgency(code: string): AgencyInfo {
  return AGENCIES[code] ?? DEFAULT_AGENCY;
}

// Detecta la agencia a partir del texto de un enlace, ej. "CBP — I-94" -> CBP.
export function detectAgency(text: string): AgencyInfo {
  const upper = text.toUpperCase();
  for (const code of Object.keys(AGENCIES)) {
    if (upper.includes(code)) return AGENCIES[code];
  }
  return DEFAULT_AGENCY;
}

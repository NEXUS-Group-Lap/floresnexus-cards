import type { ImageMetadata } from 'astro';
import casosPendientes from '../assets/images/categoria-casos-pendientes.jpg';
import corteInmigracion from '../assets/images/categoria-corte-inmigracion.jpg';
import asilo from '../assets/images/categoria-asilo.jpg';
import detencionIce from '../assets/images/categoria-detencion-ice.jpg';
import documentos from '../assets/images/categoria-documentos.jpg';
import visas from '../assets/images/categoria-visas.jpg';
import ciudadania from '../assets/images/categoria-ciudadania.jpg';
import residencia from '../assets/images/categoria-residencia.jpg';
import cartasUscis from '../assets/images/categoria-cartas-uscis.jpg';
import mitosMiedos from '../assets/images/categoria-mitos-miedos.jpg';
import regresarPais from '../assets/images/categoria-regresar-pais.jpg';
import permisoTrabajo from '../assets/images/categoria-permiso-trabajo.jpg';
import actualizaciones from '../assets/images/categoria-actualizaciones.jpg';
import familiaPeticiones from '../assets/images/categoria-familia-peticiones.jpg';
import sinEstatusLegal from '../assets/images/categoria-sin-estatus-legal.jpg';
import heroBgImage from '../assets/images/hero-banderas-fondo.jpg';
import recursosComunidad from '../assets/images/recursos-comunidad.jpg';

// Fotos ilustrativas (Pixabay y Pexels, licencia libre de uso) por categoría editorial.
// Uso decorativo: ninguna pretende representar un edificio o documento específico del caso del lector.
// categoryImage() siempre tiene una imagen de respaldo (ver DEFAULT_IMAGE).
export const CATEGORY_IMAGES: Record<string, { src: ImageMetadata; alt: string }> = {
  'Corte de inmigración': { src: corteInmigracion, alt: 'Fachada de un edificio de corte con columnas clásicas' },
  'Documentos y términos': { src: documentos, alt: 'Una mano sostiene un pasaporte de Estados Unidos' },
  'Asilo': { src: asilo, alt: 'Silueta de una persona mirando el horizonte al amanecer, sobre un mar de nubes' },
  'Visas y entrada': { src: visas, alt: 'Vista de un avión desde abajo, volando contra un cielo despejado' },
  'Permiso de trabajo': { src: permisoTrabajo, alt: 'Una trabajadora con casco y chaleco de seguridad' },
  'TPS y parole': { src: casosPendientes, alt: 'Carpetas de archivo organizadas, representando el seguimiento de un caso' },
  'ICE y detención': { src: detencionIce, alt: 'Un adulto sostiene la mano de un bebé, en señal de protección familiar' },
  'Sin estatus legal': { src: sinEstatusLegal, alt: 'La silueta de una persona sentada sola frente al agua al atardecer' },
  'Mitos y miedos': { src: mitosMiedos, alt: 'Una persona rodeada de signos de interrogación, representando dudas comunes' },
  'Cartas USCIS': { src: cartasUscis, alt: 'Dos sobres de papel sobre una superficie clara' },
  'Regresar a mi país': { src: regresarPais, alt: 'Un avión aterrizando en una pista bajo un cielo nublado' },
  'Residencia': { src: residencia, alt: 'Una mano sostiene llaves de casa frente a un conjunto de viviendas' },
  'Ciudadanía': { src: ciudadania, alt: 'Personas sentadas sosteniendo pequeñas banderas de Estados Unidos' },
  'Actualizaciones': { src: actualizaciones, alt: 'Dos banderas de Estados Unidos ondeando frente a un edificio de gobierno' },
  'Familia y peticiones': { src: familiaPeticiones, alt: 'Dos adultos caminan de la mano con una niña pequeña' }
};

const DEFAULT_IMAGE = { src: documentos, alt: 'Una mano sostiene un pasaporte de Estados Unidos' };

export const HERO_BG_IMAGE: { src: ImageMetadata; alt: string } = {
  src: heroBgImage,
  alt: ''
};

export const RECURSOS_IMAGE: { src: ImageMetadata; alt: string } = {
  src: recursosComunidad,
  alt: 'Dos personas conversan y comparten un almuerzo frente a una obra en construcción'
};

export function categoryImage(category: string) {
  return CATEGORY_IMAGES[category] ?? DEFAULT_IMAGE;
}

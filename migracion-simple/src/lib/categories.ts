// Orden editorial de categorías: de lo más básico a lo más urgente, para que
// alguien nuevo no se tope con "corte" o "detención" antes de entender lo esencial.
export const CATEGORY_ORDER = [
  'Documentos y términos',
  'Mitos y miedos',
  'Visas y entrada',
  'Permiso de trabajo',
  'TPS y parole',
  'Familia y peticiones',
  'Residencia',
  'Asilo',
  'Cartas USCIS',
  'Sin estatus legal',
  'Corte de inmigración',
  'ICE y detención',
  'Regresar a mi país',
  'Actualizaciones',
  'Ciudadanía'
];

const PRIORITY_WEIGHT: Record<string, number> = { alta: 0, media: 1, baja: 2 };

export function categorySlug(category: string): string {
  const diacritics = new RegExp('[̀-ͯ]', 'g');
  return category
    .normalize('NFD')
    .replace(diacritics, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function categoryIndex(category: string): number {
  const i = CATEGORY_ORDER.indexOf(category);
  return i === -1 ? CATEGORY_ORDER.length : i;
}

interface GuideLike {
  data: { category: string; priority: string; title: string };
}

function sortGuides<T extends GuideLike>(guides: T[]): T[] {
  return [...guides].sort((a, b) => {
    const byCategory = categoryIndex(a.data.category) - categoryIndex(b.data.category);
    if (byCategory !== 0) return byCategory;
    const byPriority = (PRIORITY_WEIGHT[a.data.priority] ?? 1) - (PRIORITY_WEIGHT[b.data.priority] ?? 1);
    if (byPriority !== 0) return byPriority;
    return a.data.title.localeCompare(b.data.title, 'es');
  });
}

export function groupByCategory<T extends GuideLike>(guides: T[]) {
  const sorted = sortGuides(guides);
  const order: string[] = [];
  const groups = new Map<string, T[]>();
  for (const guide of sorted) {
    const category = guide.data.category;
    if (!groups.has(category)) {
      groups.set(category, []);
      order.push(category);
    }
    groups.get(category)!.push(guide);
  }
  return order.map(category => ({
    category,
    slug: categorySlug(category),
    items: groups.get(category)!
  }));
}

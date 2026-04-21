export interface Product {
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  sizes?: { label: string; stems: number; price: number }[];
  badge?: string;
}

export const products: Product[] = [
  {
    slug: "eclat-de-rose",
    name: "Éclat de Rose",
    price: 89,
    description: "Un bouquet généreux de roses Naomi aux teintes profondes, assemblé avec du feuillage d'eucalyptus frais. Durée de vie : 10 à 14 jours.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=600&fit=crop",
    category: "Bouquets",
    sizes: [
      { label: "Classique", stems: 12, price: 89 },
      { label: "Majestueux", stems: 24, price: 149 },
      { label: "Royal", stems: 36, price: 199 },
    ],
    badge: "Best-seller",
  },
  {
    slug: "jardin-sauvage",
    name: "Jardin Sauvage",
    price: 65,
    description: "Un mélange champêtre de fleurs de saison, capturant l'esprit des jardins français. Assemblé à la main chaque matin.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop",
    category: "Bouquets",
  },
  {
    slug: "purete-blanche",
    name: "Pureté Blanche",
    price: 79,
    description: "L'élégance absolue d'un bouquet tout en blanc — lys, roses et pivoines selon la saison.",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=600&h=600&fit=crop",
    category: "Bouquets",
    sizes: [
      { label: "Classique", stems: 15, price: 79 },
      { label: "Grand", stems: 25, price: 129 },
    ],
  },
  {
    slug: "soleil-de-provence",
    name: "Soleil de Provence",
    price: 72,
    description: "Tournesols et lavande évoquant les champs du sud. Un rayon de soleil livré chez vous.",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=600&fit=crop",
    category: "Bouquets",
  },
  {
    slug: "orchidee-imperiale",
    name: "Orchidée Impériale",
    price: 95,
    description: "Phalaenopsis blanc pur dans un cache-pot en céramique artisanale. Floraison 2-3 mois.",
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=600&fit=crop",
    category: "Plantes",
    sizes: [
      { label: "Simple tige", stems: 1, price: 95 },
      { label: "Double tige", stems: 2, price: 145 },
    ],
    badge: "Nouveau",
  },
  {
    slug: "composition-elegance",
    name: "Composition Élégance",
    price: 120,
    description: "Arrangement dans une vasque en céramique — idéal pour un centre de table ou un cadeau d'entreprise.",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=600&fit=crop",
    category: "Compositions",
  },
  {
    slug: "lys-elegance",
    name: "Lys Élégance",
    price: 95,
    description: "Lys orientaux blancs et roses, symbole d'élégance et de raffinement. Parfum envoûtant garanti.",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=600&fit=crop",
    category: "Bouquets",
  },
  {
    slug: "abonnement-hebdo",
    name: "Abonnement Hebdomadaire",
    price: 45,
    description: "Chaque semaine, un bouquet surprise de fleurs de saison livré à votre porte. -10% vs l'achat unitaire.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop",
    category: "Abonnements",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

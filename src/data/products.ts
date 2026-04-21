export interface Product {
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  sizes?: { label: string; price: number }[];
  badge?: string;
}

export const products: Product[] = [
  {
    slug: "bouquet-roses-rouges",
    name: "Bouquet de Roses Rouges",
    price: 89,
    description:
      "24 roses rouges fraîches, cueillies du jour. Un classique intemporel pour exprimer vos sentiments les plus profonds.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=600&fit=crop",
    category: "Roses",
    sizes: [
      { label: "S (12 tiges)", price: 49 },
      { label: "M (24 tiges)", price: 89 },
      { label: "L (36 tiges)", price: 129 },
    ],
    badge: "Best-seller",
  },
  {
    slug: "bouquet-pivoines-roses",
    name: "Pivoines Roses Éternelles",
    price: 79,
    description:
      "Bouquet de pivoines roses aux pétales délicats. Fraîcheur garantie, livraison same-day à Paris.",
    image:
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=600&h=600&fit=crop",
    category: "Pivoines",
  },
  {
    slug: "composition-orchidees",
    name: "Composition Orchidées Blanches",
    price: 129,
    description:
      "Arrangement luxueux d'orchidées phalaenopsis blanches dans un vase en céramique artisanale.",
    image:
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=600&fit=crop",
    category: "Orchidées",
    badge: "Nouveau",
  },
  {
    slug: "bouquet-saison-printanier",
    name: "Bouquet de Saison — Printemps",
    price: 65,
    description:
      "Sélection du fleuriste avec les plus belles fleurs de saison. Chaque bouquet est unique.",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop",
    category: "Saison",
  },
  {
    slug: "bouquet-lys-elegance",
    name: "Lys Élégance",
    price: 95,
    description:
      "Lys orientaux blancs et roses, symbole d'élégance et de raffinement. Parfum envoûtant garanti.",
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=600&fit=crop",
    category: "Lys",
  },
  {
    slug: "bouquet-tulipes-amsterdam",
    name: "Tulipes Amsterdam",
    price: 55,
    description:
      "30 tulipes hollandaises aux couleurs vives. Fraîcheur et bonne humeur assurées.",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=600&fit=crop",
    category: "Tulipes",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];

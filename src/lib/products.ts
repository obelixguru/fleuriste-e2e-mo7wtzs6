export interface Product {
  slug: string;
  name: string;
  price: number;
  sizes: { label: string; stems: number; price: number }[];
  category: string;
  description: string;
  composition: string;
  care: string;
  delivery: string;
}

export const products: Product[] = [
  {
    slug: "eclat-de-rose",
    name: "Éclat de Rose",
    price: 89,
    sizes: [
      { label: "Classique", stems: 12, price: 89 },
      { label: "Majestueux", stems: 24, price: 149 },
      { label: "Royal", stems: 36, price: 199 },
    ],
    category: "Bouquets",
    description: "Un bouquet généreux de roses Naomi aux teintes profondes, assemblé avec du feuillage d'eucalyptus frais. Durée de vie : 10 à 14 jours.",
    composition: "Roses Naomi premium, eucalyptus cinerea, ruscus italien. Hauteur : 50-55 cm.",
    care: "Recoupez les tiges en biais. Changez l'eau tous les 2 jours. Évitez la lumière directe et les fruits à proximité.",
    delivery: "Same-day si commandé avant 14h. Créneau 2h au choix. Le livreur vous contacte 15 min avant.",
  },
  {
    slug: "jardin-sauvage",
    name: "Jardin Sauvage",
    price: 65,
    sizes: [{ label: "Unique", stems: 15, price: 65 }],
    category: "Bouquets",
    description: "Un mélange champêtre de fleurs de saison, capturant l'esprit des jardins français. Assemblé à la main chaque matin.",
    composition: "Fleurs de saison variées, herbes aromatiques, feuillages. Hauteur : 45-50 cm.",
    care: "Recoupez les tiges en biais. Changez l'eau tous les 2 jours.",
    delivery: "Same-day si commandé avant 14h.",
  },
  {
    slug: "purete-blanche",
    name: "Pureté Blanche",
    price: 79,
    sizes: [
      { label: "Classique", stems: 15, price: 79 },
      { label: "Grand", stems: 25, price: 129 },
    ],
    category: "Bouquets",
    description: "L'élégance absolue d'un bouquet tout en blanc — lys, roses et pivoines selon la saison.",
    composition: "Lys orientaux, roses Avalanche, pivoines (saison), gypsophile. Hauteur : 50 cm.",
    care: "Retirez les étamines des lys pour éviter les taches. Changez l'eau quotidiennement.",
    delivery: "Same-day si commandé avant 14h.",
  },
  {
    slug: "soleil-de-provence",
    name: "Soleil de Provence",
    price: 72,
    sizes: [{ label: "Unique", stems: 12, price: 72 }],
    category: "Bouquets",
    description: "Tournesols et lavande évoquant les champs du sud. Un rayon de soleil livré chez vous.",
    composition: "Tournesols, lavande séchée, craspedia, chardon bleu. Hauteur : 45 cm.",
    care: "Placez en pleine lumière. Changez l'eau tous les 2 jours.",
    delivery: "Same-day si commandé avant 14h.",
  },
  {
    slug: "orchidee-imperiale",
    name: "Orchidée Impériale",
    price: 95,
    sizes: [{ label: "Simple tige", stems: 1, price: 95 }, { label: "Double tige", stems: 2, price: 145 }],
    category: "Plantes",
    description: "Phalaenopsis blanc pur dans un cache-pot en céramique artisanale. Floraison 2-3 mois.",
    composition: "Orchidée Phalaenopsis, cache-pot céramique, mousse végétale.",
    care: "Arrosez une fois par semaine (un verre d'eau). Lumière indirecte. Ne jamais laisser d'eau stagnante.",
    delivery: "Same-day si commandé avant 14h.",
  },
  {
    slug: "composition-elegance",
    name: "Composition Élégance",
    price: 120,
    sizes: [{ label: "Unique", stems: 20, price: 120 }],
    category: "Compositions",
    description: "Arrangement dans une vasque en céramique — idéal pour un centre de table ou un cadeau d'entreprise.",
    composition: "Roses, lisianthus, eucalyptus, mousse florale, vasque céramique. Dimensions : 30×25 cm.",
    care: "Ajoutez de l'eau dans la mousse tous les 2 jours. Durée de vie : 10-12 jours.",
    delivery: "Same-day si commandé avant 14h.",
  },
  {
    slug: "abonnement-hebdo",
    name: "Abonnement Hebdomadaire",
    price: 45,
    sizes: [{ label: "Hebdomadaire", stems: 10, price: 45 }],
    category: "Abonnements",
    description: "Chaque semaine, un bouquet surprise de fleurs de saison livré à votre porte. -10% vs l'achat unitaire.",
    composition: "Fleurs de saison — composition surprise par notre fleuriste.",
    care: "Instructions incluses avec chaque livraison.",
    delivery: "Livraison chaque lundi entre 9h et 12h.",
  },
  {
    slug: "abonnement-mensuel",
    name: "Abonnement Mensuel",
    price: 55,
    sizes: [{ label: "Mensuel", stems: 15, price: 55 }],
    category: "Abonnements",
    description: "Un bouquet premium par mois pour illuminer votre intérieur. -10% vs l'achat unitaire.",
    composition: "Bouquet premium de saison — composition surprise.",
    care: "Instructions incluses avec chaque livraison.",
    delivery: "Livraison le 1er lundi du mois entre 9h et 12h.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

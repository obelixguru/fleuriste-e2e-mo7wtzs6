import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Fleuriste E2E Paris",
  description: "Découvrez l'histoire de Fleuriste E2E, artisan fleuriste parisien engagé pour des fleurs fraîches, locales et éco-responsables.",
};

export default function APropos() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: "var(--font-title)" }}>Notre histoire</h1>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--color-terre)" }}>
          <p>
            Fondé au cœur de Paris, <strong style={{ color: "var(--color-noir)" }}>Fleuriste E2E</strong> est né
            d&apos;une passion simple : rendre accessible l&apos;art floral haut de gamme, sans compromis sur la fraîcheur
            ni sur l&apos;engagement éco-responsable.
          </p>
          <p>
            Chaque bouquet est composé à la main par nos artisans fleuristes, avec des fleurs cueillies le matin même
            chez nos producteurs partenaires en France et en Hollande. Pas de stock dormant, pas de fleurs fatiguées —
            uniquement du frais, livré le jour même à Paris.
          </p>
          <p>
            Notre engagement va au-delà de la beauté florale. Nous privilégions les circuits courts, les emballages
            recyclables et les variétés de saison pour minimiser notre empreinte écologique.
          </p>

          <h2 className="text-2xl mt-12 mb-4" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>
            Nos valeurs
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-lg">🌿</span>
              <span><strong style={{ color: "var(--color-noir)" }}>Éco-responsabilité</strong> — Fleurs de saison, emballages recyclables, circuits courts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">✨</span>
              <span><strong style={{ color: "var(--color-noir)" }}>Excellence artisanale</strong> — Chaque bouquet est une création unique</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">🚚</span>
              <span><strong style={{ color: "var(--color-noir)" }}>Livraison same-day</strong> — Commandez avant 14h, recevez avant 18h</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/catalogue"
            className="inline-flex items-center px-8 py-4 text-sm uppercase tracking-widest transition-all"
            style={{ background: "var(--color-noir)", color: "var(--color-creme)", fontFamily: "var(--font-ui)" }}
          >
            Découvrir nos créations
          </Link>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout — Fleuriste E2E Paris",
  description: "Finalisez votre commande de fleurs. Livraison same-day à Paris, paiement sécurisé.",
};

export default function Checkout() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md" style={{ background: "rgba(245,240,235,0.85)" }}>
        <Link href="/" className="text-2xl" style={{ fontFamily: "var(--font-title)" }}>Fleuriste E2E</Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-4xl mb-4" style={{ fontFamily: "var(--font-title)" }}>Votre commande</h1>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-12 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-ui)", color: "var(--color-terre)" }}>
          <span style={{ color: "var(--color-noir)" }}>1. Panier</span>
          <span>—</span>
          <span>2. Livraison</span>
          <span>—</span>
          <span>3. Paiement</span>
        </div>

        {/* Empty cart state */}
        <div className="text-center py-16" style={{ color: "var(--color-terre)" }}>
          <p className="text-6xl mb-6">🌸</p>
          <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>
            Votre panier est vide
          </h2>
          <p className="mb-8">Découvrez nos créations florales et composez votre bouquet idéal.</p>
          <Link
            href="/catalogue"
            className="inline-flex items-center px-8 py-4 text-sm uppercase tracking-widest transition-all"
            style={{ background: "var(--color-noir)", color: "var(--color-creme)", fontFamily: "var(--font-ui)" }}
          >
            Voir le catalogue
          </Link>
        </div>
      </main>
    </>
  );
}

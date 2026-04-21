import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abonnements fleurs Paris — Fleuriste E2E",
  description: "Recevez des fleurs fraîches chaque semaine à Paris. 3 formules d'abonnement sans engagement, livraison incluse.",
};

const plans = [
  {
    name: "Essentiel",
    price: 39,
    frequency: "/ semaine",
    features: ["1 bouquet de saison", "Fleurs cueillies du jour", "Livraison incluse", "Sans engagement"],
    popular: false,
  },
  {
    name: "Signature",
    price: 69,
    frequency: "/ semaine",
    features: ["1 grand bouquet premium", "Carte message personnalisée", "Livraison prioritaire same-day", "Vase offert au 1er mois", "Sans engagement"],
    popular: true,
  },
  {
    name: "Prestige",
    price: 119,
    frequency: "/ semaine",
    features: ["Bouquet XL d'exception", "Vase artisanal offert", "Fleuriste dédié", "Choix des variétés", "Livraison créneau 1h", "Sans engagement"],
    popular: false,
  },
];

export default function Abonnements() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-title)" }}>
          Fleurs fraîches, chaque semaine
        </h1>
        <p style={{ color: "var(--color-terre)" }}>
          Sans engagement · Modifiable à tout moment · Livraison Paris intra-muros
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative rounded-xl p-8 flex flex-col"
            style={{
              background: plan.popular ? "var(--color-noir)" : "var(--color-blanc)",
              color: plan.popular ? "var(--color-creme)" : "var(--color-noir)",
              border: plan.popular ? "none" : "1px solid var(--color-dore)",
            }}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs uppercase tracking-widest rounded-full" style={{ background: "var(--color-dore)", color: "var(--color-noir)", fontFamily: "var(--font-ui)" }}>
                Populaire
              </span>
            )}

            <h2 className="text-2xl mb-2" style={{ fontFamily: "var(--font-title)" }}>{plan.name}</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl" style={{ fontFamily: "var(--font-title)" }}>{plan.price} €</span>
              <span className="text-sm" style={{ opacity: 0.7 }}>{plan.frequency}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 text-sm uppercase tracking-widest rounded-lg transition-all"
              style={{
                background: plan.popular ? "var(--color-creme)" : "var(--color-noir)",
                color: plan.popular ? "var(--color-noir)" : "var(--color-creme)",
                fontFamily: "var(--font-ui)",
              }}
            >
              {plan.popular ? "Commencer" : "Choisir"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm flex items-center justify-center gap-6" style={{ color: "var(--color-terre)" }}>
        <span>💳 Paiement sécurisé Stripe</span>
        <span>🔒 Sans engagement</span>
        <span>🚚 Livraison Paris incluse</span>
      </div>
    </div>
  );
}

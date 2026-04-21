import { Star, Truck, Leaf, Flower2, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const bestsellers = products.filter((p) => p.category === "Bouquets").slice(0, 4);

const occasions = [
  "Anniversaire", "Mariage", "Remerciement", "Deuil", "Naissance", "Entreprise", "Surprise",
];

const reviews = [
  { text: "Des fleurs magnifiques, ultra-fraîches. Livraison impeccable en 2h.", author: "Sophie M.", location: "Paris 7e" },
  { text: "Mon abonnement hebdo illumine mon bureau. Qualité constante depuis 6 mois.", author: "Laurent D.", location: "Paris 16e" },
  { text: "Bouquet de mariage exceptionnel. L'équipe a su capter exactement ce que je voulais.", author: "Camille R.", location: "Paris 3e" },
];

const faqs = [
  { q: "Quelles sont vos zones de livraison ?", a: "Nous livrons dans tout Paris intra-muros et en première couronne (92, 93, 94). Livraison same-day pour toute commande passée avant 14h." },
  { q: "Comment garantissez-vous la fraîcheur ?", a: "Nos fleurs sont cueillies le matin même chez nos producteurs partenaires en France et en Hollande. Chaque bouquet est assemblé à la commande." },
  { q: "Puis-je personnaliser mon bouquet ?", a: "Oui ! Contactez-nous pour un bouquet sur-mesure. Notre fleuriste vous guidera dans le choix des variétés et couleurs." },
  { q: "Proposez-vous des abonnements ?", a: "Oui, 3 formules : hebdomadaire, bi-mensuelle ou mensuelle. Avec 10% de réduction sur chaque livraison." },
  { q: "Quels sont vos moyens de paiement ?", a: "Carte bancaire, Apple Pay, Google Pay. Paiement 100% sécurisé via Stripe." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[85vh] px-6 text-center" style={{ background: "linear-gradient(180deg, var(--color-creme) 0%, #ede6dd 100%)" }}>
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl mb-6" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>
            L&apos;art floral,<br />livré chez vous
          </h1>
          <p className="text-lg md:text-xl mb-10" style={{ color: "var(--color-terre)" }}>
            Bouquets d&apos;exception cueillis du jour — Livraison same-day à Paris avant 18h
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/catalogue"
              className="inline-flex items-center px-8 py-4 text-sm uppercase tracking-widest transition-all"
              style={{ background: "var(--color-noir)", color: "var(--color-creme)", fontFamily: "var(--font-ui)" }}
            >
              Découvrir la collection
            </Link>
            <Link
              href="/abonnements"
              className="inline-flex items-center px-8 py-4 text-sm uppercase tracking-widest border transition-all"
              style={{ borderColor: "var(--color-terre)", color: "var(--color-terre)", fontFamily: "var(--font-ui)" }}
            >
              Nos abonnements
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="flex flex-wrap items-center justify-center gap-8 py-6 px-4 text-sm" style={{ background: "var(--color-noir)", color: "var(--color-creme)" }}>
        <span className="flex items-center gap-2"><Star size={16} className="text-yellow-400" /> 4.9/5 sur Google</span>
        <span className="flex items-center gap-2"><Truck size={16} /> Livraison same-day</span>
        <span className="flex items-center gap-2"><Leaf size={16} /> Fleurs éco-responsables</span>
        <span className="flex items-center gap-2"><Flower2 size={16} /> Cueillis du jour</span>
      </section>

      {/* Bestsellers */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ fontFamily: "var(--font-title)" }}>Nos créations signatures</h2>
        <p className="text-center mb-12" style={{ color: "var(--color-terre)" }}>Les bouquets préférés de nos clients parisiens</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((p) => (
            <Link key={p.slug} href={`/catalogue/${p.slug}`} className="group">
              <div className="aspect-[3/4] rounded-lg mb-3 overflow-hidden relative">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <h3 className="text-base font-normal" style={{ fontFamily: "var(--font-title)" }}>{p.name}</h3>
              <p className="text-sm" style={{ color: "var(--color-terre)" }}>{p.price} €</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 px-6" style={{ background: "var(--color-blanc)" }}>
        <h2 className="text-3xl md:text-4xl text-center mb-10" style={{ fontFamily: "var(--font-title)" }}>Pour chaque moment de vie</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {occasions.map((o) => (
            <Link
              key={o}
              href={`/catalogue?occasion=${encodeURIComponent(o)}`}
              className="px-5 py-2.5 rounded-full text-sm border transition-all hover:scale-105"
              style={{ borderColor: "var(--color-terre)", color: "var(--color-terre)", fontFamily: "var(--font-ui)" }}
            >
              {o}
            </Link>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: "var(--font-title)" }}>Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-lg" style={{ background: "var(--color-blanc)" }}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm italic mb-4" style={{ color: "var(--color-noir)" }}>&ldquo;{r.text}&rdquo;</p>
              <p className="text-xs" style={{ color: "var(--color-terre)" }}>{r.author}, {r.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: "var(--font-title)" }}>Questions fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b pb-4" style={{ borderColor: "var(--color-dore)" }}>
              <summary className="flex items-center justify-between cursor-pointer py-2 text-base font-normal list-none">
                {f.q}
                <ChevronDown size={18} className="transition-transform group-open:rotate-180" style={{ color: "var(--color-terre)" }} />
              </summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-terre)" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

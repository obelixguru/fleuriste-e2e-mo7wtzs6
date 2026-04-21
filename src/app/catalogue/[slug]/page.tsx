import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Fleuriste E2E Paris`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs mb-8" style={{ color: "var(--color-terre)" }}>
          <Link href="/" className="hover:opacity-60">Accueil</Link>
          {" > "}
          <Link href="/catalogue" className="hover:opacity-60">Catalogue</Link>
          {" > "}
          <span style={{ color: "var(--color-noir)" }}>{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-xl overflow-hidden relative" style={{ background: "var(--color-blanc)" }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Info */}
          <div>
            {product.badge && (
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest rounded-full mb-4" style={{ background: "var(--color-dore)", color: "var(--color-noir)", fontFamily: "var(--font-ui)" }}>
                {product.badge}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "var(--font-title)" }}>{product.name}</h1>
            <p className="text-2xl mb-6" style={{ fontFamily: "var(--font-title)", color: "var(--color-terre)" }}>{product.price} €</p>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-terre)" }}>{product.description}</p>

            <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--color-terre)" }}>
              <span className="px-3 py-1 rounded-full border" style={{ borderColor: "var(--color-dore)" }}>🚚 Livraison same-day</span>
              <span className="px-3 py-1 rounded-full border" style={{ borderColor: "var(--color-dore)" }}>🌿 Cueillis du jour</span>
            </div>

            {/* Size selector */}
            {product.sizes && (
              <div className="mb-8">
                <p className="text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-ui)" }}>Taille</p>
                <div className="flex gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s.label}
                      className="px-4 py-2 text-sm border rounded-lg transition-all hover:opacity-70"
                      style={{ borderColor: "var(--color-dore)" }}
                    >
                      {s.label} — {s.price} €
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              className="w-full py-4 text-sm uppercase tracking-widest transition-all rounded-lg"
              style={{ background: "var(--color-noir)", color: "var(--color-creme)", fontFamily: "var(--font-ui)" }}
            >
              Ajouter au panier
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-4">
              {[
                { title: "Composition", content: `${product.name} — fleurs fraîches de saison, feuillage décoratif, emballage kraft recyclable.` },
                { title: "Entretien", content: "Coupez les tiges en biais, changez l'eau tous les 2 jours. Ajoutez la sachette de conservateur fournie. Évitez la lumière directe." },
                { title: "Livraison", content: "Livraison same-day pour toute commande passée avant 14h. Paris intra-muros et première couronne. Créneau de 2h au choix." },
              ].map((item) => (
                <details key={item.title} className="border-b pb-3" style={{ borderColor: "var(--color-dore)" }}>
                  <summary className="cursor-pointer py-2 text-sm uppercase tracking-widest list-none" style={{ fontFamily: "var(--font-ui)" }}>
                    {item.title}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-terre)" }}>{item.content}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

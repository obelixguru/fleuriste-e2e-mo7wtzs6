import Link from "next/link";
import Image from "next/image";
import { products, getCategories } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue — Fleuriste E2E Paris",
  description: "Découvrez notre collection de bouquets, plantes et compositions florales premium. Livraison same-day à Paris.",
};

export default async function CataloguePage({ searchParams }: { searchParams: Promise<{ cat?: string; occasion?: string }> }) {
  const params = await searchParams;
  const categories = getCategories();
  const activeCat = params.cat || "Tous";
  const filtered = activeCat === "Tous" ? products : products.filter((p) => p.category.toLowerCase() === activeCat.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "var(--font-title)" }}>Notre collection</h1>
      <p className="text-center mb-10" style={{ color: "var(--color-terre)" }}>Des créations florales d&apos;exception, livrées à votre porte</p>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {["Tous", ...categories].map((c) => (
          <Link
            key={c}
            href={c === "Tous" ? "/catalogue" : `/catalogue?cat=${encodeURIComponent(c)}`}
            className="px-4 py-2 rounded-full text-sm border transition-all"
            style={{
              borderColor: activeCat === c ? "var(--color-noir)" : "var(--color-terre)",
              background: activeCat === c ? "var(--color-noir)" : "transparent",
              color: activeCat === c ? "var(--color-creme)" : "var(--color-terre)",
            }}
          >
            {c}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/catalogue/${p.slug}`} className="group">
            <div className="aspect-[3/4] rounded-lg mb-3 overflow-hidden relative">
              <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              {p.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 text-xs uppercase tracking-widest rounded-full" style={{ background: "var(--color-dore)", color: "var(--color-noir)" }}>
                  {p.badge}
                </span>
              )}
            </div>
            <h2 className="text-base" style={{ fontFamily: "var(--font-title)" }}>{p.name}</h2>
            <p className="text-sm" style={{ color: "var(--color-terre)" }}>À partir de {p.price} €</p>
            <span className="text-xs" style={{ color: "var(--color-dore)" }}>{p.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

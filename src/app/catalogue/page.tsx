import Link from "next/link";
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
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md" style={{ background: "rgba(245,240,235,0.85)" }}>
        <Link href="/" className="text-2xl" style={{ fontFamily: "var(--font-title)" }}>Fleuriste E2E</Link>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
          <Link href="/catalogue" className="hover:opacity-60 transition-opacity">Catalogue</Link>
          <Link href="/a-propos" className="hover:opacity-60 transition-opacity">À propos</Link>
        </div>
        <Link href="/panier" className="text-sm">🛒</Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
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
              <div className="aspect-[3/4] rounded-lg mb-3 overflow-hidden flex items-center justify-center text-5xl" style={{ background: "var(--color-dore)", opacity: 0.25 }}>
                🌸
              </div>
              <h2 className="text-base" style={{ fontFamily: "var(--font-title)" }}>{p.name}</h2>
              <p className="text-sm" style={{ color: "var(--color-terre)" }}>À partir de {p.price} €</p>
              <span className="text-xs" style={{ color: "var(--color-dore)" }}>{p.category}</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

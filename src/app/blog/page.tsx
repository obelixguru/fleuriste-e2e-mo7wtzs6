import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Fleuriste E2E Paris | Conseils floraux",
  description: "Conseils d'entretien, tendances florales et inspirations. Le blog de votre fleuriste parisien haut de gamme.",
};

const articles = [
  {
    slug: "entretien-bouquet-fleurs-coupees",
    title: "Comment faire durer vos fleurs coupées : 7 astuces de fleuriste",
    excerpt: "Découvrez nos conseils professionnels pour prolonger la vie de vos bouquets de 5 à 10 jours supplémentaires.",
    date: "18 avril 2026",
    category: "Conseils",
  },
  {
    slug: "fleurs-mariage-tendances-2026",
    title: "Tendances florales mariage 2026 : les compositions qui font rêver",
    excerpt: "Des arches végétales aux bouquets de mariée minimalistes, découvrez ce qui se fait cette saison.",
    date: "15 avril 2026",
    category: "Tendances",
  },
  {
    slug: "langage-des-fleurs-guide",
    title: "Le langage des fleurs : que dire avec chaque variété ?",
    excerpt: "Roses, pivoines, orchidées… Chaque fleur porte un message. Guide complet pour ne jamais se tromper.",
    date: "10 avril 2026",
    category: "Guide",
  },
];

export default function Blog() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md" style={{ background: "rgba(245,240,235,0.85)" }}>
        <Link href="/" className="text-2xl" style={{ fontFamily: "var(--font-title)" }}>Fleuriste E2E</Link>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase" style={{ fontFamily: "var(--font-ui)" }}>
          <Link href="/catalogue" className="hover:opacity-60 transition-opacity">Catalogue</Link>
          <Link href="/blog" className="hover:opacity-60 transition-opacity">Blog</Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-title)" }}>Le journal floral</h1>
        <p className="mb-12" style={{ color: "var(--color-terre)" }}>
          Conseils d&apos;entretien, tendances et inspirations par nos artisans fleuristes.
        </p>

        <div className="space-y-12">
          {articles.map((a) => (
            <article key={a.slug} className="group border-b pb-8" style={{ borderColor: "var(--color-dore)" }}>
              <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest" style={{ color: "var(--color-terre)", fontFamily: "var(--font-ui)" }}>
                <span>{a.category}</span>
                <span>·</span>
                <time>{a.date}</time>
              </div>
              <h2 className="text-2xl mb-3 group-hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-title)" }}>
                <Link href={`/blog/${a.slug}`}>{a.title}</Link>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-terre)" }}>{a.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

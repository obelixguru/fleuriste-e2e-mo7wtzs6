export type Testimonial = {
  name: string;
  role?: string;
  avatar_url?: string | null;
  quote: string;
  rating?: number;
  datePublished?: string;
};

function StarRow({ rating }: { rating: number }) {
  const stars = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${stars} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          className="w-3.5 h-3.5"
          style={{ fill: n <= stars ? "var(--color-dore)" : "#e7e5e4" }}
          aria-hidden
        >
          <path d="M10 1l2.76 5.59 6.17.9-4.46 4.35 1.05 6.14L10 15.09 4.48 18l1.05-6.14L1.07 7.49l6.17-.9L10 1z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, url }: { name: string; url: string | null | undefined }) {
  const initials = name
    .split(/\s+/)
    .map((s) => s[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
  if (url) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={url} alt={name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
      style={{ backgroundColor: "var(--color-noir)" }}
    >
      {initials}
    </div>
  );
}

export function TestimonialsSection({
  title = "Ils nous font confiance",
  description,
  items,
  productName,
}: {
  title?: string;
  description?: string;
  items: Testimonial[];
  productName: string;
}) {
  if (items.length === 0) return null;

  const rated = items.filter((t) => typeof t.rating === "number");
  const avg = rated.length > 0 ? rated.reduce((s, t) => s + (t.rating || 0), 0) / rated.length : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    ...(avg && rated.length > 0
      ? { aggregateRating: { "@type": "AggregateRating", ratingValue: avg.toFixed(1), reviewCount: rated.length } }
      : {}),
    review: items.map((t) => ({
      "@type": "Review",
      reviewRating: t.rating ? { "@type": "Rating", ratingValue: t.rating, bestRating: 5 } : undefined,
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };

  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-blanc)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--color-terre)" }}>
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-title)" }}>
            {title}
          </h2>
          {description && <p className="mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--color-terre)" }}>{description}</p>}
          {avg !== null && rated.length >= 3 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <StarRow rating={Math.round(avg)} />
              <span className="text-sm font-semibold">{avg.toFixed(1)}/5</span>
              <span className="text-xs" style={{ color: "var(--color-terre)" }}>· {rated.length} avis</span>
            </div>
          )}
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure key={`${t.name}-${i}`} className="rounded-xl border p-6 flex flex-col h-full shadow-sm" style={{ backgroundColor: "var(--color-creme)", borderColor: "var(--color-dore)" }}>
              <div aria-hidden className="text-4xl leading-none mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-dore)" }}>"</div>
              <blockquote className="leading-relaxed flex-1" style={{ color: "var(--color-terre)" }}>{t.quote}</blockquote>
              {typeof t.rating === "number" && <div className="mt-4"><StarRow rating={t.rating} /></div>}
              <figcaption className="flex items-center gap-3 mt-4 pt-4 border-t" style={{ borderColor: "var(--color-dore)" }}>
                <Avatar name={t.name} url={t.avatar_url} />
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{t.name}</div>
                  {t.role && <div className="text-xs truncate" style={{ color: "var(--color-terre)" }}>{t.role}</div>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export type FaqItem = {
  q: string;
  a: string;
  section?: string;
};

export function FaqSection({
  title = "Questions fréquentes",
  description,
  items,
  defaultOpen = 0,
}: {
  title?: string;
  description?: string;
  items: FaqItem[];
  defaultOpen?: number;
}) {
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a.replace(/<[^>]+>/g, "").slice(0, 1000),
      },
    })),
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--color-terre)" }}>
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-title)" }}>
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--color-terre)" }}>
            {description}
          </p>
        )}
      </header>
      <ul className="divide-y" style={{ borderColor: "var(--color-dore)", borderTopWidth: 1, borderBottomWidth: 1 }}>
        {items.map((it, i) => (
          <li key={`${it.q}-${i}`}>
            <details className="group py-5" {...(i < defaultOpen ? { open: true } : {})}>
              <summary className="list-none cursor-pointer flex items-start justify-between gap-4 text-left">
                <span className="font-semibold text-base leading-snug">
                  {it.q}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm group-open:rotate-45 transition-all"
                  style={{ borderColor: "var(--color-dore)" }}
                >
                  +
                </span>
              </summary>
              <div
                className="mt-3 pr-10 leading-relaxed"
                style={{ color: "var(--color-terre)" }}
                dangerouslySetInnerHTML={{ __html: it.a }}
              />
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

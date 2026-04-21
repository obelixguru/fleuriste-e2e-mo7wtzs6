import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Fleuriste E2E Paris",
  description: "Mentions légales et informations juridiques de Fleuriste E2E, fleuriste parisien.",
};

export default function MentionsLegales() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-20 text-sm leading-relaxed" style={{ color: "var(--color-terre)" }}>
        <h1 className="text-4xl mb-12" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Mentions légales</h1>

        <section className="mb-8">
          <h2 className="text-xl mb-3" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Éditeur du site</h2>
          <p>Fleuriste E2E<br />12 Rue de la Paix, 75002 Paris<br />SIRET : 000 000 000 00000<br />Email : contact@fleuriste-e2e.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-3" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Hébergement</h2>
          <p>Vercel Inc.<br />340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-3" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site (textes, images, vidéos) est protégé par le droit d&apos;auteur. Toute reproduction sans autorisation est interdite.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl mb-3" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Protection des données</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Contact : contact@fleuriste-e2e.fr</p>
        </section>
      </div>
    </>
  );
}

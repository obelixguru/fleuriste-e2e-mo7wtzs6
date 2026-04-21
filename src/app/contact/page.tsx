import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Fleuriste E2E Paris",
  description: "Contactez Fleuriste E2E pour vos commandes sur-mesure, événements ou questions. Paris intra-muros, livraison same-day.",
};

export default function Contact() {
  return (
    <>
      <div className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-title)" }}>Nous contacter</h1>
        <p className="mb-12" style={{ color: "var(--color-terre)" }}>
          Une question, une commande sur-mesure ou un événement ? Nous vous répondons sous 2h.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-ui)" }}>Nom</label>
            <input id="name" type="text" required className="w-full px-4 py-3 border rounded-lg text-sm" style={{ borderColor: "var(--color-dore)", background: "var(--color-blanc)" }} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-ui)" }}>Email</label>
            <input id="email" type="email" required className="w-full px-4 py-3 border rounded-lg text-sm" style={{ borderColor: "var(--color-dore)", background: "var(--color-blanc)" }} />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-ui)" }}>Sujet</label>
            <select id="subject" className="w-full px-4 py-3 border rounded-lg text-sm" style={{ borderColor: "var(--color-dore)", background: "var(--color-blanc)" }}>
              <option>Commande sur-mesure</option>
              <option>Événement / Mariage</option>
              <option>Abonnement entreprise</option>
              <option>Réclamation</option>
              <option>Autre</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-ui)" }}>Message</label>
            <textarea id="message" rows={5} required className="w-full px-4 py-3 border rounded-lg text-sm" style={{ borderColor: "var(--color-dore)", background: "var(--color-blanc)" }} />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 text-sm uppercase tracking-widest transition-all"
            style={{ background: "var(--color-noir)", color: "var(--color-creme)", fontFamily: "var(--font-ui)" }}
          >
            Envoyer le message
          </button>
        </form>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-sm" style={{ color: "var(--color-terre)" }}>
          <div>
            <h3 className="text-base mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Adresse</h3>
            <p>12 Rue de la Paix<br />75002 Paris, France</p>
          </div>
          <div>
            <h3 className="text-base mb-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}>Horaires</h3>
            <p>Lun — Sam : 8h - 20h<br />Dimanche : 9h - 14h</p>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: "var(--color-dore)", backgroundColor: "var(--color-noir)", color: "var(--color-creme)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: "var(--font-title)" }}>Fleuriste Paris</h3>
            <p className="text-sm leading-relaxed opacity-70">
              Fleurs d&apos;exception livrées à Paris le jour même. Cueillis du jour, composés à la main.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Boutique</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalogue" className="opacity-70 hover:opacity-100 transition-opacity">Catalogue</Link></li>
              <li><Link href="/abonnements" className="opacity-70 hover:opacity-100 transition-opacity">Abonnements</Link></li>
              <li><Link href="/catalogue?cat=Deuil" className="opacity-70 hover:opacity-100 transition-opacity">Deuil</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/a-propos" className="opacity-70 hover:opacity-100 transition-opacity">À propos</Link></li>
              <li><Link href="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link href="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Paris, France</li>
              <li>hello@fleuriste-paris.fr</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-50" style={{ borderColor: "rgba(245,240,235,0.2)" }}>
          <p>&copy; {new Date().getFullYear()} Fleuriste Paris. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#">Mentions légales</Link>
            <Link href="#">Politique de confidentialité</Link>
            <Link href="#">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

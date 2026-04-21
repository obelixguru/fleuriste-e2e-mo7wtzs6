"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "Catalogue", href: "/catalogue" },
  { label: "Abonnements", href: "/abonnements" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "rgba(245,240,235,0.9)", borderColor: "var(--color-dore)" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl tracking-tight"
          style={{ fontFamily: "var(--font-title)", color: "var(--color-noir)" }}
        >
          Fleuriste Paris
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--color-noir)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/catalogue"
            className="text-sm font-semibold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-noir)" }}
          >
            Commander
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t px-4 pb-4" style={{ borderColor: "var(--color-dore)" }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{ borderColor: "var(--color-dore)", color: "var(--color-noir)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/catalogue"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center text-sm font-semibold px-5 py-2.5 rounded-full text-white"
            style={{ backgroundColor: "var(--color-noir)" }}
          >
            Commander
          </Link>
        </nav>
      )}
    </header>
  );
}

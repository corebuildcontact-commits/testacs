"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/le-club", label: "Le Club" },
  { href: "/actualites", label: "Actualités" },
  { href: "/evenements", label: "Événements" },
  { href: "/inscriptions", label: "Inscriptions" },
  { href: "/partenaires", label: "Partenaires" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile lors du changement de route
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-acs-blue-dark/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              {/* Cercle jaune derrière */}
              <div className="absolute inset-0 rounded-full bg-acs-yellow group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-acs-blue-dark text-sm md:text-base">
                ACS
              </span>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-bold text-white text-sm md:text-base uppercase tracking-wide">
                Athlétique Club
              </p>
              <p className="text-acs-yellow text-xs md:text-sm font-semibold uppercase tracking-widest">
                Salonais
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 group ${
                    active ? "text-acs-yellow" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-acs-yellow transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/inscriptions"
              className="hidden md:inline-flex items-center px-5 py-2 bg-acs-yellow text-acs-blue-dark text-sm font-bold uppercase tracking-wider hover:bg-acs-yellow-dark transition-colors duration-200"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 100%,8px 100%)" }}
            >
              S&apos;inscrire
            </Link>

            {/* Burger mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-white hover:text-acs-yellow transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-acs-blue-dark/98 border-t border-white/10 px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wider border-b border-white/5 transition-colors ${
                  active
                    ? "text-acs-yellow border-l-2 border-l-acs-yellow pl-3"
                    : "text-white/80 hover:text-white hover:pl-5"
                }`}
              >
                {link.label}
                <ChevronDown size={14} className="-rotate-90 opacity-40" />
              </Link>
            );
          })}
          <Link
            href="/inscriptions"
            className="mt-4 flex justify-center items-center px-6 py-3 bg-acs-yellow text-acs-blue-dark font-bold text-sm uppercase tracking-widest"
          >
            S&apos;inscrire au club
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  { section: "Le Club", links: [
    { label: "À propos", href: "/le-club" },
    { label: "Mot du président", href: "/le-club#president" },
    { label: "Entraînements", href: "/le-club#entrainements" },
    { label: "Contacts", href: "/le-club#contacts" },
  ]},
  { section: "Compétitions", links: [
    { label: "Actualités", href: "/actualites" },
    { label: "Événements", href: "/evenements" },
    { label: "Calendrier", href: "/evenements#calendrier" },
    { label: "Résultats", href: "/evenements#resultats" },
  ]},
  { section: "Rejoindre l'ACS", links: [
    { label: "Inscriptions", href: "/inscriptions" },
    { label: "Tarifs", href: "/inscriptions#tarifs" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Stages", href: "/partenaires#stages" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-acs-blue-dark border-t border-white/10">
      {/* Bande jaune décorative */}
      <div className="h-1 bg-gradient-to-r from-acs-yellow via-acs-yellow-dark to-acs-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Identité du club */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-acs-yellow flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-acs-blue-dark text-sm">ACS</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm uppercase">Athlétique Club</p>
                <p className="text-acs-yellow text-xs font-semibold uppercase tracking-widest">Salonais</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Club d&apos;athlétisme de Salon-de-Provence, ouvert à tous les niveaux —
              des jeunes pitchouns aux athlètes de compétition.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 text-white/70 hover:bg-acs-yellow hover:text-acs-blue-dark transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Liens de navigation */}
          {footerLinks.map(({ section, links }) => (
            <div key={section}>
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 text-sm hover:text-acs-yellow transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-acs-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Infos pratiques */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MapPin, label: "Adresse", value: "Stade Michel-Hidalgo\nSalon-de-Provence, 13300" },
            { icon: Phone, label: "Téléphone", value: "+33 (0)4 90 XX XX XX" },
            { icon: Mail, label: "Email", value: "contact@acsalon.fr" },
            { icon: Clock, label: "Secrétariat", value: "Lun–Ven : 9h–12h\nMer : 14h–17h" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3">
              <Icon size={18} className="text-acs-yellow flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                <p className="text-white/80 text-sm whitespace-pre-line">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Athlétique Club Salonais — Tous droits réservés</p>
          <p>Réalisé avec ❤️ pour l&apos;athlétisme</p>
        </div>
      </div>
    </footer>
  );
}

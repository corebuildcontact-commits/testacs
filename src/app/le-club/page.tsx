import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Award, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Club",
  description: "Tout savoir sur l'Athlétique Club Salonais — histoire, lieux d'entraînement et contacts.",
};

const lieux = [
  {
    nom: "Stade Michel-Hidalgo",
    description: "Piste synthétique 6 couloirs, aires de sauts et lancers. Terrain principal du club.",
    adresse: "Avenue du Général de Gaulle, Salon-de-Provence",
    type: "Piste extérieure",
  },
  {
    nom: "Halle d'athlétisme",
    description: "Halle couverte pour l'entraînement hivernal — piste, barres et perches.",
    adresse: "Complexe sportif de Salon-de-Provence",
    type: "Halle indoor",
  },
  {
    nom: "Siège du Club",
    description: "Secrétariat, inscriptions et permanences administratives.",
    adresse: "Maison des associations, Salon-de-Provence",
    type: "Administratif",
  },
];

const valeurs = [
  { icon: Heart, title: "Passion", desc: "L'athlétisme comme mode de vie, accessible à tous." },
  { icon: Users, title: "Collectif", desc: "Un club familial où chacun trouve sa place." },
  { icon: Award, title: "Excellence", desc: "Former et accompagner des champions, du jeune au vétéran." },
];

export default function LeClubPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-hero-gradient track-lines overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">À propos</p>
          <h1 className="section-title text-white mb-4">Le Club</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Plus de 40 ans de passion, de travail et de podiums au service de l&apos;athlétisme provençal.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-acs-yellow" />
      </section>

      {/* Mot du président */}
      <section id="president" className="py-20 px-4 bg-acs-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Mot du président</p>
            <h2 className="section-title text-white mb-6 title-underline">Un club, une famille</h2>
            <blockquote className="text-white/70 text-lg leading-relaxed italic border-l-2 border-acs-yellow pl-6 mb-8">
              &ldquo;L&apos;Athlétique Club Salonais, c&apos;est avant tout une communauté de passionnés.
              Depuis plus de 40 ans, nous accueillons des enfants, des jeunes et des adultes avec une
              seule ambition : les aider à se dépasser, que ce soit en compétition ou pour le simple
              plaisir du sport.&rdquo;
            </blockquote>
            <p className="text-white font-semibold">— Le Président de l&apos;ACS</p>
          </div>

          {/* Valeurs */}
          <div className="grid grid-cols-1 gap-4">
            {valeurs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-acs-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-acs-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-white font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-white/50 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lieux d'entraînement */}
      <section id="entrainements" className="py-20 px-4 bg-acs-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Infrastructures</p>
          <h2 className="section-title text-white mb-10 title-underline">Lieux d&apos;entraînement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lieux.map((lieu) => (
              <div key={lieu.nom} className="card p-6">
                <span className="badge mb-4 inline-block">{lieu.type}</span>
                <h3 className="font-display text-white text-xl font-bold mb-3">{lieu.nom}</h3>
                <p className="text-white/50 text-sm mb-4">{lieu.description}</p>
                <div className="flex items-start gap-2 text-white/40 text-xs">
                  <MapPin size={12} className="text-acs-yellow mt-0.5 flex-shrink-0" />
                  <span>{lieu.adresse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4 bg-acs-dark">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Nous joindre</p>
          <h2 className="section-title text-white mb-10 title-underline">Contacts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Adresse", value: "Stade Michel-Hidalgo\n13300 Salon-de-Provence" },
              { icon: Phone, label: "Téléphone", value: "+33 (0)4 90 XX XX XX" },
              { icon: Mail, label: "Email", value: "contact@acsalon.fr" },
              { icon: Clock, label: "Secrétariat", value: "Lun–Ven : 9h–12h\nMercredi : 14h–17h" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card p-6 flex gap-4">
                <Icon size={20} className="text-acs-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-white text-sm whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

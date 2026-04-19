import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Partenaires & Stages",
  description: "Partenaires et stages de vacances de l'Athlétique Club Salonais.",
};

const partenaires = [
  { nom: "Mairie de Salon-de-Provence", type: "Institutionnel", description: "Partenaire historique et soutien municipal." },
  { nom: "Conseil Départemental des BDR", type: "Institutionnel", description: "Soutien du Département à travers les aides au sport." },
  { nom: "Décathlon Salon", type: "Équipementier", description: "Fournisseur officiel d'équipements sportifs." },
  { nom: "Boulangerie du Stade", type: "Local", description: "Partenaire fidèle depuis 10 ans, fournit les ravitaillements." },
  { nom: "Auto École Provence", type: "Commercial", description: "Sponsor des jeunes athlètes." },
  { nom: "Caisse d'Épargne PACA", type: "Financier", description: "Soutien financier aux projets du club." },
];

const stages = [
  {
    id: "stage-ete-2024",
    title: "Stage d'été Athlétisme",
    dates: "8 – 12 juillet 2024",
    ages: "8–17 ans",
    description: "5 jours intensifs pour progresser dans toutes les disciplines : sprint, haies, sauts, lancers. Encadrement par des entraîneurs diplômés FFA.",
    prix: "120 € / semaine",
    places: "30 places",
    status: "Complet",
  },
  {
    id: "stage-toussaint-2024",
    title: "Stage Toussaint Jeunes",
    dates: "28 oct – 1er nov 2024",
    ages: "8–14 ans",
    description: "Stage ludique pendant les vacances de la Toussaint. Découverte ou perfectionnement selon les niveaux.",
    prix: "80 € / semaine",
    places: "25 places",
    status: "Ouvert",
  },
  {
    id: "stage-hiver-2025",
    title: "Stage Hiver Competition",
    dates: "Février 2025",
    ages: "14 ans et +",
    description: "Préparation physique et technique spécifique pour les compétiteurs en vue de la saison en salle.",
    prix: "100 € / semaine",
    places: "20 places",
    status: "Bientôt",
  },
];

export default function PartenairesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-hero-gradient track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Nos soutiens</p>
          <h1 className="section-title text-white mb-4">Partenaires & Stages</h1>
          <p className="text-white/60 text-lg max-w-xl">
            L&apos;ACS vit grâce à ses partenaires. Découvrez aussi nos stages de vacances.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-acs-yellow" />
      </section>

      {/* Partenaires */}
      <section className="py-20 px-4 bg-acs-dark track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Ils nous soutiennent</p>
          <h2 className="section-title text-white mb-10 title-underline">Nos Partenaires</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partenaires.map((p) => (
              <div key={p.nom} className="card p-6">
                <span className="badge mb-3 inline-block">{p.type}</span>
                <h3 className="font-display text-white text-lg font-bold mb-2">{p.nom}</h3>
                <p className="text-white/50 text-sm">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Devenir partenaire CTA */}
          <div className="border border-acs-yellow/20 p-8 text-center bg-acs-blue/10">
            <h3 className="font-display text-white text-2xl font-bold mb-3">Devenez partenaire de l&apos;ACS</h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Soutenez le sport local et bénéficiez d&apos;une visibilité lors de nos événements.
              Contactez-nous pour un dossier de partenariat personnalisé.
            </p>
            <Link href="/le-club#contacts" className="btn-primary inline-flex">
              <Mail size={16} /> Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section id="stages" className="py-20 px-4 bg-acs-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Vacances sportives</p>
          <h2 className="section-title text-white mb-10 title-underline">Stages de Vacances</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((stage) => (
              <div key={stage.id} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="badge">{stage.ages}</span>
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 ${
                    stage.status === "Ouvert" ? "bg-green-500/20 text-green-400" :
                    stage.status === "Complet" ? "bg-red-500/20 text-red-400" :
                    "bg-white/10 text-white/50"
                  }`}>
                    {stage.status}
                  </span>
                </div>

                <h3 className="font-display text-white text-xl font-bold mb-2">{stage.title}</h3>

                <div className="flex items-center gap-2 text-acs-yellow text-xs mb-4">
                  <CalendarDays size={12} />
                  <span>{stage.dates}</span>
                </div>

                <p className="text-white/50 text-sm mb-5">{stage.description}</p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="font-display text-acs-yellow font-bold">{stage.prix}</p>
                    <p className="text-white/30 text-xs">{stage.places}</p>
                  </div>
                  {stage.status === "Ouvert" && (
                    <Link href="/inscriptions" className="flex items-center gap-1 text-acs-yellow text-xs font-bold uppercase hover:gap-2 transition-all">
                      S&apos;inscrire <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

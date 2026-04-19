import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Inscriptions",
  description: "Inscrivez-vous à l'Athlétique Club Salonais — tarifs, catégories et fiches d'inscription.",
};

interface Category {
  id: string;
  name: string;
  ages: string;
  description: string;
  price: string;
  included: string[];
  color: string;
}

const categories: Category[] = [
  {
    id: "pitchouns",
    name: "Pitchouns",
    ages: "5–7 ans",
    description: "Découverte ludique de l'athlétisme à travers des jeux et des parcours adaptés.",
    price: "80 €",
    included: ["2 séances/semaine", "Équipement prêté", "Compétitions discovery"],
    color: "from-yellow-400/20 to-yellow-600/10",
  },
  {
    id: "eveils-poussins",
    name: "Éveils / Poussins",
    ages: "8–11 ans",
    description: "Initiation aux disciplines athlétiques : course, sauts, lancers dans un cadre bienveillant.",
    price: "110 €",
    included: ["3 séances/semaine", "Compétitions régionales", "Suivi personnalisé"],
    color: "from-blue-400/20 to-blue-600/10",
  },
  {
    id: "competition",
    name: "Compétition",
    ages: "12 ans et +",
    description: "Programme d'entraînement structuré pour les athlètes souhaitant progresser en compétition.",
    price: "160 €",
    included: ["4–5 séances/semaine", "Compétitions nationales", "Bilan physique annuel", "Encadrement diplômé"],
    color: "from-acs-yellow/20 to-acs-blue/10",
  },
  {
    id: "loisir",
    name: "Loisir / Adulte",
    ages: "18 ans et +",
    description: "Pratiquez l'athlétisme pour le plaisir et le bien-être, à votre rythme.",
    price: "120 €",
    included: ["3 séances/semaine", "Accès aux installations", "Groupes conviviaux"],
    color: "from-green-400/20 to-green-600/10",
  },
  {
    id: "marche-nordique",
    name: "Marche Nordique",
    ages: "Adultes",
    description: "Pratique outdoor avec bâtons, conviviale et accessible à tous niveaux de forme.",
    price: "90 €",
    included: ["2 sorties/semaine", "Bâtons fournis 1ère séance", "Sorties en nature"],
    color: "from-purple-400/20 to-purple-600/10",
  },
];

export default function InscriptionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-hero-gradient track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Saison 2024–2025</p>
          <h1 className="section-title text-white mb-4">Inscriptions</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Rejoins l&apos;ACS Salon ! Choisis ta catégorie, télécharge la fiche et envoie-la au secrétariat.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-acs-yellow" />
      </section>

      {/* Étapes */}
      <section className="py-12 px-4 bg-acs-blue-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { step: "01", title: "Choisir ta catégorie", desc: "Sélectionne la formule adaptée à ton âge et tes objectifs" },
              { step: "02", title: "Télécharger la fiche", desc: "Imprime et remplis le dossier d'inscription" },
              { step: "03", title: "Déposer au secrétariat", desc: "Remets le dossier et le règlement au secrétariat du club" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <span className="font-display text-5xl font-bold text-acs-yellow/30 mb-2">{step}</span>
                <h3 className="font-display text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catégories & Tarifs */}
      <section id="tarifs" className="py-20 px-4 bg-acs-dark track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Tarifs 2024–2025</p>
          <h2 className="section-title text-white mb-10 title-underline">Nos Catégories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className={`card p-6 bg-gradient-to-br ${cat.color}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="badge mb-2 inline-block">{cat.ages}</span>
                    <h3 className="font-display text-white text-2xl font-bold">{cat.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-acs-yellow text-3xl font-bold">{cat.price}</p>
                    <p className="text-white/30 text-xs">/ saison</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm mb-5">{cat.description}</p>

                <ul className="space-y-2 mb-6">
                  {cat.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-acs-yellow flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-acs-yellow/40 text-acs-yellow text-xs font-bold uppercase tracking-wider hover:bg-acs-yellow hover:text-acs-blue-dark transition-all duration-200">
                  <Download size={14} />
                  Fiche d&apos;inscription
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact inscriptions */}
      <section className="py-16 px-4 bg-acs-blue-dark/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-white uppercase mb-4">Une question ?</h2>
          <p className="text-white/60 mb-8">
            Notre secrétariat est disponible pour t&apos;accompagner dans ton inscription.
          </p>
          <Link href="/le-club#contacts" className="btn-primary">
            Contacter le secrétariat <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

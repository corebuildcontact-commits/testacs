import type { Metadata } from "next";
import EventCard, { EventCardProps } from "@/components/EventCard";
import Countdown from "@/components/Countdown";

export const metadata: Metadata = {
  title: "Événements & Compétitions",
  description: "Agenda des événements et compétitions de l'Athlétique Club Salonais.",
};

const events: EventCardProps[] = [
  {
    slug: "meeting-acs-2024",
    title: "Meeting ACS Salon 2024",
    date: "14 septembre 2024",
    location: "Stade Michel-Hidalgo, Salon-de-Provence",
    category: "Meeting",
    description: "Le grand rendez-vous annuel du club ! Compétitions open toutes catégories, 25 épreuves au programme.",
    highlight: true,
  },
  {
    slug: "bel-air-salonais",
    title: "Cross du Bel Air Salonais",
    date: "12 octobre 2024",
    location: "Bois du Bel Air, Salon-de-Provence",
    category: "Cross",
    description: "La grande épreuve de cross-country sur les hauteurs de Salon. Circuit technique et ombragé.",
    highlight: false,
  },
  {
    slug: "loto-acs-2024",
    title: "LOTO ACS — Soirée Solidarité",
    date: "23 novembre 2024",
    location: "Salle des Fêtes, Salon-de-Provence",
    category: "Associatif",
    description: "La soirée loto annuelle du club, conviviale et solidaire. Lots exceptionnels garantis !",
    highlight: false,
  },
  {
    slug: "festival-lancers-2025",
    title: "Festival des Lancers ACS 2025",
    date: "Mai 2025 (date TBD)",
    location: "Stade Michel-Hidalgo, Salon-de-Provence",
    category: "Compétition",
    description: "La 13e édition du Festival des Lancers. Inscriptions ouvertes aux clubs de la région PACA.",
    highlight: false,
  },
];

const resultats = [
  { event: "Championnats Régionaux PACA", date: "15 juin 2024", bilan: "7 podiums · 3 titres régionaux" },
  { event: "Interclubs Régionaux", date: "20 mai 2024", bilan: "3ème au classement général" },
  { event: "Festival des Lancers 2024", date: "3 juin 2024", bilan: "+200 athlètes · 14 clubs" },
  { event: "Meeting Régional Hiver", date: "Mars 2024", bilan: "5 podiums · 2 records du club" },
];

export default function EvenementsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-hero-gradient track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Agenda</p>
          <h1 className="section-title text-white mb-4">Événements & Compétitions</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Retrouvez tous les rendez-vous sportifs et associatifs du club.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-acs-yellow" />
      </section>

      {/* Countdown prochain événement */}
      <section className="py-12 px-4 bg-acs-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <Countdown targetDate="2024-09-14T09:00:00" eventName="Meeting ACS Salon 2024" />
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section id="calendrier" className="py-20 px-4 bg-acs-dark track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">À venir</p>
          <h2 className="section-title text-white mb-10 title-underline">Prochains Événements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Résultats récents */}
      <section id="resultats" className="py-20 px-4 bg-acs-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Palmarès</p>
          <h2 className="section-title text-white mb-10 title-underline">Résultats Récents</h2>
          <div className="space-y-3">
            {resultats.map((r) => (
              <div key={r.event} className="card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-white font-semibold">{r.event}</h3>
                  <p className="text-white/40 text-xs mt-1">{r.date}</p>
                </div>
                <span className="badge">{r.bilan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

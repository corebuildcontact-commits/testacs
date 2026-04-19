import Link from "next/link";
import { ArrowRight, Users, Trophy, Calendar, ChevronDown } from "lucide-react";
import Countdown from "@/components/Countdown";
import NewsCard, { NewsCardProps } from "@/components/NewsCard";
import EventCard, { EventCardProps } from "@/components/EventCard";

/* ─── Données statiques (remplacer par API/CMS plus tard) ─── */

const latestNews: NewsCardProps[] = [
  {
    slug: "championnats-regionaux-2024",
    title: "Championnats Régionaux : Nos athlètes brillent à Marseille",
    excerpt:
      "L'ACS Salon a réalisé une belle performance lors des championnats régionaux PACA avec 7 podiums et 3 titres régionaux. Une journée historique pour le club !",
    date: "15 juin 2024",
    category: "Résultats",
    imageUrl:
      "https://images.unsplash.com/photo-1564053489984-317bbd824340?w=600&q=80",
    imageAlt: "Athlète en course sur piste",
  },
  {
    slug: "festival-lancers-2024",
    title: "Festival des Lancers ACS : Record de participation !",
    excerpt:
      "La 12e édition du Festival des Lancers de l'ACS a réuni plus de 200 athlètes venus de toute la région. Un événement incontournable du calendrier provençal.",
    date: "3 juin 2024",
    category: "Événement",
    imageUrl:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    imageAlt: "Lancer de poids en compétition",
  },
  {
    slug: "stage-ete-2024",
    title: "Stage d'été : Inscriptions ouvertes pour juillet !",
    excerpt:
      "Le traditionnel stage d'été de l'ACS accueillera les jeunes athlètes du 8 au 12 juillet. Toutes les disciplines au programme sous la direction de nos entraîneurs diplômés.",
    date: "28 mai 2024",
    category: "Inscription",
    imageUrl:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
    imageAlt: "Jeunes athlètes à l'entraînement",
  },
];

const upcomingEvents: EventCardProps[] = [
  {
    slug: "meeting-acs-2024",
    title: "Meeting ACS Salon 2024",
    date: "14 septembre 2024",
    location: "Stade Michel-Hidalgo, Salon-de-Provence",
    category: "Meeting",
    description:
      "Le grand rendez-vous annuel du club ! Compétitions open toutes catégories, 25 épreuves au programme. Venez supporter nos athlètes !",
    highlight: true,
  },
  {
    slug: "bel-air-salonais",
    title: "Cross du Bel Air Salonais",
    date: "12 octobre 2024",
    location: "Bois du Bel Air, Salon-de-Provence",
    category: "Cross",
    description:
      "La grande épreuve de cross-country sur les hauteurs de Salon. Circuit technique et ombragé, ouvert à toutes les catégories.",
    highlight: false,
  },
  {
    slug: "loto-acs-2024",
    title: "LOTO ACS — Soirée Solidarité",
    date: "23 novembre 2024",
    location: "Salle des Fêtes, Salon-de-Provence",
    category: "Associatif",
    description:
      "La soirée loto annuelle du club, conviviale et solidaire. Lots exceptionnels et bonne humeur garantis !",
    highlight: false,
  },
];

/* ─── Stats rapides ─── */
const stats = [
  { label: "Athlètes licenciés", value: "250+", icon: Users },
  { label: "Podiums en 2024", value: "38", icon: Trophy },
  { label: "Années d'existence", value: "40+", icon: Calendar },
];

/* ─── Page Accueil ─── */
export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden track-lines">
        {/* Fond dégradé */}
        <div className="absolute inset-0 bg-hero-gradient" />

        {/* Cercles décoratifs piste */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-acs-yellow/10 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-acs-yellow/5 pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full border border-acs-blue/20 pointer-events-none" />

        {/* Image de fond athlète (overlay semi-transparent) */}
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80')",
          }}
        />

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Label animé */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-acs-yellow/10 border border-acs-yellow/30 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-acs-yellow animate-pulse" />
              <span className="text-acs-yellow text-xs font-bold uppercase tracking-widest">
                Club d&apos;athlétisme — Salon-de-Provence
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold uppercase leading-none mb-6 animate-fade-up">
              <span className="text-white">Dépasse</span>{" "}
              <span className="text-gradient block sm:inline">tes limites.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl animate-fade-up">
              L&apos;Athlétique Club Salonais t&apos;accueille, du débutant à l&apos;élite.
              Piste, cross, lancers, sauts — rejoins une communauté passionnée depuis plus de 40 ans.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up">
              <Link
                href="/inscriptions"
                className="btn-primary text-sm"
              >
                S&apos;inscrire au club <ArrowRight size={16} />
              </Link>
              <Link href="/le-club" className="btn-secondary text-sm">
                Découvrir l&apos;ACS
              </Link>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon size={20} className="text-acs-yellow" />
                </div>
                <p className="font-display text-3xl font-bold text-white">{value}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flèche scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/30" />
        </div>

        {/* Bande jaune bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-acs-yellow to-transparent" />
      </section>

      {/* ══════════ COMPTE À REBOURS ══════════ */}
      <section className="bg-acs-blue-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <Countdown
              targetDate="2024-09-14T09:00:00"
              eventName="Meeting ACS Salon 2024"
            />
          </div>
        </div>
      </section>

      {/* ══════════ DERNIÈRES ACTUALITÉS ══════════ */}
      <section className="py-20 px-4 bg-acs-dark track-lines">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-2">
                Journal de l&apos;ACS
              </p>
              <h2 className="section-title text-white title-underline">
                Dernières Actualités
              </h2>
            </div>
            <Link
              href="/actualites"
              className="hidden sm:flex items-center gap-2 text-acs-yellow text-sm font-bold uppercase tracking-wider hover:gap-4 transition-all duration-200"
            >
              Voir tout <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.slug} {...news} />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/actualites" className="btn-secondary text-sm">
              Toutes les actualités <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ PROCHAINS ÉVÉNEMENTS ══════════ */}
      <section className="py-20 px-4 bg-acs-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-2">
                Agenda
              </p>
              <h2 className="section-title text-white title-underline">
                Prochains Événements
              </h2>
            </div>
            <Link
              href="/evenements"
              className="hidden sm:flex items-center gap-2 text-acs-yellow text-sm font-bold uppercase tracking-wider hover:gap-4 transition-all duration-200"
            >
              Voir tout <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA INSCRIPTIONS ══════════ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-acs-yellow/20 via-acs-blue to-acs-blue-dark" />
        <div className="absolute inset-0 track-lines opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-4">
            Saison 2024–2025
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase mb-6">
            Prêt(e) à rejoindre<br />
            <span className="text-gradient">l&apos;aventure ACS ?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Pitchouns, compétiteurs, loisirs ou marche nordique — il y a une place
            pour toi à l&apos;Athlétique Club Salonais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/inscriptions" className="btn-primary">
              Voir les inscriptions <ArrowRight size={16} />
            </Link>
            <Link href="/le-club#contacts" className="btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

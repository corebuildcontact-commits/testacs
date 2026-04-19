import type { Metadata } from "next";
import NewsCard, { NewsCardProps } from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Toutes les actualités, résultats et infos de l'Athlétique Club Salonais.",
};

const allNews: NewsCardProps[] = [
  {
    slug: "championnats-regionaux-2024",
    title: "Championnats Régionaux : Nos athlètes brillent à Marseille",
    excerpt: "L'ACS Salon a réalisé une belle performance lors des championnats régionaux PACA avec 7 podiums et 3 titres régionaux.",
    date: "15 juin 2024",
    category: "Résultats",
    imageUrl: "https://images.unsplash.com/photo-1564053489984-317bbd824340?w=600&q=80",
  },
  {
    slug: "festival-lancers-2024",
    title: "Festival des Lancers ACS : Record de participation !",
    excerpt: "La 12e édition du Festival des Lancers de l'ACS a réuni plus de 200 athlètes venus de toute la région.",
    date: "3 juin 2024",
    category: "Événement",
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
  },
  {
    slug: "stage-ete-2024",
    title: "Stage d'été : Inscriptions ouvertes pour juillet !",
    excerpt: "Le traditionnel stage d'été de l'ACS accueillera les jeunes athlètes du 8 au 12 juillet.",
    date: "28 mai 2024",
    category: "Inscription",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
  },
  {
    slug: "interclubs-2024",
    title: "Interclubs Régionaux : L'ACS 3ème au classement général",
    excerpt: "Superbe résultat pour notre club aux Interclubs régionaux. Nos équipes féminines et masculines ont rivalité avec les grands clubs provençaux.",
    date: "20 mai 2024",
    category: "Résultats",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    slug: "nouveaux-licencies-2024",
    title: "Saison 2024 : 40 nouveaux licenciés ont rejoint l'ACS !",
    excerpt: "La saison 2024 démarre sur les chapeaux de roue avec un record de nouvelles inscriptions, notamment chez les jeunes pitchouns.",
    date: "5 mai 2024",
    category: "Club",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
  },
  {
    slug: "partenariat-mairie-2024",
    title: "Nouveau partenariat avec la Mairie de Salon-de-Provence",
    excerpt: "L'ACS renforce son ancrage local avec la signature d'une convention pluriannuelle avec la Ville de Salon-de-Provence.",
    date: "18 avril 2024",
    category: "Institutionnel",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
  },
];

const categories = ["Tous", "Résultats", "Événement", "Inscription", "Club", "Institutionnel"];

export default function ActualitesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-hero-gradient track-lines">
        <div className="max-w-7xl mx-auto">
          <p className="text-acs-yellow text-xs font-bold uppercase tracking-widest mb-3">Journal de l&apos;ACS</p>
          <h1 className="section-title text-white mb-4">Actualités</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Résultats, événements, annonces — toute la vie du club en temps réel.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-acs-yellow" />
      </section>

      {/* Filtres catégories */}
      <section className="bg-acs-blue-dark border-b border-white/10 px-4 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                cat === "Tous"
                  ? "bg-acs-yellow text-acs-blue-dark"
                  : "bg-white/5 text-white/60 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grille articles */}
      <section className="py-16 px-4 bg-acs-dark track-lines">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((news) => (
              <NewsCard key={news.slug} {...news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

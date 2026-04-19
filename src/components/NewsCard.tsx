import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  imageAlt?: string;
}

export default function NewsCard({ slug, title, excerpt, date, category, imageUrl, imageAlt }: NewsCardProps) {
  return (
    <Link href={`/actualites/${slug}`} className="group block card">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-acs-dark/80 to-transparent" />
        {/* Badge catégorie */}
        <span className="absolute top-3 left-3 badge">{category}</span>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
          <Calendar size={12} />
          <time>{date}</time>
        </div>

        <h3 className="font-display text-white text-lg font-semibold leading-snug mb-2 group-hover:text-acs-yellow transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4">
          {excerpt}
        </p>

        <div className="flex items-center gap-1.5 text-acs-yellow text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-200">
          Lire la suite <ArrowRight size={14} />
        </div>
      </div>

      {/* Barre jaune hover bas */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-acs-yellow group-hover:w-full transition-all duration-500" />
    </Link>
  );
}

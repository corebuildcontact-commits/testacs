import Link from "next/link";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";

export interface EventCardProps {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  highlight?: boolean;
}

export default function EventCard({
  slug, title, date, location, category, description, highlight = false,
}: EventCardProps) {
  return (
    <Link
      href={`/evenements/${slug}`}
      className={`group block card p-6 ${
        highlight ? "border-acs-yellow/40 bg-acs-blue/20" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="badge">{category}</span>
        {highlight && (
          <span className="text-xs text-acs-yellow font-bold uppercase tracking-widest animate-pulse2">
            ★ Événement majeur
          </span>
        )}
      </div>

      <h3 className="font-display text-white text-xl font-bold uppercase mb-3 group-hover:text-acs-yellow transition-colors duration-200">
        {title}
      </h3>

      <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-2">
        {description}
      </p>

      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <CalendarDays size={13} className="text-acs-yellow flex-shrink-0" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <MapPin size={13} className="text-acs-yellow flex-shrink-0" />
          <span>{location}</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-acs-yellow text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-200">
        En savoir plus <ArrowRight size={14} />
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-acs-yellow group-hover:w-full transition-all duration-500" />
    </Link>
  );
}

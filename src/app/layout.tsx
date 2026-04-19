import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Athlétique Club Salonais — ACS",
    template: "%s | ACS Salon",
  },
  description:
    "Site officiel de l'Athlétique Club Salonais — Club d'athlétisme à Salon-de-Provence. Inscriptions, actualités, compétitions et événements.",
  keywords: ["athlétisme", "Salon-de-Provence", "ACS", "club sportif", "compétition", "sprint", "lancer"],
  openGraph: {
    title: "Athlétique Club Salonais",
    description: "Club d'athlétisme à Salon-de-Provence",
    siteName: "ACS Salon",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col bg-acs-dark font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

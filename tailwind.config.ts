import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette ACS Salon — bleu marine, jaune or, blanc
        acs: {
          blue: "#1B3A8C",       // bleu principal (logo)
          "blue-dark": "#0D2260", // bleu nuit
          "blue-light": "#2A52CC",// bleu clair hover
          yellow: "#F5C518",     // jaune or (logo)
          "yellow-dark": "#D4A800",
          white: "#FFFFFF",
          gray: "#F4F5F7",
          "gray-dark": "#6B7280",
          dark: "#0A0F1E",       // fond sombre hero
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "track-pattern": "url('/track-bg.svg')",
        "hero-gradient":
          "linear-gradient(135deg, #0D2260 0%, #1B3A8C 50%, #0A0F1E 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse2: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

export const BRAND_COLORS = {
  background: "#1c140f",
  surface: "#241711",
  overlay: "#2d1d14",
  accent: "#e0b15a",
  accentMuted: "#b77b42",
  accentSubtle: "#8b6a3e",
  text: "#f7e6cf",
  textMuted: "#d7c2a9",
  border: "#3a271b",
  borderLight: "#4d3828",
  glow: "#f2c77f",
  wine: "#6b2d3e",
  wineMuted: "#4a1f2c",
  ember: "#c4501a",
  emberMuted: "#8a3a14",
  cream: "#faf0e1",
} as const;

type BrandColorKey = keyof typeof BRAND_COLORS;

export type BrandColors = Record<BrandColorKey, string>;


const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: BRAND_COLORS.background,
          surface: BRAND_COLORS.surface,
          overlay: BRAND_COLORS.overlay,
          accent: BRAND_COLORS.accent,
          accentMuted: BRAND_COLORS.accentMuted,
          accentSubtle: BRAND_COLORS.accentSubtle,
          text: BRAND_COLORS.text,
          textMuted: BRAND_COLORS.textMuted,
          border: BRAND_COLORS.border,
          borderLight: BRAND_COLORS.borderLight,
          glow: BRAND_COLORS.glow,
          wine: BRAND_COLORS.wine,
          wineMuted: BRAND_COLORS.wineMuted,
          ember: BRAND_COLORS.ember,
          emberMuted: BRAND_COLORS.emberMuted,
          cream: BRAND_COLORS.cream,
        },
      },
      boxShadow: {
        deep: "0 40px 120px -60px rgba(0, 0, 0, 0.9)",
        medium: "0 30px 80px -50px rgba(0, 0, 0, 0.8)",
        soft: "0 20px 50px -40px rgba(0, 0, 0, 1)",
        card: "0 8px 32px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03)",
        glow: "0 0 40px -10px rgba(224, 177, 90, 0.15)",
        "glow-lg": "0 0 80px -20px rgba(224, 177, 90, 0.2)",
      },
      maxWidth: {
        content: "1200px",
        "content-wide": "1400px",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        display: "var(--font-cinzel)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-warm": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-warm": "pulse-warm 4s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

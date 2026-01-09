import type { Config } from "tailwindcss";

export const BRAND_COLORS = {
  background: "#1c140f",
  surface: "#241711",
  overlay: "#2d1d14",
  accent: "#e0b15a",
  accentMuted: "#b77b42",
  text: "#f7e6cf",
  textMuted: "#d7c2a9",
  border: "#3a271b",
  glow: "#f2c77f",
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
          text: BRAND_COLORS.text,
          textMuted: BRAND_COLORS.textMuted,
          border: BRAND_COLORS.border,
          glow: BRAND_COLORS.glow,
        },
      },
      boxShadow: {
        deep: "0 40px 120px -60px rgba(0, 0, 0, 0.9)",
        medium: "0 30px 80px -50px rgba(0, 0, 0, 0.8)",
        soft: "0 20px 50px -40px rgba(0, 0, 0, 1)",
      },
      maxWidth: {
        content: "1520px",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};

export default config;

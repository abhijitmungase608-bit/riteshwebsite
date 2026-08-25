import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF7F2",
          "cream-light": "#FFFDF9",
          "cream-dark": "#F2ECE1",
          dark: "#2C221B",
          charcoal: "#1A1410",
          brown: "#8B5A2B",
          terracotta: "#A0522D",
          gold: "#C5A059",
          "gold-light": "#DFC286",
          "gold-dark": "#9E743A",
          muted: "#7A6D63",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeInSlow: "fadeInSlow 0.9s ease-out forwards",
        scaleUp: "scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 4s ease-in-out infinite",
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(44, 34, 27, 0.08)",
        "luxury-lg": "0 20px 40px -15px rgba(44, 34, 27, 0.14)",
        "luxury-hover": "0 25px 50px -12px rgba(139, 90, 43, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070b16",
          900: "#0a0f1f",
          800: "#0f1730",
          700: "#16203f",
        },
        slatey: {
          100: "#e8edf6",
          200: "#cbd5e8",
          300: "#9fb0cc",
          400: "#6f82a3",
        },
        accent: {
          DEFAULT: "#38bdf8",
          500: "#38bdf8",
          600: "#0ea5e9",
          glow: "#7dd3fc",
        },
      },
      fontFamily: {
        viga: ["Viga", "system-ui", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        auroraShift: {
          "0%, 100%": { transform: "translate3d(-10%, -10%, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(10%, 10%, 0) rotate(8deg)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(-50%) translateX(0) rotate(0deg)" },
          "50%": { transform: "translateY(-48%) translateX(-1.5%) rotate(2deg)" },
        },
      },
      animation: {
        auroraShift: "auroraShift 18s ease-in-out infinite",
        shine: "shine 6s linear infinite",
        marquee: "marquee 32s linear infinite",
        drift: "drift 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe1fd",
          300: "#93cffc",
          400: "#60b3f9",
          500: "#3b94f5",
          600: "#1f77e6",
          700: "#175fcf",
          800: "#194fa8",
          900: "#1a4485",
          950: "#142b54",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b0b8c7",
          400: "#8591a7",
          500: "#67728a",
          600: "#525b71",
          700: "#434a5c",
          800: "#3a404e",
          900: "#333843",
          950: "#16181f",
        },
      },
      fontFamily: {
        sans: ["var(--font-kanit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(20, 43, 84, 0.18)",
        glow: "0 0 0 1px rgba(31,119,230,0.15), 0 20px 60px -20px rgba(31,119,230,0.35)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgb(226 232 240 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.4) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 7s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

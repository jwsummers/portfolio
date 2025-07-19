import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neon: {
          blue: "#01fff0",
          purple: "#a300fa",
          pink: "#f906c7",
          dark: "#16191e",
          accent: "#24263b",
        },
        // Optional: override Tailwind's built-in
        background: "#16191e",
        card: "#24263b",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        neon: "0 0 16px #01fff0, 0 0 8px #a300fa, 0 0 18px #f906c7",
        'neon-xs': "0 0 8px #01fff0",
      },
      // If you have custom animations, keep them
      keyframes: {
        'gradient-bg': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;

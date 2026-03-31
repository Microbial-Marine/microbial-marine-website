import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#2BBFBF",
          dark: "#1f9999",
          light: "#4dd4d4",
        },
        ocean: {
          DEFAULT: "#050d1a",
          mid: "#071422",
          light: "#0a1f33",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

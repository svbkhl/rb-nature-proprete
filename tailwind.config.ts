import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-deep": "var(--green-deep)",
        "green-mid": "var(--green-mid)",
        "green-light": "var(--green-light)",
        "green-pale": "var(--green-pale)",
        cream: "var(--cream)",
        "cream-dark": "var(--cream-dark)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "text-dark": "var(--text-dark)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

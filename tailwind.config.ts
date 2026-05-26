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
        mada: {
          black:  "var(--black)",
          white:  "var(--white)",
          cream:  "var(--cream)",
          accent: "var(--accent)",
          blue:   "var(--accent-blue)",
          yellow: "var(--accent-yellow)",
          muted:  "var(--muted)",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "Impact", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono:  ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

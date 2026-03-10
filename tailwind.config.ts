import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          border: "var(--color-border)",
          text: "var(--color-text)",
          "text-muted": "var(--color-text-muted)",
          accent: "var(--color-accent)",
          "accent-hover": "var(--color-accent-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      spacing: {
        page: "var(--space-page)",
        section: "var(--space-section)",
        block: "var(--space-block)",
        element: "var(--space-element)",
      },
    },
  },
  plugins: [],
} satisfies Config;

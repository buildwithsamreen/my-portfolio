import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e14",
        panel: "#10151f",
        border: "#1f2733",
        accent: "#5eead4",
        accent2: "#a78bfa",
        muted: "#8b95a7",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 0%, rgba(94,234,212,0.10), transparent 45%), radial-gradient(circle at 80% 10%, rgba(167,139,250,0.10), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;

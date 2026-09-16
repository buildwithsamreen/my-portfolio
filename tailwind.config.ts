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
        ink: "#0a0a0c",
        panel: "#161519",
        border: "#2f2d33",
        accent: "#D7FF3F",
        accent2: "#FF4D2E",
        muted: "#a6a4ac",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-display)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 0%, rgba(215,255,63,0.12), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,77,46,0.12), transparent 40%)",
        "loud-gradient": "linear-gradient(135deg, #D7FF3F 0%, #FF4D2E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

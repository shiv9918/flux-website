import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Sora", "Inter", "ui-sans-serif"]
      },
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
      },
      backgroundImage: {
        "grid": "radial-gradient(circle at 1px 1px, hsl(var(--grid-dot)) 1px, transparent 0)",
        "radial": "radial-gradient(60% 50% at 50% 0%, hsl(var(--radial)) 0%, transparent 60%)",
        "glow": "conic-gradient(from 180deg at 50% 50%, hsl(var(--accent)/0.2), transparent 30%)"
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--accent)/0.2), 0 8px 40px hsl(var(--accent)/0.12)"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config

import type { Config } from "tailwindcss";

/**
 * Tailwind is EXTENDED, never overriding core.
 * Colors resolve to the CSS custom properties declared in src/app/globals.css,
 * so tokens stay in sync with src/lib/tokens.ts.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        charcoal: "var(--color-charcoal)",
        mist: "var(--color-mist)",
        paper: "var(--color-paper)",
        glass: "var(--color-glass)",
        steel: "var(--color-steel)",
        brand: {
          DEFAULT: "var(--color-brand)", // deep architectural teal
          deep: "var(--color-brand)",
          bright: "var(--color-brand-bright)",
        },
        interactive: "var(--color-brand-bright)",
        bronze: "var(--color-bronze)",
        call: "var(--color-call)",
        border: "var(--color-border)",
        divider: "var(--color-divider)",
        // Keep framework defaults usable
        background: "var(--color-mist)",
        foreground: "var(--color-ink)",
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        sans: ['"Satoshi"', "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 8vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
      borderRadius: {
        input: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 20, 25, 0.04)",
        "card-hover": "0 8px 24px rgba(15, 20, 25, 0.08)",
        focus: "0 0 0 3px rgba(30, 110, 134, 0.3)",
      },
      backdropBlur: {
        glass: "12px",
        "glass-lg": "16px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        36: "9rem",
        44: "11rem",
        48: "12rem", // section-xl
      },
      maxWidth: {
        page: "1280px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(46, 125, 91, 0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(46, 125, 91, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(46, 125, 91, 0)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.4s cubic-bezier(0.22,1,0.36,1) 1s forwards",
        "fade-in": "fade-in 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

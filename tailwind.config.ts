import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A2A38", // Dark blue
          foreground: "#FFFFFF",
          100: "#E6EEF4",
          200: "#B3CFDF",
          300: "#80B0CA",
          400: "#4D91B5",
          500: "#1A72A0",
          600: "#155B80",
          700: "#104460",
          800: "#0A2D40",
          900: "#051620",
        },
        secondary: {
          DEFAULT: "#64D2FF", // Light blue
          foreground: "#1A2A38",
          100: "#E6F7FF",
          200: "#B3E7FF",
          300: "#80D7FF",
          400: "#4DC7FF",
          500: "#1AB8FF",
          600: "#1593CC",
          700: "#106E99",
          800: "#0A4966",
          900: "#052533",
        },
        accent: {
          DEFAULT: "#A5ECD7", // Mint green
          foreground: "#1A2A38",
          100: "#F0FBF7",
          200: "#D5F4E9",
          300: "#BAEDDB",
          400: "#9FE6CD",
          500: "#84DFBF",
          600: "#6AB299",
          700: "#4F8673",
          800: "#35594C",
          900: "#1A2C26",
        },
        destructive: {
          DEFAULT: "#FF4D4D",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A2A38",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A2A38",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #64D2FF 0%, #A5ECD7 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

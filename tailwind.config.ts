import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6F4FF",
          100: "#CCE9FF",
          200: "#99D3FF",
          300: "#66BDFF",
          400: "#33A7FF",
          500: "#158CFF",
          600: "#0F6ECC",
          700: "#0B5099",
          800: "#073266",
          900: "#031433",
        },
        accent: {
          50: "#FFE6FF",
          100: "#FFCCFF",
          200: "#FF99FF",
          300: "#FF66FF",
          400: "#FF33FF",
          500: "#FE2AFF",
          600: "#CC22CC",
          700: "#991999",
          800: "#661166",
          900: "#330833",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #158CFF 0%, #FE2AFF 100%)",
        "gradient-secondary": "linear-gradient(135deg, #FFE6FF 0%, #E6F4FF 100%)",
        "gradient-dark": "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(21, 140, 255, 0.3)",
        "glow-lg": "0 0 60px rgba(21, 140, 255, 0.4)",
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "premium-lg": "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

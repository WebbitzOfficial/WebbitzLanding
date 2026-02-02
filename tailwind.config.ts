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
        // Branding Orange (Primary) #E85002
        primary: {
          50: "#FEF3EE",
          100: "#FDE6DC",
          200: "#FBCDB9",
          300: "#F9B496",
          400: "#F47B33",
          500: "#E85002",
          600: "#C94402",
          700: "#9E3601",
          800: "#742901",
          900: "#4A1B01",
        },
        // Branding Gradient – beige/orange accent (#D9C3AB)
        accent: {
          50: "#FBF6F2",
          100: "#F5EDE5",
          200: "#EBDBCB",
          300: "#D9C3AB",
          400: "#C4A88A",
          500: "#B08E6A",
          600: "#8E7249",
          700: "#6B5538",
          800: "#483827",
          900: "#251C14",
        },
        // White #F9F9F9, Light Gray #A7A7A7, Gray #646464, Dark Gray #333333
        gray: {
          50: "#F9F9F9",
          100: "#F0F0F0",
          200: "#E5E5E5",
          300: "#A7A7A7",
          400: "#646464",
          500: "#646464",
          600: "#333333",
          700: "#333333",
          800: "#1A1A1A",
          900: "#000000",
        },
      },
      backgroundImage: {
        // Branding Gradient: #D9C3AB, #F16001, #C10801, #000000
        "gradient-primary":
          "linear-gradient(135deg, #F16001 0%, #E85002 50%, #C10801 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #D9C3AB 0%, #F5EDE5 50%, #FEF3EE 100%)",
        "gradient-dark": "linear-gradient(135deg, #333333 0%, #000000 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(232, 80, 2, 0.3)",
        "glow-lg": "0 0 60px rgba(232, 80, 2, 0.4)",
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "premium-lg": "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-33.333%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

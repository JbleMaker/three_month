import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        btncolor: {
          100: "#710ff4",
          200: "#7e25f5",
          300: "#8b3bf6",
          400: "#9850f7",
          500: "#a566f8",
          600: "#b27cf9",
          700: "#be92fa",
          800: "#cba8fb",
          900: "#d8befc",
        },
        boxcolor: {
          100: "#191a1f",
          200: "#2e2f33",
          300: "#434448",
          400: "#58585c",
          500: "#6d6d70",
          600: "#828285",
          700: "#969799",
          800: "#c0c1c2",
          900: "#d5d5d6",
        },
      },
    },
  },
  plugins: [],
};
export default config;

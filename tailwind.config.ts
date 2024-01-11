import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      skew: {
        "15": "15deg",
        "20": "20deg",
      },
      colors: {
        yellow: "#F9B800", 
      },
    },
  },
  plugins: [],
};
export default config;

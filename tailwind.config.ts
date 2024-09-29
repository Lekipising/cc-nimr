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
        nim: {
          300: "#276DF7",
          400: "#005DCC",
          500: "#1F5AF4",
          600: "#0148FF",
          700: "#006AE7",
        },
      },
    },
  },
  plugins: [],
};
export default config;

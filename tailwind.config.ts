import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

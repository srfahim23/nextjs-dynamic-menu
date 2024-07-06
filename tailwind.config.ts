import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#ee6055",
      secondary: "#ffd7df",
      white: "#fff",
      darkGray: "#3e4b5b",
    },
    extend: {
      backgroundImage: {
        headerBg: "linear-gradient(to right, #ee6055 30%, #ffd7df 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

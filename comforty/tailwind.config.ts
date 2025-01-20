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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "var(--dark)",
        darkGray: "var(--grayDark)",
        mediumGray: "var(--grayMedium)",
        lightGray: "var(--grayLight)",
        primary: "var(--primary)",
        primaryHover: "var(--primaryHover)",
        softRed: "var(--softRed)",
        softOrange: "var(--softOrange)",
        softGreen: "var(--softGreen)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-sintony)'],
        body: ['var(--font-poppins)'],
      }
    },

    container: {
      center: true,
    },

    // generated with realtimecolors.com!
    colors: {
      'paragraph': '#0e0e0b',
      'background': '#fafaf9',
      'primary': '#798268',
      'secondary': '#b4c4b9',
      'accent': '#95aba5',
    },
  },
  plugins: [],
};
export default config;

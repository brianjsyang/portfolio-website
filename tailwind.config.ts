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
      },
      borderRadius: {
        '20' : '20px'
      },
      minHeight: {
        'card' : '15rem',
        'card-lg' : '30rem'
      },
      boxShadow: {
        'card': '2px 2px 15px 0 rgba(210, 210, 210, .4)',
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
      'off-white': '#f1f1f1',
    },
  },
  plugins: [],
};
export default config;

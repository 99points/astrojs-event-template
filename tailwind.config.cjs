/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        context: "var(--context-color)",
        customYellow: '#f6f057',
        customYellowHover: '#fff61b',
        customGray: '#2d2e34',
        customGrayHover: '#3d3e45',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

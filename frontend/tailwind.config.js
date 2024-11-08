/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: { 
        "loop-scroll": {
          from: { trasnform: "translateX(0)"},
          to: { trasnform: "translateX(-100%)"},
        }
      }
    },
  },
  plugins: [],
}


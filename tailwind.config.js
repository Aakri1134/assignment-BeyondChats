/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "rgba(var(--primary-color))",
        secondary : "rgba(var(--secondary-color))",
        background : "rgba(var(--background-color))",
        backgroundSecondary : "rgba(var(--background-secondary-color))",
        button : "rgba(var(--button-color))",
        notes : "rgba(var(--notes-message))",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0b0f14",
        panel: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.12)",
        accent: "#3ea8ff",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        global: "112px",
      },
      colors: {
        primary: "#F5F4ED",
        secondary: "#9E927A",
        accent: "#F0582B",
        altprimary: "#EAB855",
        textcolor: "#312D1B",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

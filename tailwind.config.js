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
        primary: "#00326C",
        secondary: "#84B9E0",
        accent: "#EC2D47",
        background: "#F4F8FB",
      },
      fontFamily: {
        'mavenpro': ['Maven Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

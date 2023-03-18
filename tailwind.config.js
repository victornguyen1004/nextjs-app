/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        global: "112px",
      },
      colors: {
        primary: "#f4f8fb",
        secondary: "#00326c",
        accent: "#ec2d47",
        altsecondary: "#84b9e0",
        textcolor: "#312D1B",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

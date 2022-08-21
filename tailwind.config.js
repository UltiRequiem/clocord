/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#202225",
        gray: "#202225",
        "gray-light": "#292B2F",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#eb6e4b",
        "light-gray": "#f2f2f2",
      },
      backgroundImage: {
        winter: "url('/src/assets/img/winter6.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../assets/bg.png')",
      },
    },
  },
  plugins: [],
};

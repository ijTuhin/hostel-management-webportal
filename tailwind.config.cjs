/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        handlee: ["Handlee", "cursive"],
        marck: ["Marck Script", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
/* font-family: 'Caveat', cursive;
font-family: 'Handlee', cursive;
font-family: 'Marck Script', cursive;
font-family: 'Poppins', sans-serif; */

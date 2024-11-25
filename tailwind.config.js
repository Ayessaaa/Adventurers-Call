/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown1: "#735b42",
        brown2: "#bfb8b4",
        brown3: "#d6cec7",
        black1: "#353540",
        blue1: "#769fa6",
        blue2: "#668da9",
        blue3: "#5c699f",
        gray1: "#918d8d",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        animation: {
          appear: "appear 0.5s ease-in-out",
        },
      },
    },
  },
  plugins: [],
};

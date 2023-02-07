/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009cde",
        "primary-dark": "#006590",
        secondary: "#4fcd32",
        tertiary: "#DE002D",
        gray: "#5e5c5c",
      },
      fontFamily: {
        sans: ["Filson Pro Bold", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "pt-0",
    "pt-8",
    "pt-16",
    "pt-64",
    "pt-32",
    "pb-0",
    "pb-8",
    "pb-16",
    "pb-64",
    "pb-32",
  ],
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#009cde",
				"primary-dark": "#006590",
				secondary: "rgb(0, 102, 17)",
				tertiary: "#DE002D",
			},
			fontFamily: {
				sans: ["Raleway", ...defaultTheme.fontFamily.sans],
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
};

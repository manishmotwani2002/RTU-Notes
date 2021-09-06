const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				banner: "url('/src/pages/Welcome/bannerimg.jpg')",
				signUpImage: "url('/src/assets/signup.jpg')",
			}),
			padding: {
				'1/2': '50.00000%',
				'2/3': '66.66667%',
			},
			colors: {
				teal: colors.teal,
				orange: colors.orange,
				blueGray: colors.blueGray,
				cyan: colors.cyan,
				secondary: '#edca82',
			},
			fontFamily: {
				heading: ['Proza Libre', 'sans-serif'],
				logo: ['Pacifico', 'cursive'],
			},
			zIndex: {
				'-10': '-10',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

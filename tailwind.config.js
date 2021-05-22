const defaultTheme = require('tailwindcss/defaultTheme'); // import the defaul theme

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			// Insert the custom font families at the beginning of the array
			fontFamily: {
				sans: ['Monteserrat', ...defaultTheme.fontFamily.sans],
			},
		},
		fontSize: {
			xs: '.65rem',
			sm: '.875rem',
			'5xl': '3rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
	},
	variants: {
		margin: ['responsive', 'hover'],
		extend: {
			backgroundColor: ['active'],
		},
	},

	plugins: [],
};

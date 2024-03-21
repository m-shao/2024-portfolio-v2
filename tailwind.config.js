/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

const rotateY = plugin(function ({ addUtilities }) {
	addUtilities({
		'.rotate-y-45': {
			transform: 'rotateY(45deg)',
		},
		'.rotate-y-90': {
			transform: 'rotateY(90deg)',
		},
		'.rotate-y-180': {
			transform: 'rotateY(180deg)',
		},
	});
});

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				englisch: ['var(--font-englisch)'],
			},
			colors: {
				text: '#171411',
				primary: '#998877',
				background: {
					100: '#F6F5F3',
					200: '#E4E0DA',
				},
				accent: {
					100: '#BFC0AA',
					200: '#ACB298',
				},
			},
			screens: [''],
		},
	},
	safelist: [
		// 'bg-primary',
		// 'bg-accent-100',
		// 'bg-accent-200',
		// 'bg-background-100',
		// 'bg-background-200',
	],
	plugins: [rotateY],
};

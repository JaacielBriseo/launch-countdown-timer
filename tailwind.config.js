/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-grayish': 'hsl(237, 18%, 59%)',
				'primary-soft-red': 'hsl(345, 95%, 68%)',
				'neutral-white': 'hsl(0, 0%, 100%)',
				'neutral-desatured-blue': 'hsl(236, 21%, 26%)',
				'neutral-dark-blue': 'hsl(235, 16%, 14%)',
				'neutral-very-dark': 'hsl(234, 17%, 12%)',
			},
			fontFamily: {
				'red-hat': 'Red Hat Text, sans-serif',
			},
			animation: {
				flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			},
			keyframes: {
				flip: {
					from: { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ' },
					to: { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ' },
				},
			},
      backgroundImage:{
        hills: 'url(images/pattern-hills.svg)',
        stars:'url(images/bg-stars.svg)'
      }
		},
	},
	plugins: [],
};

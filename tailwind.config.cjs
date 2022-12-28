/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				geometric: "url('/img/bg.svg')"
			},
			colors: {
				primary: '#6F00FD',
				secondary: '#0066FF'
			},
			fontFamily: {
				mono: ['Space Mono', 'MONOSPACE'],
				logo: ['Staatliches', 'SANS-SERIF'],
			}
		},
	},
	plugins: [],
}

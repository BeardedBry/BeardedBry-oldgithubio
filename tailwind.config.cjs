/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#6F00FD'
			},
			fontFamily: {
				mono: ['Space Mono', 'MONOSPACE'],
				logo: ['Staatliches', 'SANS-SERIF'],
			}
		},
	},
	plugins: [],
}

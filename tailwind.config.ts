import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
	screens: {
	  'sm': '420px',
	  'md': '768px',
	  'md-lg': '900px',
	  'lg': '1024px',
	  'xl': '1280px',
	  '2xl': '1536px',
	},
  	container: {
  		center: true
  	},
  	extend: {
		fontSize: {
			h1: ['clamp(42px, 5vw, 48px)', {
				lineHeight: 'clamp(42px, 5vw, 64px)',
				letterSpacing: '0',
				fontWeight: '600',
			}]
		},
  		colors: {
			foreground: 'rgba(43, 43, 43, 1)',
  			primary: 'rgba(255, 255, 255, 1)',
			primaryGreen: 'rgba(170, 255, 0, 1)',
  		},
  		keyframes: {
  			slide: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			}
  		},
  		animation: {
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

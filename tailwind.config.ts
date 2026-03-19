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
			secondary: 'rgb(241, 242, 249)',
			primaryGreen: 'rgba(170, 255, 0, 1)',
  		},
  		keyframes: {
  			slide: {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-50%)' }
  			},
			sparklePulse: {
				'0%': { transform: 'scale(1)' },
				'100%': { transform: 'scale(2)' }
			},
			cloudXMotion: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-10%)' }
			},
			cloudYMotion: {
				'0%': { transform: 'translateY(0)' },
				'100%': { transform: 'translateY(-15%)' }
			},
			bowlOneMotion: {
				'0%': { transform: 'translateY(10px)' },
				'30%': { transform: 'translateY(-15px)' },
				'35%': { transform: 'translateY(-16px)' },
				'60%': { transform: 'translateY(-25px)' },
				'80%': { transform: 'translateY(8px)' },
				'100%': { transform: 'translateY(10px)' },
			},
			bowl_2_YMotion: {
				'0%': { transform: 'translateY(0)' },
				'100%': { transform: 'translateY(-15%)' }
			}
  		},
		animation: {
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

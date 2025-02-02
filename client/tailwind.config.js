import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'ping-scale': {
          '0%': { opacity: 0 },
          '50%': { opacity: .4, transform: 'scale(1.7)' },
        },
        'move-down': {
          'from': { transform: 'translateY(-100px)' },
          'to': { transform: 'translateY(0px)' }
        }

      },
      animation: {
        'ping-effect': 'ping-scale 2s ease-in-out infinite',
        'move-down': 'move-down .4s ease-in 1'

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


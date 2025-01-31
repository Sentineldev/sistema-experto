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
        }

      },
      animation: {
        'ping-effect': 'ping-scale 2s ease-in-out infinite'

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


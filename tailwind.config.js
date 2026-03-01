/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marvel: {
          red: '#E23636', // Iconic Marvel Red
          dark: '#0F0F0F',
          gold: '#FDB813', // Iron Man Gold
          silver: '#C0C0C0',
          blue: '#00D2FF', // Arc Reactor Blue
        }
      },
      fontFamily: {
        marvel: ['Inter', 'system-ui', 'sans-serif'],
        hero: ['Bebas Neue', 'Impact', 'sans-serif'],
        hud: ['Orbitron', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'hud-scan': 'scan 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #E23636, 0 0 10px #E23636' },
          '100%': { boxShadow: '0 0 20px #E23636, 0 0 30px #E23636' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}

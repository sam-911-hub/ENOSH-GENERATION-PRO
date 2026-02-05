/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2D3748', // Dark Slate Grey
        'brand-secondary': '#1A202C', // Very Dark Blue/Almost Black
        'brand-accent': '#FBBF24', // Amber/Gold
        'brand-accent-dark': '#D97706', // Darker Amber/Gold for hover
        'brand-text-light': '#F7FAFC', // Very Light Grey/Off-White
        'brand-text-medium': '#A0AEC0', // Medium Grey
        'brand-text-dark': '#2D3748', // Dark Slate Grey (for light backgrounds)
      },
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f3',
          100: '#ffe8e1',
          200: '#ffd5c8',
          300: '#ffb89e',
          400: '#ff8f64',
          500: '#ff6b35',
          600: '#f94f1e',
          700: '#e03e15',
          800: '#b83515',
          900: '#962f18',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'zoom-in': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'zoom-in-mobile': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 20s ease-in-out infinite',
        'zoom-in-mobile': 'zoom-in-mobile 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Figtree Variable"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque Variable"', '"Figtree Variable"', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#FAF7FF',
        lavender: { DEFAULT: '#ECE3FF', deep: '#D6C5FF' },
        brand: {
          50: '#F4EFFF',
          100: '#E9DFFF',
          300: '#B9A0FF',
          400: '#8F68F7',
          500: '#6C3FEF',
          600: '#5B2EE6',
          700: '#4620BC',
          900: '#241047',
        },
        ink: { DEFAULT: '#1A1033', soft: '#554A70' },
        sun: '#FFCF4D',
      },
    },
  },
  plugins: [],
}

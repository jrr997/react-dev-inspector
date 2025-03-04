import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config


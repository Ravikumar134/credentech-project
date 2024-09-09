import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
          1000: '#223E99',
        },
        softblue: '#8292C7',
        bluegradient: '#223899',
        bluegradientdark: '#0E0064',
        grey: '#A7A7A7',
        blueone: '#223E99',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans'], // 'Prompt' should match the font name and 'sans' is a fallback
      },
      maxWidth: {
        'screen-1440': '1440px',
      },
      width: {
        678: '678px',
        137: '137px',
        305: '305px',
        1440: '1440px',
      },
    },
  },
  plugins: [],
  darkMode:'class',
} satisfies Config;

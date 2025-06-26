/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'Fira Code',
          'JetBrains Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c8ff',
          300: '#66acff',
          400: '#3391ff',
          500: '#0A84FF',
          600: '#0068cc',
          700: '#004c99',
          800: '#003366',
          900: '#001933',
        },
        secondary: {
          50: '#eeedfd',
          100: '#dedcfb',
          200: '#bdb8f7',
          300: '#9c95f3',
          400: '#7b71ef',
          500: '#5E5CE6',
          600: '#4b4ab8',
          700: '#38378a',
          800: '#26255c',
          900: '#13122e',
        },
        accent: {
          50: '#e6f7fa',
          100: '#cceff5',
          200: '#99dfeb',
          300: '#66cfe0',
          400: '#33bfd6',
          500: '#30B0C7',
          600: '#248d9f',
          700: '#1b6a77',
          800: '#124650',
          900: '#092328',
        },
      },
      boxShadow: {
        skill: '0 0 15px rgba(59, 130, 246, 0.5)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
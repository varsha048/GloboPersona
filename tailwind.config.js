/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c0d2ff',
          300: '#91adff',
          400: '#5c7dff',
          500: '#3355ff',
          600: '#1a33f5',
          700: '#1428e0',
          800: '#1722b5',
          900: '#19228f',
        },
        surface: {
          0:   '#ffffff',
          50:  '#f8f9fc',
          100: '#f0f2f8',
          200: '#e4e7f0',
          300: '#d1d6e5',
          400: '#9ba3c0',
          500: '#6b748f',
          600: '#4a5270',
          700: '#323857',
          800: '#1e2340',
          900: '#0f1229',
        }
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(15,18,41,0.06), 0 1px 2px 0 rgba(15,18,41,0.04)',
        'card': '0 4px 20px 0 rgba(15,18,41,0.08), 0 1px 4px 0 rgba(15,18,41,0.04)',
        'glow': '0 0 0 3px rgba(51,85,255,0.15)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}

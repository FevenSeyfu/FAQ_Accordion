/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'white': 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
    },
  },
  plugins: [],
}


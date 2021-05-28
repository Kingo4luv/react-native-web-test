  // tailwind.config.js
  module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'home-dark': '#060A0D',
          'home-light': '#1A1F22',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
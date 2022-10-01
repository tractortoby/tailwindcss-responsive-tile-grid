/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      xs: '540px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};

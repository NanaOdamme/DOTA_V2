// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify files for Tailwind to purge unused styles
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}, // Extend Tailwind's default theme here
  },
  variants: {
    extend: {}, // Extend Tailwind's default variants here
  },
  plugins: [], // Add Tailwind plugins here
}
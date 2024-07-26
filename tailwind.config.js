// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' if you prefer to use media queries
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
  theme: {
    extend: {},
  },

  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}

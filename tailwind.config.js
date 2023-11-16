/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}', './src/**/**/*.{js,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        default: ['Titillium Web', 'sans-serif']
      },
      colors: {
        default: '#006CEA',
        'default-light': '#EEF6FF',
        success: '#50CD89',
        inputBorder: '#E1E3EA'
      }
    }
  },
  variants: {},
}
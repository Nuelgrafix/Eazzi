/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        tekInter: ['Inter', 'sans-serif'],
      },
      colors:{
        mainBlue: '#1843E2',
        secondBlue :'#5075FF',
        mainOrange: '#FF9B39',
        secondOrange:'#FF7F00',
        thirdOrange: '#CC751D',
        fourthOrange: '#FFB164',
        fifthOrange: '#FF8F21',
        productBg: '#f9f9f9',
        storesBg: '#E0E0E0',
      },

    },
  },
  plugins: [],
}
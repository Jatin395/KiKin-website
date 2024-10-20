/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundColor : {
        GreenDark : ' #122315',
        Greenlight : '#55dd4a',
        Wheet : '#f3ede4',
        RoyalBlue : '#73D3EB',
        DARHGRREN : 'rgb(18, 35, 21)'
      },
      borderColor : {
       gray: '#f3f0ec4d',
      },
      textColor :{
        Greenlight : '#55dd4a',
        Orangelight : '#ffed52',
      }
    },
  },
  plugins: [],
}


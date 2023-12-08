 {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '65':"260px",
        '15':'59px',
        '27.75':'111px',
        '52':'208px',
        '101.5':'406px',
        '84.25':'337px',
        '47.5':'190px',
        '11.75':'47px',
        '7':'28px',
        '50':'200px',
        '27.5':'110px',
        '75':'250px',
        '37.5':'150px',
      },
      fontfamily:{
        clashsb: ['Clash Display Semibold', 'sans-serif'],
        clashreg:['Clash Display Regular', 'sans-serif'],
      },
      borderRadius:{
        '4xl':"28px",
      },
      colors:{
        'login-purple':'#FF95FF',
      },
      fontSize:{
        '2.5xl':'28px',
        '27.5':'110px',
        '50':'200px',
        '37.5':'150px',
      }
    },
  },
  plugins: [],
}
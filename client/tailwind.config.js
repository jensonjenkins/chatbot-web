/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '118':'26rem',
        '120':'28rem',
        '124':'30rem',
        '128':'32rem'
      },
      height:{
        '118':'26rem',
        '120':'28rem',
        '124':'30rem',
        '128':'32rem',
        '132':'34rem',
        '136':'36rem'
      },
      spacing: {
      '38': '9.5rem',
    },
    },
  },
  plugins: [],
}


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'orange',
        secondary: {
          100: 'pink',
          200: 'salmon',
        },
      },
      fontFamily: {
        banner: ['Playfair Display'],
      },
      width: {
        card: '379px',
      },
      height: {
        card: '428px',
        img: '75%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

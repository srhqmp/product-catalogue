module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E89B51',
        secondary: {
          100: 'pink',
          200: 'salmon',
        },
        button: {
          100: '#E89B51',
          200: '#D17149'
        }
      },
      fontFamily: {
        banner: ['Playfair Display'],
      },
      width: {
        card: '379px',
        button: '158px',
        email: '391px',
        footer: '1236px',
        search: '381px',
        searchIcon: '21px',
        dropdown: '126px',
        box: '447px'
      },
      height: {
        card: '428px',
        img: '75%',
        button: '54px',
        email: '54px',
        footer: '426px',
        search: '41px',
        searchIcon: '21px',
        dropdown: '41px',
        banner: '414px',
        box: '84px'
      },
      borderRadius: {
        primary: '5px'
      },
      backgroundImage: {
        banner: 'url("../images/banner.png")',
        footer: 'linear-gradient( rgba(128, 128, 128, 0.7), rgba(128, 128, 128, 0.7) ), url("../images/footer.png")'
      },
      outline: {
        email: '1px solid #ffffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
        dropdown: '126px'
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
        banner: '414px'
      },
      borderRadius: {
        primary: '5px'
      },
      backgroundImage: {
        banner: 'url("https://images.unsplash.com/photo-1546877625-cb8c71916608?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
        footer: 'url("https://images.unsplash.com/photo-1461468611824-46457c0e11fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")'
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

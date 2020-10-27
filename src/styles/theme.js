import { createMuiTheme } from '@material-ui/core/styles'

const primaryColor = '#000000'
const secondaryColor = '#000000'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
    common: {}
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Libre Franklin', 'sans-serif'].join(', '),
    body1: {},
    body2: {}
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*, *::before, *::after': {
          margin: 0,
          padding: 0
        },
        html: {
          fontSize: '62.5%'
        },
        a: {
          display: 'block',
          textDecoration: 'none',
          color: 'inherit'
        },
        img: {
          display: 'block'
        },
        'input, button, textarea, select': {
          display: 'block',
          font: 'inherit'
        },
        ul: {
          listStyle: 'none'
        },
        '::selection': {
          backgroundColor: primaryColor,
          color: 'white'
        },
        'a, button': {
          cursor: 'pointer'
        }
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1.2em'
      }
    }
  },
  custom: {
    title1: {},
    title2: {},
    title3: {},
    title4: {},
    title5: {}
  }
})

export default theme

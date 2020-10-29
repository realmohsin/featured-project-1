import { createMuiTheme } from '@material-ui/core/styles'

const primaryColor = '#EF3829'
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
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.7',
      letterSpacing: '0.3px'
    },
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
    title1: {
      fontSize: '4.9rem',
      fontWeight: 700
    },
    title2: {
      fontSize: '4rem',
      fontWeight: 700
    },
    title3: {},
    title4: {},
    title5: {},
    themedBorderAndPadding: {
      // styles for container with themed left border
      borderLeft: `12px solid ${primaryColor}`,
      paddingLeft: '4rem'
    },
    themedArrowForBefore: {
      // styles for ::before of text to be pointed at
      // manually add 'top' value afterwards
      content: '""',
      borderColor: `transparent ${primaryColor}`,
      borderStyle: 'solid',
      borderWidth: '0.35em 0 0.35em 0.45em',
      display: 'block',
      height: 0,
      width: 0,
      fontSize: '2.2rem',
      position: 'relative',
      left: '-4rem'
    }
  }
})

export default theme

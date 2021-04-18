import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, Box } from '@material-ui/core'
import CSSTransition from 'react-transition-group/CSSTransition'

import logo from '../../../assets/images/common/logo.png'

const useStyles = makeStyles(theme => ({
  sideDrawer: {
    position: 'fixed',
    width: '280px',
    maxWidth: '74%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '3px 0px 10px 2px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.4s ease-out',
    transform: 'translateX(-104%)',
    zIndex: 102,
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&.showing': {
      transform: 'translateX(0)'
    },
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    transition: 'all 0.5s',
    zIndex: 101,
    '&.fade-enter': {
      opacity: 0
    },
    '&.fade-enter-active': {
      opacity: 1
    },
    '&.fade-exit': {
      opacity: 1
    },
    '&.fade-exit-active': {
      opacity: 0
    }
  },
  sideDrawerNav: {
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },

  link: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    // fontWeight: 700,
    // fontSize: '1.3rem',
    letterSpacing: '0.5px',
    wordSpacing: '1.2px',
    fontSize: '1.1rem',
    display: 'flex',
    height: '4rem',
    borderBottom: `1px solid #D6EDFA`,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontWeight: 'normal'
  },

  logo: {
    width: '22rem',
    margin: '0 auto'
  },
  subMenuUl: {
    boxShadow: 'inset 0 0 5px 2px rgba(0,0,0,.2)'
  },
  subMenuSectionLink: {
    // height: 'auto !important'
    paddingLeft: '3.6rem'
  }
}))

const SideDrawer = ({ showing, closeSideDrawer }) => {
  const classes = useStyles()

  const initialMenuState = {
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false
  }

  const [menuState, setMenuState] = React.useState(initialMenuState)

  const handleMenuClick = (menuName, subMenuName) => {
    setMenuState({ ...menuState, [menuName]: !menuState[menuName] })
  }

  const handleSubMenuClick = (e, menuName, subMenuName) => {
    e.stopPropagation()
    handleMenuClick(menuName, subMenuName)
  }

  const sideDrawerClasses = [classes.sideDrawer]
  if (showing) {
    sideDrawerClasses.push('showing')
  }
  return (
    <>
      <CSSTransition in={showing} unmountOnExit classNames='fade' timeout={500}>
        <div className={classes.backdrop} onClick={closeSideDrawer} />
      </CSSTransition>

      <div className={sideDrawerClasses.join(' ')}>
        <Box>
          <img src={logo} alt='logo' className={classes.logo} />
        </Box>

        <nav className={classes.sideDrawerNav}>
          <ul>
            <li>
              <Link to={`/`} className={classes.link}>
                Home
              </Link>
            </li>

            <li>
              <Link to={`/about`} className={classes.link}>
                About
              </Link>
            </li>

            <li>
              <Link to={`/projects`} className={classes.link}>
                Projects
              </Link>
            </li>

            <li>
              <Link to={`/services`} className={classes.link}>
                Services
              </Link>
            </li>

            <li>
              <Link to={`/careers`} className={classes.link}>
                Careers
              </Link>
            </li>

            <li>
              <Link to={`/contact`} className={classes.link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideDrawer

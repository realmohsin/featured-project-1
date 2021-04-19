import React from 'react'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  navbarContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    padding: '2rem 5rem 0',
    color: 'white',
    background: 'transparent'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '165rem',
    margin: '0 auto',
    background: 'transparent'
  },
  logoContainer: {
    width: '22rem',
    padding: '1rem'
  },
  navUl: {
    display: 'flex',
    alignItems: 'center'
  },
  navLink: {
    fontSize: '1.5rem',
    textShadow: 'black 0px 0px 7px',
    fontWeight: 'bold',
    padding: '0.75rem 0',
    marginLeft: '3.2rem',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: 'white',
      visibility: 'hidden',
      transform: 'scaleX(0)',
      transition: 'all 0.3s ease-in-out 0s'
    },
    '&:hover::before': {
      visibility: 'visible',
      transform: 'scaleX(1)'
    }
  },
  activeLink: {
    '&::before': {
      visibility: 'visible',
      transform: 'scaleX(1)'
    }
  }
}))

const Navbar = props => {
  const classes = useStyles()

  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: clsx(classes.navLink, classes.activeLink) }
      : { className: classes.navLink }
  }

  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent
      ? { className: clsx(classes.navLink, classes.activeLink) }
      : { className: classes.navLink }
  }

  return (
    <div className={classes.navbarContainer}>
      <nav className={classes.navbar}>
        <ul className={classes.navUl}>
          <li>
            <Link to='/' getProps={isActive}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' getProps={isActive}>
              About
            </Link>
          </li>
          <li>
            <Link to='/projects' getProps={isPartiallyActive}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/services' getProps={isActive}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/careers' getProps={isActive}>
              Careers
            </Link>
          </li>
          <li>
            <Link to='/contact' getProps={isActive}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={classes.logoContainer}>
          <StaticImage
            src='../assets/images/common/logo.png'
            alt='Schimenti Logo'
            placeholder='none'
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar

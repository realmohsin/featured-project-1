import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  navbarContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    padding: '7rem 5rem 0',
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
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 280, maxHeight: 104) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.navbarContainer}>
      <nav className={classes.navbar}>
        <ul className={classes.navUl}>
          <li>
            <Link to='/' className={clsx(classes.navLink, classes.activeLink)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/' className={classes.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link to='/' className={classes.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/' className={classes.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/' className={classes.navLink}>
              Careers
            </Link>
          </li>
          <li>
            <Link to='/' className={classes.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={classes.logoContainer}>
          <Img fluid={data.logo.childImageSharp.fluid} alt='Schimenti Logo' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar

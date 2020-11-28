import React from 'react'
import clsx from 'clsx'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'

// This component is an entire hero section, unless isJustNav prop is used

const useStyles = makeStyles(theme => ({
  heroSection: {
    height: '94vh',
    position: 'relative'
  },
  heroImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  isJustNav: {
    height: '20rem',
    position: 'static',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      height: '10rem'
    }
  }
}))

const HeroSection = ({ heroBgFluid, children, isJustNav }) => {
  const classes = useStyles()

  return (
    <section
      className={clsx(classes.heroSection, isJustNav && classes.isJustNav)}
    >
      {/* <Navbar /> */}
      {!isJustNav && (
        <Img
          fluid={heroBgFluid}
          alt='The&Partnership, New York NY'
          className={classes.heroImg}
        />
      )}
      {children}
    </section>
  )
}

export default HeroSection

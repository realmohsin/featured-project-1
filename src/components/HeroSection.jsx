import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'
import Navbar from './Navigation/Navbar'
import HeroContent from './HeroContent'

// This component is an entire hero section, unless isJustNav prop is used

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
  heroSection: {
    height: '94vh',
    position: 'relative'
    // overflow: 'hidden'
  },
  heroImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // objectFit: 'cover',
    height: '100%',
    width: '100%'
  },
  isJustNav: {
    height: '20rem',
    position: 'static',
    background: theme.palette.secondary.main
  }
}))

const HeroSection = ({ heroBgFluid, children, isJustNav }) => {
  const theme = useTheme()
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   query {
  //     hero1: file(name: { eq: "hero-img-1" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 2000, maxHeight: 1335, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section
      className={clsx(classes.heroSection, isJustNav && classes.isJustNav)}
    >
      <Navbar />
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

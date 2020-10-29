import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'
import Navbar from '../Navigation/Navbar'
import HeroContent from './HeroContent'

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
  }
}))

const HeroSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      hero1: file(name: { eq: "hero-img-1" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 1335) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.heroSection}>
      <Navbar />
      <Img
        fluid={data.hero1.childImageSharp.fluid}
        alt='The&Partnership, New York NY'
        className={classes.heroImg}
      />
      <HeroContent
        subtitle='The&Partnership / New York NY'
        title='A Modern Approach to Thinking Outside the Box'
        buttonText='View Project'
        url='/'
      />
    </section>
  )
}

export default HeroSection

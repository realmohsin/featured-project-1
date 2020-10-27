import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'

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
  footer: {
    height: '57rem',
    // backgroundSize: 'cover',
    backgroundPosition: '0% 0%'
  }
}))

const Footer = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      footerBg: file(name: { eq: "footer-bg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, maxHeight: 1212) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag='section'
      className={classes.footer}
      fluid={data.footerBg.childImageSharp.fluid}
    ></BackgroundImage>
  )
}

export default Footer

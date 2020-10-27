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
  newsSection: {
    height: '95rem'
  }
}))

const NewsSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      sectionBg: file(name: { eq: "section-bg-1" }) {
        childImageSharp {
          fluid(maxWidth: 2732, maxHeight: 1632) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <section className={classes.newsSection}></section>
}

export default NewsSection

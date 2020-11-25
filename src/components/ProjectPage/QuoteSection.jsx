import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid } from '@material-ui/core'

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
  quoteSection: {
    padding: '16rem 0'
  },
  leftGridItem: {
    paddingRight: '10rem'
  },
  quoteBox: {
    ...theme.custom.themedBorderAndPadding,
    paddingTop: '5rem',
    height: '100%'
  },
  quote: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    '&::before': {
      ...theme.custom.themedArrowForBefore,
      top: '2rem'
    }
  },
  quoter: {
    marginTop: '3rem',
    fontSize: '1.6rem'
  }
}))

const QuoteSection = ({ quote, quoter, leftQuoteImgFluid }) => {
  const theme = useTheme()
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   query {
  //     optionalName: file(name: { eq: "services-safety" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300, maxHeight: 176, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section className={classes.quoteSection}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={6} className={classes.leftGridItem}>
            <Img fluid={leftQuoteImgFluid} alt='Quoter' />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.quoteBox}>
              <p className={classes.quote}>"{quote}"</p>
              <p className={classes.quoter}>- {quoter}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default QuoteSection

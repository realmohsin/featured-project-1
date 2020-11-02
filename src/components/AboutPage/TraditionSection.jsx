import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import aboutTraditionBg from '../../assets/images/about-page/about-tradition-bg.jpg'
import ThemedContentBox from '../ThemedContentBox'

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
  traditionSection: {
    paddingTop: '21rem',
    backgroundImage: `url(${aboutTraditionBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '96.3rem',
    color: 'white'
  }
}))

const TraditionSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const { data } = useStaticQuery(graphql`
    query {
      aboutTraditionBg: file(name: { eq: "about-tradition-bg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 1333, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.traditionSection}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ThemedContentBox
              title='A Proud Tradition'
              subtitle="It's Deeper than Roots"
              onDarkBg
            >
              <Typography variant='body1' gutterBottom>
                Schimenti Construction, founded in 1994 by Matthew Schimenti,
                represents the third generation of a family that can trace its
                roots in the construction industry to the 1960s.
              </Typography>
              <Typography variant='body1' gutterBottom>
                Matthew Schimenti founded Schimenti Construction in 1994.
                Matthew’s father, Donald, had apprenticed with his own father,
                Michael, in the 1960’s prior to founding AMD Construction in
                1971. Michael Schimenti was an architect who designed and built
                large scale projects, office towers, schools and apartment
                complexes with his partner, Max Wechsler.
              </Typography>
              <Typography variant='body1' gutterBottom>
                With exceptional family history in the construction industry,
                Matt used his extensive knowledge and experience to create a
                construction company focused on quality. His passion for
                excellence, communication and timeliness has resulted in a
                company that provides the highest quality of service to the
                retail and construction industries.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item xs={0} md={6} />
        </Grid>
      </Container>
    </section>
  )
}

export default TraditionSection

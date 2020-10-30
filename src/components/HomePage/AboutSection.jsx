import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { Parallax, Background } from 'react-parallax'
import parallaxBg from '../../assets/images/home-page/parallax-bg.jpg'
import Button from '../Button'

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
  aboutSection: {
    height: '109rem',
    color: 'white'
  },
  parallax: {
    height: '100%'
  },
  gridContainer: {
    // padding: '32rem 0'
    marginTop: '32rem'
  },
  rightSide: {
    // display: 'flex',
    // alignItems: 'center',
    // height: '100%'
  },
  contentBox: {
    ...theme.custom.themedBorderAndPadding,
    width: '60rem',
    marginBottom: '8rem'
  },
  aboutTitle: {
    ...theme.custom.title2,
    textShadow: 'black 0px 0px 3px'
  },
  paragraph: {
    textShadow: 'black 0px 0px 5px',
    '&:first-of-type::before': {
      ...theme.custom.themedArrowForBefore,
      transform: 'translateY(1.9rem)'
    }
  },
  paragraph2: {}
}))

const AboutSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      aboutBg: file(name: { eq: "parallax-bg" }) {
        childImageSharp {
          fluid(maxWidth: 2200, maxHeight: 1257) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    // <BackgroundImage
    //   Tag='section'
    //   className={classes.aboutSection}
    //   fluid={data.aboutBg.childImageSharp.fluid}
    // ></BackgroundImage>
    <section className={classes.aboutSection}>
      <Parallax
        strength={300}
        className={classes.parallax}
        bgImage={parallaxBg}
      >
        <Grid container className={classes.gridContainer}>
          <Grid item xs={0} md={6} />
          <Grid item xs={12} md={6} className={classes.rightSide}>
            <div className={classes.contentBox}>
              <Typography variant='h2' className={classes.aboutTitle}>
                We Look At <br /> Construction Differently
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.paragraph}
              >
                We’ve spent decades building an enviable reputation as one of
                the nation’s leading general contractors. National retail and
                commercial clients continually rely on us to meet – and exceed –
                their schedules, specifications and budgets on each project we
                are assigned. This has helped us grow successful relationships
                with some of the most prominent brands in the world, such as Bed
                Bath & Beyond, GAP, Kohl’s, Massimo Dutti, Sephora, Target,
                Victoria’s Secret and ZARA.
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.paragraph}
              >
                With a staff of over 100 trade professionals, a field-tested
                project management program and a sound business model, our
                proprietary construction process delivers exceptional results –
                project after project.
              </Typography>
            </div>
            <Button isLink text='More About Us' to='/' alt='About Page' />
          </Grid>
        </Grid>
      </Parallax>
    </section>
  )
}

export default AboutSection

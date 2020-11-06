import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import Button from '../Button'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'

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
  challengingSection: {
    padding: '10rem 0 30rem',
    backgroundImage: `url(${sectionBg2})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%'
  },
  gridContainer: {
    marginBottom: '5rem'
  },
  gridItemImg: {
    // paddingRight: '4rem'
  },
  challengeImg: {
    width: '29.1rem',
    marginLeft: 'auto'
  },
  gridItemQuote: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '3rem',
    position: 'relative'
  },
  quote: {
    maxWidth: '65rem'
  },
  quoter: {
    fontWeight: 'bold',
    fontSize: '1.7rem'
  },
  buttonExtraClass: {
    position: 'absolute',
    bottom: '3rem',
    left: '-12rem',
    transform: 'scale(0.9)',
    zIndex: '10'
  },
  textBoxRightSide: {
    marginLeft: 'auto'
  },
  buttonOnRight: {
    left: '59rem',
    bottom: '5.5rem'
  },
  title: {
    fontSize: '1.8rem',
    margin: '3rem 0 8rem',
    paddingLeft: '8rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px'
  }
}))

const ChallengingSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      challenging1: file(name: { eq: "challenging-1" }) {
        childImageSharp {
          fluid(maxWidth: 318, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      challenging2: file(name: { eq: "challenging-2" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      challenging3: file(name: { eq: "challenging-3" }) {
        childImageSharp {
          fluid(maxWidth: 318, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.challengingSection}>
      <Container>
        <Typography variant='h2' className={classes.title}>
          CHALLENGING TOMORROW’S LEADERS
        </Typography>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={3} className={classes.gridItemImg}>
            <Img
              fluid={data.challenging1.childImageSharp.fluid}
              className={classes.challengeImg}
            />
          </Grid>
          <Grid item xs={12} md={9} className={classes.gridItemQuote}>
            <div>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.quote}
              >
                “I love construction because it is amazing to see structures go
                from paper to fruition. It’s incredible to work together as a
                team and create something to be proud of and for others to
                share.”
              </Typography>
              <Typography variant='body1' className={classes.quoter}>
                Andrew Heller
              </Typography>
              <Typography variant='body1' className={classes.quoterPosition}>
                Project Manager
              </Typography>
            </div>
            <Button
              isLink
              text='Explore Project Management Careers'
              extraClass={classes.buttonExtraClass}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={9} className={classes.gridItemQuote}>
            <div className={classes.textBoxRightSide}>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.quote}
              >
                “It’s really cool to be part of a company that’s evolving and
                becoming a real force in construction. Good camaraderie, great
                teamwork. We’ve all got a common goal.”
              </Typography>
              <Typography variant='body1' className={classes.quoter}>
                Angela Phillips
              </Typography>
              <Typography variant='body1' className={classes.quoterPosition}>
                Senior Estimating Coordinator
              </Typography>
            </div>
            <Button
              isLink
              text='Explore Project Management Careers'
              extraClass={clsx(classes.buttonExtraClass, classes.buttonOnRight)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Img
              fluid={data.challenging2.childImageSharp.fluid}
              className={classes.challengeImg}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={3} className={classes.gridItemImg}>
            <Img
              fluid={data.challenging3.childImageSharp.fluid}
              className={classes.challengeImg}
            />
          </Grid>
          <Grid item xs={12} md={9} className={classes.gridItemQuote}>
            <div>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.quote}
              >
                “I was looking for a company where I had opportunity for growth.
                I moved from the field side to a project management position.
                The opportunities so far have been limitless.”
              </Typography>
              <Typography variant='body1' className={classes.quoter}>
                Charles Esteves
              </Typography>
              <Typography variant='body1' className={classes.quoterPosition}>
                Project Executive
              </Typography>
            </div>
            <Button
              isLink
              text='Explore Project Management Careers'
              extraClass={classes.buttonExtraClass}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ChallengingSection

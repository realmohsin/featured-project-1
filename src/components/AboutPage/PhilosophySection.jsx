import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import Button from '../Button'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

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
  philosophySection: {
    padding: '12rem 0',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '96.5rem'
  },
  leftSide: {},
  logoContainer: {
    width: '25%',
    marginBottom: '3rem'
  },
  extraThemedBox: {
    width: '50rem'
  },
  rightGridItem: {
    padding: '2rem 0rem',
    marginBottom: '3rem'
  },
  itemTitle: {
    fontSize: '3.1rem',
    marginBottom: '1.5rem'
  },
  rightIcon: {
    width: '9.2rem',
    margin: '1rem 0'
  },
  rightSideItem: {
    paddingLeft: '3rem'
  }
}))

const PhilosophySection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      philosophyLogo: file(name: { eq: "about-philosophy-logo" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 430, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      safeIcon: file(name: { eq: "about-philosophy-safe" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      supportiveIcon: file(name: { eq: "about-philosophy-supportive" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      effectiveIcon: file(name: { eq: "about-philosophy-effective" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      agileIcon: file(name: { eq: "about-philosophy-agile" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [state, setState] = useState('initial-state')

  useEffect(() => {
    return () => {}
  }, [])

  const atXsDown = useMediaQuery(theme.breakpoints.down('xs')) // below 600
  const atMdUp = useMediaQuery(theme.breakpoints.up('md')) // 960 and above
  const atSmOnly = useMediaQuery(theme.breakpoints.only('sm')) // only between 600 and 959
  const betweenSmLg = useMediaQuery(theme.breakpoints.between('sm', 'lg')) // only between 600 and 1919

  return (
    <div className={classes.philosophySection}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.leftSide} xs={12} md={6}>
            <div className={classes.logoContainer}>
              <Img
                fluid={data.philosophyLogo.childImageSharp.fluid}
                alt='Philosophy Logo'
              />
            </div>
            <ThemedContentBox
              title={
                <>
                  More Than a Philosophy. <br /> It’s Our DNA.
                </>
              }
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' className={classes.contentText}>
                The people of Schimenti are our most valuable and important
                resource. They possess an energy and dedication that permeates
                the entire company. We call it The Cheetah Factor. You see it in
                the way we approach everything from recruiting practices to
                continued culture. It’s more than behaviors or actions of our
                employees, we’re built with it…
              </Typography>
            </ThemedContentBox>
            <Button isLink to='/' text='Careers Done Different' />
          </Grid>
          <Grid item className={classes.rightSide} xs={12} md={6}>
            <Grid container className={classes.rightGridContainer}>
              <Grid item className={classes.rightGridItem} xs={6}>
                <div>
                  <Img
                    fluid={data.safeIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  />
                </div>

                <Typography variant='h3' className={classes.itemTitle}>
                  Safe
                </Typography>
                <Typography variant='body1'>
                  Prioritizing the safety of yourself and others while
                  protecting the integrity of Schimenti and all those we work
                  with.
                </Typography>
              </Grid>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.rightSideItem)}
                xs={6}
              >
                <div>
                  <Img
                    fluid={data.effectiveIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  />
                </div>
                <Typography variant='h3' className={classes.itemTitle}>
                  Effective
                </Typography>
                <Typography variant='body1'>
                  Master of your domain, taking ownership and pride in the
                  quality and completion of your work.
                </Typography>
              </Grid>
              <Grid item className={classes.rightGridItem} xs={6}>
                <div>
                  <Img
                    fluid={data.agileIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  />
                </div>
                <Typography variant='h3' className={classes.itemTitle}>
                  Agile
                </Typography>
                <Typography variant='body1'>
                  Able to identify obstacles, find better methods, learn new
                  skills, and pivot.
                </Typography>
              </Grid>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.rightSideItem)}
                xs={6}
              >
                <div>
                  <Img
                    fluid={data.supportiveIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  />
                </div>
                <Typography variant='h3' className={classes.itemTitle}>
                  Supportive
                </Typography>
                <Typography variant='body1'>
                  Take personal responsibility for ensuring the growth,
                  development and success of others.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PhilosophySection

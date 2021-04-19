import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import Button from '../Button'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

const useStyles = makeStyles(theme => ({
  philosophySection: {
    padding: '12rem 0',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '96.5rem',
    [theme.breakpoints.down('md')]: {
      height: 'auto'
    }
  },
  leftSide: {},
  leftSideContainer: {
    [theme.breakpoints.down('md')]: {
      width: 'max-content',
      margin: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto'
    }
  },
  logoContainer: {
    width: '25%',
    marginBottom: '3rem'
  },
  extraThemedBox: {
    width: '50rem',
    [theme.breakpoints.down('md')]: {
      width: '80rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      marginRight: '1rem'
    }
  },
  rightSide: {
    [theme.breakpoints.down('md')]: {
      marginTop: '8rem'
    }
  },
  rightGridItem: {
    padding: '2rem 0rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1rem',
      padding: '3rem 6rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 0'
    }
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
    paddingLeft: '3rem',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0
    }
  },
  extraButtonClass: {
    [theme.breakpoints.down('md')]: {
      margin: '-2rem auto 0'
    }
  },
  safeIcon: {
    [theme.breakpoints.down('xs')]: {
      transform: 'translateX(1.5rem)'
    }
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

  const atLgUp = useMediaQuery(theme.breakpoints.up('lg')) // 960 and above

  return (
    <div className={classes.philosophySection}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.leftSide} xs={12} lg={6}>
            <div className={classes.leftSideContainer}>
              <div className={classes.logoContainer}>
                <StaticImage
                  src='../../assets/images/about-page/about-philosophy-logo.png'
                  alt='Philosophy Logo'
                  placeholder='none'
                />
              </div>
              <ThemedContentBox
                title={
                  <>More Than a Philosophy. {atLgUp && <br />} It’s Our DNA.</>
                }
                extraClass={classes.extraThemedBox}
              >
                <Typography variant='body1' className={classes.contentText}>
                  The people of Schimenti are our most valuable and important
                  resource. They possess an energy and dedication that permeates
                  the entire company. We call it The Cheetah Factor. You see it
                  in the way we approach everything from recruiting practices to
                  continued culture. It’s more than behaviors or actions of our
                  employees, we’re built with it…
                </Typography>
              </ThemedContentBox>
              <Button
                isLink
                to='/'
                text='Careers Done Different'
                extraClass={classes.extraButtonClass}
              />
            </div>
          </Grid>
          <Grid item className={classes.rightSide} xs={12} lg={6}>
            <Grid container className={classes.rightGridContainer}>
              <Grid item className={classes.rightGridItem} xs={12} sm={6}>
                <div>
                  <StaticImage
                    src='../../assets/images/about-page/about-philosophy-safe.png'
                    alt='Philosophy Logo'
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder='none'
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
                xs={12}
                sm={6}
              >
                <div>
                  <StaticImage
                    src='../../assets/images/about-page/about-philosophy-effective.png'
                    alt='Philosophy Logo'
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder='none'
                  />
                </div>
                <Typography variant='h3' className={classes.itemTitle}>
                  Effective
                </Typography>
                <Typography variant='body1'>
                  Mastery of your domain, taking ownership and pride in the
                  quality, consistency and completion of your exceptional work.
                </Typography>
              </Grid>
              <Grid item className={classes.rightGridItem} xs={12} sm={6}>
                <div>
                  <StaticImage
                    src='../../assets/images/about-page/about-philosophy-agile.png'
                    alt='Philosophy Logo'
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder='none'
                  />
                  {/* <Img
                    fluid={data.agileIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  /> */}
                </div>
                <Typography variant='h3' className={classes.itemTitle}>
                  Agile
                </Typography>
                <Typography variant='body1'>
                  Able to identify obstacles, find better methods, learn new
                  skills, apply initiatives and pivot.
                </Typography>
              </Grid>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.rightSideItem)}
                xs={12}
                sm={6}
              >
                <div>
                  <StaticImage
                    src='../../assets/images/about-page/about-philosophy-supportive.png'
                    alt='Philosophy Logo'
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder='none'
                  />
                  {/* <Img
                    fluid={data.supportiveIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  /> */}
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

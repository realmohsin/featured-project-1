import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography, Hidden } from '@material-ui/core'
import Button from '../Button'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'

const useStyles = makeStyles(theme => ({
  challengingSection: {
    padding: '10rem 0 30rem',
    // backgroundImage: `url(${sectionBg2})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '22rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '12rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '6rem',
      paddingTop: '8rem'
    }
  },
  bgImg: {
    zIndex: -10
  },
  gridContainer: {
    marginBottom: '6rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10rem'
    }
  },
  gridItemImg: {
    // paddingRight: '4rem'
  },
  challengeImg: {
    width: '29.1rem',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      margin: 'auto'
    }
  },
  gridItemQuote: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '3rem',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      paddingLeft: 0
    }
  },
  quote: {
    maxWidth: '65rem',
    [theme.breakpoints.down('md')]: {
      margin: '5rem 0 2rem'
    }
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
    zIndex: '10',
    [theme.breakpoints.down('md')]: {
      position: 'static',
      marginTop: '4rem',
      marginBottom: '6rem'
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(0.8)'
    }
  },
  textBoxRightSide: {
    marginLeft: 'auto',
    textAlign: 'right',
    paddingRight: '3rem',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0',
      transform: 'translateX(3rem)'
    }
  },
  buttonOnRight: {
    left: '70%',
    bottom: '5.5rem'
  },
  title: {
    fontSize: '1.8rem',
    margin: '3rem 0 8rem',
    paddingLeft: '8rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: '0 1rem'
    }
  },
  rightChallengeImg: {
    marginRight: 'auto'
  }
}))

const ChallengingSection = props => {
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
      <StaticImage
        src='../../assets/images/common/section-bg-2.jpg'
        alt='Background'
        className={classes.bgImg}
        objectPosition='0% 0%'
      />
      <Container>
        <Typography variant='h2' className={classes.title}>
          CHALLENGING TOMORROW’S LEADERS
        </Typography>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={5} lg={3} className={classes.gridItemImg}>
            <StaticImage
              src='../../assets/images/careers-page/challenging-1.png'
              className={classes.challengeImg}
            />
            {/* <Img
              fluid={data.challenging1.childImageSharp.fluid}
              className={classes.challengeImg}
            /> */}
          </Grid>
          <Grid item xs={12} md={7} lg={9} className={classes.gridItemQuote}>
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

        <Hidden mdDown>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={7} lg={9} className={classes.gridItemQuote}>
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
                extraClass={clsx(
                  classes.buttonExtraClass,
                  classes.buttonOnRight
                )}
              />
            </Grid>
            <Grid item xs={12} md={5} lg={3}>
              <StaticImage
                src='../../assets/images/careers-page/challenging-2.jpg'
                className={clsx(
                  classes.challengeImg,
                  classes.rightChallengeImg
                )}
              />
              {/* <Img
                fluid={data.challenging2.childImageSharp.fluid}
                className={clsx(
                  classes.challengeImg,
                  classes.rightChallengeImg
                )}
              /> */}
            </Grid>
          </Grid>
        </Hidden>

        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={5} lg={3} className={classes.gridItemImg}>
            <StaticImage
              src='../../assets/images/careers-page/challenging-3.png'
              className={classes.challengeImg}
            />
            {/* <Img
              fluid={data.challenging3.childImageSharp.fluid}
              className={classes.challengeImg}
            /> */}
          </Grid>
          <Grid item xs={12} md={7} lg={9} className={classes.gridItemQuote}>
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

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import videoSafetyBg from '../../assets/images/services-page/video-safety-bg.jpg'
import videoOverlayImg from '../../assets/images/services-page/services-video-overlay.jpg'
import PlayButton from '../../assets/images/common/PlayButton'
import { FaPlay } from 'react-icons/fa'

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
  videoSafetySection: {
    // padding: '61.5rem 0 19rem',
    padding: '0rem 0 19rem',
    backgroundImage: `url(${videoSafetyBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '138.4rem',
    color: 'white'
    // position: 'relative'
  },
  gridContainer: {
    marginTop: '-7rem'
  },
  leftSide: {
    paddingTop: '4rem',
    paddingRight: '4.5rem'
  },
  quote: {
    fontSize: '2.6rem',
    fontWeight: 'bold',
    lineHeight: 1.4
  },
  quoter: {
    marginTop: '3rem',
    fontSize: '1.6rem',
    fontWeight: 'bold'
  },
  quoterPosition: {
    fontSize: '1.5rem'
  },
  rightSide: {
    paddingLeft: '5rem'
  },
  emrTitleContainer: {
    display: 'flex'
  },
  emrImg: {
    width: '20%'
  },
  emrTitle: {
    fontSize: '4.2rem',
    fontWeight: 'bold',
    marginTop: '1.1rem'
  },
  emrSubTitle: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    marginTop: '-0.8rem'
  },
  abcContainer: {
    marginTop: '9rem'
  },
  abcImg: {
    width: '15rem',
    marginLeft: '-3rem'
  },
  contentText: {
    marginTop: '2rem'
  },
  video: {
    height: '70.7rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0px 30px 55px #00000a',
    transform: 'translateY(-25%)',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  overlayContainer: {
    transition: '0.4s all',
    width: '100%',
    height: '100%',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  videoOverlay: {
    width: '100%',
    height: '100%'
  },
  playButtonContainer: {
    width: '11rem',
    height: '11rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playButton: {
    color: 'white',
    transform: 'translate(3px, 1px)'
  }
}))

const VideoSafetySection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      videoOverlay: file(name: { eq: "services-video-overlay" }) {
        childImageSharp {
          fluid(maxWidth: 2200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      abc: file(name: { eq: "abc" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      emr: file(name: { eq: "emr" }) {
        childImageSharp {
          fluid(maxWidth: 110, maxHeight: 130, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.videoSafetySection}>
      <Container>
        <div className={classes.video}>
          {/* <img src={videoOverlayImg} alt='' className={classes.videoOverlay} /> */}
          <div className={classes.overlayContainer}>
            <Img
              fluid={data.videoOverlay.childImageSharp.fluid}
              alt='Safety Video overlay'
              className={classes.videoOverlay}
            />
          </div>
          <div className={classes.playButtonContainer}>
            <FaPlay size='2em' className={classes.playButton} />
          </div>
        </div>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.leftSide} xs={12} md={6}>
            <Typography variant='body1' className={classes.quote}>
              “Safety cannot be completed by one person alone, it takes a
              teamwork approach to lead meaningful change. We pride ourselves on
              our continued training along with our onsite safety processes
              which ultimately reduce injuries, delays, and costs.”
            </Typography>
            <Typography variant='body1' className={classes.quoter}>
              Tom Madden
            </Typography>
            <Typography variant='body1' className={classes.quoterPosition}>
              Corporate Safety Director
            </Typography>
          </Grid>
          <Grid item className={classes.rightSide} xs={12} md={6}>
            <div className={classes.emrContainer}>
              <div className={classes.emrTitleContainer}>
                <Img
                  fluid={data.emr.childImageSharp.fluid}
                  alt='emr'
                  className={classes.emrImg}
                />
                <div>
                  <Typography variant='body1' className={classes.emrTitle}>
                    0.69 EMR
                  </Typography>
                  <Typography variant='body1' className={classes.emrSubTitle}>
                    Experience Modification Rate
                  </Typography>
                </div>
              </div>
              <Typography variant='body1' className={classes.contentText}>
                <b>
                  We continue to successfully beat industry-wide safety
                  standards and achieve significantly lower risk scores
                </b>{' '}
                by diligently maintaining our policies, continually implementing
                new safety programs and taking a proactive approach to reduce
                hazards and prevent injuries.
              </Typography>
            </div>
            <div className={classes.abcContainer}>
              <Img
                fixed={data.abc.childImageSharp.fixed}
                alt='abc'
                className={classes.abcImg}
              />
              <Typography variant='body1' className={classes.contentText}>
                Schimenti has achieved a Gold Level STEP Safety Award from the
                Associated Builders and Contractors in 2018 for our ongoing
                efforts in the development of a quality safety program. Safety
                is a top priority, so congratulations to our field teams for
                their commitment and to the Safety department for this
                recognition.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default VideoSafetySection

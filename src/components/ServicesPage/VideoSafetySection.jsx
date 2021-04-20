import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import { FaPlay } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  videoSafetySection: {
    padding: '0rem 0 19rem',
    // backgroundImage: `url(${videoSafetyBg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    height: '138.4rem',
    color: 'white',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('sm')]: {
      height: '148rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '150rem'
    }
  },
  bgImg: {
    zIndex: -10
  },
  gridContainer: {
    marginTop: '-7rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '-1rem'
    }
  },
  leftSide: {
    paddingTop: '4rem',
    paddingRight: '4.5rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: '10rem',
      padding: '4rem 1rem 0'
    }
  },
  quote: {
    fontSize: '2.6rem',
    fontWeight: 'bold',
    lineHeight: 1.4,
    [theme.breakpoints.down('md')]: {
      fontSize: '2.3rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem'
    }
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
    paddingLeft: '5rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: '1rem'
    }
  },
  emrTitleContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  emrImg: {
    width: '22%',
    [theme.breakpoints.down('sm')]: {
      width: '12%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '26%'
    }
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
    marginTop: '9rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10rem'
    }
  },
  abcImg: {
    width: '15rem',
    marginLeft: '-3rem'
  },
  contentText: {
    marginTop: '2rem'
  },
  video: {
    height: '67rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0px 30px 55px #00000a',
    transform: 'translateY(-25%)',
    width: '92%',
    margin: 'auto',
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '55rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '87%',
      height: '40rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '96%',
      height: '26rem'
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
  const classes = useStyles()

  return (
    <section className={classes.videoSafetySection}>
      <StaticImage
        src='../../assets/images/services-page/video-safety-bg.jpg'
        alt='Background'
        className={classes.bgImg}
        objectPosition='0% 0%'
      />
      <Container>
        <div className={classes.video}>
          <div className={classes.overlayContainer}>
            <StaticImage
              src='../../assets/images/services-page/services-video-overlay.jpg'
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
                <StaticImage
                  src='../../assets/images/services-page/emr.png'
                  alt='EMR'
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
                </b>
                by diligently maintaining our policies, continually implementing
                new safety programs and taking a proactive approach to reduce
                hazards and prevent injuries.
              </Typography>
            </div>
            <div className={classes.abcContainer}>
              <StaticImage
                src='../../assets/images/services-page/abc.png'
                alt='ABC'
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

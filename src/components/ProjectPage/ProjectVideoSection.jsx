import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { FaPlay } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  videoSafetySection: {
    padding: '0rem 0 4rem',
    backgroundSize: 'center',
    color: 'white'
  },
  gridContainer: {
    marginTop: '-7rem'
  },
  video: {
    height: '70.7rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0px 30px 55px #00000a',
    transform: 'translateY(-25%)',
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '55rem',
      margin: '0 auto'
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
  videoOverlay: {},
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

const ProjectVideoSection = ({ overlayImgFluid, vidSectionBgFluid }) => {
  const classes = useStyles()

  return (
    <BackgroundImage
      Tag='section'
      className={classes.videoSafetySection}
      fluid={vidSectionBgFluid}
    >
      <Container>
        <div className={classes.video}>
          <div className={classes.overlayContainer}>
            <Img
              fluid={overlayImgFluid}
              alt='Safety Video overlay'
              className={classes.videoOverlay}
            />
          </div>
          <div className={classes.playButtonContainer}>
            <FaPlay size='2em' className={classes.playButton} />
          </div>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default ProjectVideoSection

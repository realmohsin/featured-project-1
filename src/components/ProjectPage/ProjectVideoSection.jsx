import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { FaPlay } from 'react-icons/fa'
import videoSafetyBg from '../../assets/images/services-page/video-safety-bg.jpg'

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
    padding: '0rem 0 4rem',
    // backgroundImage: `url(${videoSafetyBg})`,
    backgroundSize: 'center',
    // backgroundPosition: '0% 0%',
    // height: '138.4rem',
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
  const theme = useTheme()
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   query {
  //     videoOverlay: file(name: { eq: "services-video-overlay" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 2200, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     abc: file(name: { eq: "abc" }) {
  //       childImageSharp {
  //         fixed(width: 150) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     emr: file(name: { eq: "emr" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 110, maxHeight: 130, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

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

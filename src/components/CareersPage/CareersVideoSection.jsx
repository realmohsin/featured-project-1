import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import videoCareersBg from '../../assets/images/careers-page/video-careers-bg.jpg'
import videoOverlayImg from '../../assets/images/careers-page/careers-video-overlay.jpg'
import PlayButton from '../../assets/images/common/PlayButton'
import { FaPlay } from 'react-icons/fa'
import ThemedContentBox from '../ThemedContentBox'
import employeeBenefits from '../../data/employeeBenefits'
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
  careersVideoSection: {
    // padding: '61.5rem 0 19rem',
    padding: '0rem 0 19rem',
    backgroundImage: `url(${videoCareersBg})`,
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
    paddingTop: '4rem',
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
  },
  extraThemedBox: {
    width: '78rem'
  },
  benefitItem: {
    fontSize: '1.5rem',
    borderBottom: '1px solid #3D3F3A',
    paddingBottom: '0.7rem',
    marginBottom: '1.5rem'
  }
}))

const CareersVideoSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      videoOverlay: file(name: { eq: "careers-video-overlay" }) {
        childImageSharp {
          fluid(maxWidth: 2200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.careersVideoSection}>
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
          <Grid item className={classes.leftSide} xs={12} md={8}>
            <ThemedContentBox
              title='People. Our Most Valuable Asset.'
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                We make a major commitment to our employees and their families
                by providing a comprehensive and competitive package of
                benefits. We recognize that our employees have different needs,
                and have created a benefits marketplace that encourages freedom
                of choice.
              </Typography>
              <Typography variant='body1' gutterBottom>
                In addition, Schimenti employees also receive paid time off,
                company paid holidays, and numerous opportunities to hone their
                skills and advance their education.
              </Typography>
            </ThemedContentBox>
            <Button asLink to='/' text='Careers Done Different' />
          </Grid>
          <Grid item className={classes.rightSide} xs={12} md={4}>
            <ul className={classes.benefitList}>
              {employeeBenefits.map(benefit => (
                <li className={classes.benefitItem}>{benefit}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CareersVideoSection

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import anime from 'animejs'

// This component is an entire hero section, unless isJustNav prop is used

const useStyles = makeStyles(theme => ({
  heroSection: {
    overflowY: 'hidden',
    height: '94vh',
    position: 'relative',
    transition: 'all 2s'
  },
  heroImg: {
    height: '100%'
  },
  isJustNav: {
    height: '20rem',
    position: 'static',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      height: '10rem'
    }
  },
  initialOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1B1B25',
    zIndex: '200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    width: '22rem',
    padding: '1rem',
    opacity: 0,
    transform: 'scale(0.1)'
  }
}))

const CenteredLogo = () => {
  const classes = useStyles()

  return (
    <div id='logo-container' className={classes.logoContainer}>
      <StaticImage
        src='../assets/images/common/logo.png'
        alt='Schimenti Logo'
        placeholder='none'
      />
    </div>
  )
}

const HeroSection = ({ heroImgData, children, isJustNav, homePage }) => {
  const classes = useStyles()

  const [overlayExists, setOverlayExists] = useState(true)

  const animate = () => {
    const timeline = anime.timeline({
      complete: () => setOverlayExists(false)
    })

    timeline
      .add({
        targets: '#logo-container',
        duration: 3000,
        easing: 'easeOutQuint',
        opacity: 1,
        scale: 1.2
      })
      .add({
        targets: '#logo-container',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.5
      })
      .add({
        targets: '#initial-overlay',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 0
        // scale: 0.1
      })
  }

  useEffect(() => {
    if (isJustNav) return
    animate()
  }, [])

  if (isJustNav) {
    return <div className={clsx(classes.heroSection, classes.isJustNav)} />
  }

  return (
    <>
      <section className={classes.heroSection}>
        <GatsbyImage
          image={getImage(heroImgData)}
          alt='Interior Display'
          className={classes.heroImg}
        />
        {children}
      </section>
      {homePage && overlayExists && (
        <div id='initial-overlay' className={classes.initialOverlay}>
          <CenteredLogo />
        </div>
      )}
    </>
  )
}

export default HeroSection

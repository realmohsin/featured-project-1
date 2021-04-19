import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'

// This component is an entire hero section, unless isJustNav prop is used

const useStyles = makeStyles(theme => ({
  heroSection: {
    height: '94vh',
    position: 'relative',
    transition: 'all 2s',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  },
  heroImg: {
    zIndex: -10
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
    alignItems: 'center',
    transition: 'all 1.5s'
  },
  logoContainer: {
    width: '22rem',
    padding: '1rem',
    opacity: 0,
    transition: 'all 1.5s'
  },
  logoPreFade: {
    opacity: 0,
    transform: 'scale(0.5)'
  },
  logoPostFade: {
    opacity: 1,
    transform: 'scale(1)'
  },
  invisible: {
    opacity: 0,
    transition: 'all 2s'
  },
  visible: {
    opacity: 1,
    transition: 'all 2s'
  },
  overlayFadeOut: {
    opacity: 0,
    zIndex: -100,
    transition: 'all 1.5s'
  }
}))

const CenteredLogo = ({ logoFluid }) => {
  const classes = useStyles()
  const [fadeInAdded, setFadeInAdded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFadeInAdded(true)
    }, 1500)
  }, [])

  return (
    <div
      className={clsx(
        classes.logoContainer,
        classes.logoPreFade,
        fadeInAdded && classes.logoPostFade
      )}
    >
      <StaticImage
        src='../assets/images/common/logo.png'
        alt='Schimenti Logo'
      />
    </div>
  )
}

const HeroSection = ({ children, isJustNav, homePage }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [fadeInAdded, setFadeInAdded] = useState(false)
  const [overlayFadeOut, setOverlayFadeOut] = useState(false)

  useEffect(() => {
    if (homePage) {
      setTimeout(() => {
        console.log('overlay changed')
        setOverlayFadeOut(true)
      }, 3750)
    }
  }, [])
  console.log('overlayFadeOut value: ', overlayFadeOut)
  return (
    <>
      <section
        className={clsx(
          classes.heroSection,
          isJustNav && classes.isJustNav
          // homePage && classes.invisible
          // fadeInAdded && classes.visible
        )}
      >
        {!isJustNav && (
          <StaticImage
            src='../assets/images/home-page/hero-img-1.jpg'
            alt='The&Partnership, New York NY'
            className={classes.heroImg}
          />
        )}

        {children}
      </section>
      {homePage && (
        <div
          className={clsx(
            classes.initialOverlay,
            overlayFadeOut && classes.overlayFadeOut
          )}
        >
          <CenteredLogo logoFluid={data.logo.childImageSharp.fluid} />
        </div>
      )}
    </>
  )
}

export default HeroSection

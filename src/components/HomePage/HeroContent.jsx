import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'

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
  heroContent: {
    position: 'absolute',
    bottom: '21rem',
    left: '13rem',
    width: '79rem',
    ...theme.custom.themedBorderAndPadding,
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'white',
    textShadow: 'black 0px 0px 10px'
  },
  title: {
    ...theme.custom.title1,
    color: 'white',
    marginBottom: '3.5rem',
    textShadow: 'black 0px 0px 5px',
    '&::before': {
      ...theme.custom.themedArrowForBefore,
      top: '1.6em'
    }
  },
  button: {
    // textShadow: 'black 0px 0px 5px',
    border: '1px solid white',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    width: 'max-content',
    lineHeight: '4rem',
    padding: '0 4.5rem',
    transition: '0.3s all',
    letterSpacing: '3px',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }
}))

const HeroContent = ({ subtitle, title, buttonText, url }) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Typography variant='body1' gutterBottom className={classes.subtitle}>
        {subtitle}
      </Typography>
      <Typography variant='h2' className={classes.title}>
        {title}
      </Typography>
      <a href={url} className={classes.button}>
        {buttonText}
      </a>
    </div>
  )
}

export default HeroContent

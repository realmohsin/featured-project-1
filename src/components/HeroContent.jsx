import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  heroContent: {
    position: 'absolute',
    bottom: '21rem',
    left: '13rem',
    maxWidth: '79rem',
    ...theme.custom.themedBorderAndPadding,
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '74rem'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '54rem',
      left: '6rem',
      bottom: '14rem'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '50rem',
      left: '4rem'
    },
    '@media (max-width: 495px)': {
      left: '3rem',
      maxWidth: '40rem',
      bottom: '12rem'
    },
    '@media (max-width: 410px)': {
      left: '2rem',
      maxWidth: '35rem',
      bottom: '10rem'
    },
    '@media (max-width: 360px)': {
      left: '1rem',
      maxWidth: '30rem',
      bottom: '10rem'
    }
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
      top: '2.8rem',
      [theme.breakpoints.down('xs')]: {
        top: '2.2rem'
      }
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.8rem !important'
    },
    '@media (max-width: 360px)': {
      fontSize: '2.4rem !important'
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
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
      padding: '0 3rem',
      letterSpacing: '2px'
    }
  }
}))

const HeroContent = ({ subtitle, title, buttonText, url, extraClass }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.heroContent, extraClass)}>
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

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'
import { Link } from 'gatsby'
import { GoArrowRight } from 'react-icons/go'
import { FaArrowRight } from 'react-icons/fa'

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
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: '5.7rem',
    padding: '0 4rem',
    border: 'none',
    letterSpacing: '3px',
    wordSpacing: '1px',
    width: 'max-content',
    position: 'relative',
    '&:hover > span': {
      transform: 'translateX(-8%)'
    },
    '&:hover > #arrow': {
      opacity: 1,
      transform: 'translateX(80%)'
    }
  },
  arrow: {
    fontSize: '2.5rem',
    position: 'absolute',
    top: '27%',
    right: '15%',
    opacity: 0,
    transition: '0.4s all'
  },
  textSpan: {
    display: 'block',
    transition: '0.4s all'
  }
}))

const Button = ({ isLink, to, alt, handleClick, text, extraClass }) => {
  const theme = useTheme()
  const classes = useStyles()

  if (isLink) {
    return (
      <Link to={to} alt={alt} className={clsx(classes.button, extraClass)}>
        <span className={classes.textSpan}>{text}</span>
        <GoArrowRight className={classes.arrow} id='arrow' />
      </Link>
    )
  }

  return (
    <button onClick={handleClick} className={clsx(classes.button, extraClass)}>
      {text} <GoArrowRight className={classes.arrow} id='arrow' />
    </button>
  )
}

export default Button

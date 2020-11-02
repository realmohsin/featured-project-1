import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'

// children should be paragraph elements

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
  themedContentBox: {
    ...theme.custom.themedBorderAndPadding,
    width: '60rem',
    marginBottom: '8rem',
    '& p:first-of-type::before': {
      ...theme.custom.themedArrowForBefore,
      transform: 'translateY(1.9rem)'
    }
  },
  title: {
    ...theme.custom.title2,
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 300,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '3rem'
  },
  textShadow: {
    textShadow: 'black 0px 0px 3px',
    color: 'white'
  }
}))

const ThemedContentBox = ({
  title,
  subtitle,
  children,
  onDarkBg,
  extraClass
}) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <div className={clsx(classes.themedContentBox, extraClass)}>
      {subtitle && (
        <Typography
          variant='h5'
          gutterBottom
          className={clsx(classes.subtitle, onDarkBg && classes.textShadow)}
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant='h2'
        className={clsx(classes.title, onDarkBg && classes.textShadow)}
      >
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default ThemedContentBox

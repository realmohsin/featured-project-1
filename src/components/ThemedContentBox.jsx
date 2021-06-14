import React from 'react'
import clsx from 'clsx'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// children should be paragraph elements

const useStyles = makeStyles(theme => ({
  themedContentBox: {
    ...theme.custom.themedBorderAndPadding,
    maxWidth: '60rem',
    marginBottom: '8rem',
    '& p:first-of-type::before': {
      ...theme.custom.themedArrowForBefore,
      transform: 'translateY(1.9rem)'
    }
  },
  title: {
    ...theme.custom.title2,
    marginBottom: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.8rem'
    }
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
  },
  textShadowParas: {
    '& p': {
      textShadow: 'black 0px 0px 15px'
    }
  },
  headerImg: {
    maxWidth: '30rem',
    marginBottom: '2rem'
  }
}))

const ThemedContentBox = ({
  title,
  subtitle,
  headerImgFluid,
  children,
  onDarkBg,
  extraClass,
  titleAs
}) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.themedContentBox,
        extraClass,
        onDarkBg && classes.textShadowParas
      )}
    >
      {subtitle && (
        <Typography
          variant='h5'
          gutterBottom
          className={clsx(classes.subtitle, onDarkBg && classes.textShadow)}
        >
          {subtitle}
        </Typography>
      )}

      {headerImgFluid && (
        <GatsbyImage
          image={getImage(headerImgFluid)}
          alt='Think Safe, Work Safe, Live Safe'
          className={classes.headerImg}
        />
      )}

      {title && (
        <Typography
          variant={titleAs || 'h2'}
          className={clsx(classes.title, onDarkBg && classes.textShadow)}
        >
          {title}
        </Typography>
      )}

      {children}
    </div>
  )
}

export default ThemedContentBox

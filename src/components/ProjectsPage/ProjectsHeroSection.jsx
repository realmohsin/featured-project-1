import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

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
  projectsHeroSection: {
    padding: '12rem 0 8rem',
    background: theme.palette.secondary.main,
    color: 'white'
  },
  extraThemedBox: {
    width: '125rem',
    '& > p': {
      fontSize: '3.2rem',
      fontWeight: 'bold',
      lineHeight: 1.4
    },
    '& p:first-of-type::before': {
      transform: 'translateY(2.9rem)'
    }
  }
}))

const ProjectsHeroSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.projectsHeroSection}>
      <Container>
        <ThemedContentBox
          subtitle='Build Different'
          extraClass={classes.extraThemedBox}
        >
          <Typography variant='body1' gutterBottom>
            From our teams of skilled project managers and tradesmen, to our
            approach and the detailed processes that make it all possible…
          </Typography>
          <Typography variant='body1' gutterBottom>
            We look at construction a little differently.
          </Typography>
        </ThemedContentBox>
      </Container>
    </section>
  )
}

export default ProjectsHeroSection

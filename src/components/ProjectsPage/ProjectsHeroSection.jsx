import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  projectsHeroSection: {
    padding: '12rem 0 8rem',
    background: theme.palette.secondary.main,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      padding: '8rem 0 6rem'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '6rem'
    }
  },
  extraThemedBox: {
    maxWidth: '125rem',
    '& > p': {
      fontSize: '3.2rem',
      fontWeight: 'bold',
      lineHeight: 1.4,
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.6rem'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '2.3rem'
      }
    },
    '& p:first-of-type::before': {
      transform: 'translateY(2.9rem)'
    }
  }
}))

const ProjectsHeroSection = props => {
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

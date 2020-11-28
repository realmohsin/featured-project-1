import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import aboutTraditionBg from '../../assets/images/about-page/about-tradition-bg.jpg'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  traditionSection: {
    paddingTop: '21rem',
    backgroundImage: `url(${aboutTraditionBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '96.3rem',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      height: '90rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '85rem',
      paddingTop: '12rem'
    },
    '@media (max-width: 371px)': {
      paddingTop: '10rem',
      height: '90rem'
    },
    '@media (max-width: 325px)': {
      height: '95rem'
    }
  },
  extraThemedBox: {
    [theme.breakpoints.down('md')]: {
      margin: 'auto'
    }
  }
}))

const TraditionSection = props => {
  const classes = useStyles()

  return (
    <section className={classes.traditionSection}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ThemedContentBox
              title='A Proud Tradition'
              subtitle="It's Deeper than Roots"
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                Schimenti Construction, founded in 1994 by Matthew Schimenti,
                represents the third generation of a family that can trace its
                roots in the construction industry to the 1960s.
              </Typography>
              <Typography variant='body1' gutterBottom>
                Matthew Schimenti founded Schimenti Construction in 1994.
                Matthew’s father, Donald, had apprenticed with his own father,
                Michael, in the 1960’s prior to founding AMD Construction in
                1971. Michael Schimenti was an architect who designed and built
                large scale projects, office towers, schools and apartment
                complexes with his partner, Max Wechsler.
              </Typography>
              <Typography variant='body1' gutterBottom>
                With exceptional family history in the construction industry,
                Matt used his extensive knowledge and experience to create a
                construction company focused on quality. His passion for
                excellence, communication and timeliness has resulted in a
                company that provides the highest quality of service to the
                retail and construction industries.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item xs={0} sm={0} md={0} lg={6} />
        </Grid>
      </Container>
    </section>
  )
}

export default TraditionSection

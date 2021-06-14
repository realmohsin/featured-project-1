import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import { Parallax } from 'react-parallax'
import parallaxBg from '../../assets/images/home-page/parallax-bg.jpg'
import Button from '../Button'
import ThemedContentBox from '../ThemedContentBox'
import '../../styles/parallax.css'

const useStyles = makeStyles(theme => ({
  aboutSection: {
    height: '111rem',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      height: '110rem'
    }
  },
  parallax: {
    height: '100%'
  },
  gridContainer: {
    marginTop: '32rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '15rem'
    }
  },
  extraThemedBox: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  },
  extraButtonClass: {
    [theme.breakpoints.down('sm')]: {
      margin: ' 8rem auto 0'
    }
  }
}))

const AboutSection = props => {
  const classes = useStyles()

  return (
    <section className={classes.aboutSection}>
      <Parallax
        strength={300}
        className={classes.parallax}
        bgImage={parallaxBg}
      >
        <Container>
          <Grid container className={classes.gridContainer}>
            <Grid item sm={0} lg={6} />
            <Grid item sm={12} lg={6} className={classes.rightSide}>
              <ThemedContentBox
                title={
                  <>
                    We Look At <br /> Construction Differently
                  </>
                }
                subtitle='Pre-Construction'
                onDarkBg
                extraClass={classes.extraThemedBox}
              >
                <Typography variant='body1' gutterBottom>
                  We’ve spent decades building an enviable reputation as one of
                  the nation’s leading general contractors. National retail and
                  commercial clients continually rely on us to meet – and exceed
                  – their schedules, specifications and budgets on each project
                  we are assigned. This has helped us grow successful
                  relationships with some of the most prominent brands in the
                  world, such as Bed Bath & Beyond, GAP, Kohl’s, Massimo Dutti,
                  Victoria’s Secret and ZARA.
                </Typography>
                <Typography variant='body1' gutterBottom>
                  With a staff of over 100 trade professionals, a field-tested
                  project management program and a sound business model, our
                  proprietary construction process delivers exceptional results
                  – project after project.
                </Typography>
              </ThemedContentBox>
              <Button
                isLink
                text='More About Us'
                to='/about'
                alt='About Page'
                extraClass={classes.extraButtonClass}
              />
            </Grid>
          </Grid>
        </Container>
      </Parallax>
    </section>
  )
}

export default AboutSection

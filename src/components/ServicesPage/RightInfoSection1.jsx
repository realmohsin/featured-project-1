import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  rightInfoSection1: {
    paddingTop: '23rem',
    // backgroundImage: `url(${rightInfoSection1Bg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    height: '84rem',
    color: 'white',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('sm')]: {
      height: '80rem',
      paddingTop: '22rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '84rem',
      paddingTop: '16rem',
      backgroundPosition: '100% 50%'
    }
  },
  bgImg: {
    zIndex: -10
  },
  extraThemedBox: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  }
}))

const RightInfoSection1 = props => {
  const classes = useStyles()

  return (
    <section className={classes.rightInfoSection1}>
      <StaticImage
        src='../../assets/images/services-page/right-info-section-1-bg.jpg'
        alt='Background'
        className={classes.bgImg}
        objectPosition='0% 0%'
      />
      <Container>
        <Grid container>
          <Grid item sm={0} md={6} />
          <Grid item sm={12} md={6}>
            <ThemedContentBox
              title='Designing. Building. Delivering.'
              subtitle='Design / Build'
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                Minimizing owner risk and reducing the delivery schedule by
                overlapping the design and construction phases requires a team
                of construction professionals who understand how to effectively
                combine design, permit, and construction schedules. Our
                design/build team not only understands the process, they
                appreciate the intricacies of pulling critical schedules
                together in a coherent and economical manner.
              </Typography>
              <Typography variant='body1' gutterBottom>
                This system has several positive results including guaranteed
                outcome, turnkey solution, single-source accountability,
                fast-track option, and a guaranteed maximum price.
              </Typography>
            </ThemedContentBox>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default RightInfoSection1

import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import leftInfoSection2Bg from '../../assets/images/services-page/left-info-section-2-bg.jpg'

const useStyles = makeStyles(theme => ({
  leftInfoSection2: {
    paddingTop: '35rem',
    backgroundImage: `url(${leftInfoSection2Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '86rem',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      height: '78rem',
      paddingTop: '22rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '70rem',
      paddingTop: '18rem',
      backgroundPosition: '100% 50%'
    }
  },
  extraThemedBox: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  }
}))

const LeftInfoSection2 = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.leftInfoSection2}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <ThemedContentBox
              title='Building from Start to Finish'
              subtitle='General Construction'
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                From inception to completion, our construction management group
                makes sure the overall planning, coordination, and control will
                result in a project that meets its budget, deadline, and quality
                standards. We provide pre-planning, design, construction,
                engineering, and management guidance that delivers the best
                possible results.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item sm={0} md={6} />
        </Grid>
      </Container>
    </section>
  )
}

export default LeftInfoSection2

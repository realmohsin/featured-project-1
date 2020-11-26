import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import subcontractorSectionBg from '../../assets/images/contact-page/contact-subcontractors-bg.jpg'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  subcontractorSection: {
    paddingTop: '24rem',
    backgroundImage: `url(${subcontractorSectionBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '93.4rem',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '14rem',
      height: '88rem'
    }
  },
  extraThemedBox: {
    [theme.breakpoints.down('xs')]: {
      marginRight: '1.5rem'
    }
  },
  extraButtonClass: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  }
}))

const SubcontractorSection = () => {
  const classes = useStyles()

  return (
    <section className={classes.subcontractorSection}>
      <Container>
        <Grid container>
          <Grid item xs={0} md={0} lg={6} />
          <Grid item xs={12} md={12} lg={6}>
            <ThemedContentBox
              title='Strong Subcontractor Relationships Equal Success'
              subtitle='Partnerships'
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                Our subcontractors are the backbone of our business. We make a
                significant investment in order to secure strong and mutually
                rewarding relationships with our subcontractors. These
                relationships help maintain Schimenti as a “best-in-class”
                general contractor. We take great pride in the strength of our
                subcontractor alliances.
              </Typography>
              <Typography variant='body1' gutterBottom>
                Subcontractors who retain dedicated and skilled staff,
                incorporate best practice processes, and maintain a high level
                of commitment to working together collaboratively are rewarded
                with repeat business.
              </Typography>
            </ThemedContentBox>
            <Button
              isLink
              text='Inquire Now'
              extraClass={classes.extraButtonClass}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SubcontractorSection

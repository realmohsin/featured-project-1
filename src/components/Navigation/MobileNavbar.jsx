import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles, Grid } from '@material-ui/core'
import Toggle from './Toggle'

const useStyles = makeStyles(theme => ({
  mobileNavbar: {
    backgroundColor: theme.palette.secondary.dark,
    padding: '0.95rem',
    position: 'fixed',
    top: 0,
    boxShadow: theme.shadows[3],
    zIndex: 100
  },
  ctaButton: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.2,
      marginLeft: '1rem'
    }
  },
  logoContainer: {
    height: '100%',
    width: '10rem'
  }
}))

const MobileCtaNavbar = ({ toggleSideDrawer }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      className={classes.mobileNavbar}
    >
      <div className={classes.logoContainer}>
        <StaticImage
          src='../../assets/images/common/logo.png'
          alt='Schimenti Logo'
          className={classes.logo}
        />
        {/* <Img fluid={data.logo.childImageSharp.fluid} alt='Schimenti Logo' /> */}
      </div>
      <Toggle onToggle={toggleSideDrawer} />
    </Grid>
  )
}

export default MobileCtaNavbar

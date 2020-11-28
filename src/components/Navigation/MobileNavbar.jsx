import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
  const data = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 280, maxHeight: 104) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      className={classes.mobileNavbar}
    >
      <div className={classes.logoContainer}>
        <Img fluid={data.logo.childImageSharp.fluid} alt='Schimenti Logo' />
      </div>
      <Toggle onToggle={toggleSideDrawer} />
    </Grid>
  )
}

export default MobileCtaNavbar

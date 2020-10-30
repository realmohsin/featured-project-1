import React, { useState, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import footerBg from '../assets/images/common/footer-bg.jpg'
import { GoLogoGist } from 'react-icons/go'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

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
  footer: {
    height: '57rem',
    backgroundImage: `url(${footerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    color: theme.palette.common.gray1,
    padding: '16rem 0'
  },
  topDiv: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoContainer: {
    width: '18.5rem'
  },
  authLinksContainer: {
    display: 'flex'
  },
  authLink: {
    marginRight: '8rem',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    transition: '0.4s all',
    '&:hover': {
      color: 'white'
    }
  },
  gridContainer: {
    marginTop: '5rem'
  },
  addressTitle: {
    fontSize: '1.55rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem'
  },
  address: {
    color: theme.palette.common.gray1,
    textTransform: 'uppercase',
    fontSize: '1.3rem',
    // lineHeight: '1.4',
    fontWeight: 300
  },
  socialIconsContainer: {
    marginTop: '5rem',
    width: 'max-content',
    marginLeft: 'auto'
  },
  socialIcon: {
    fontSize: '3rem',
    marginLeft: '3rem',
    transition: '0.4s all',
    cursor: 'pointer',
    '&:hover': {
      color: 'white'
    }
  },
  bottomDiv: {
    marginTop: '7rem',
    width: 'max-content',
    marginLeft: 'auto',
    fontSize: '1.25rem'
  },
  privacyLink: {
    display: 'inline-block',
    marginRight: '3rem',
    textTransform: 'uppercase',
    transition: '0.4s all',
    '&:hover': {
      color: 'white'
    }
  }
}))

const Footer = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      footerBg: file(name: { eq: "footer-bg" }) {
        childImageSharp {
          fluid(maxWidth: 2400, maxHeight: 1212) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    // <BackgroundImage
    //   Tag='section'
    //   className={classes.footer}
    //   fluid={data.footerBg.childImageSharp.fluid}
    // >
    <section className={classes.footer}>
      <Container>
        <div className={classes.topDiv}>
          <div className={classes.authLinksContainer}>
            <Link to='/' className={classes.authLink}>
              Employee Login
            </Link>
            <Link to='/' className={classes.authLink}>
              Subcontractors
            </Link>
          </div>
          <div className={classes.logoContainer}>
            <Img fluid={data.logo.childImageSharp.fluid} alt='logo' />
          </div>
        </div>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={3}>
            <Typography variant='body1' className={classes.addressTitle}>
              New York
            </Typography>
            <Typography variant='body1' className={classes.address}>
              565 Lexington Avenue <br />
              New York, New York 10021 <br />
              212.245.9200
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant='body1' className={classes.addressTitle}>
              Los Angeles
            </Typography>
            <Typography variant='body1' className={classes.address}>
              2445 Mccabe Way <br />
              Irvine, California 92512 <br />
              949.215.2100
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant='body1' className={classes.addressTitle}>
              Connecticut
            </Typography>
            <Typography variant='body1' className={classes.address}>
              650 Danbury Road <br />
              Ridgefield, Connecticut 06877 <br />
              212.245.2000
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <div className={classes.socialIconsContainer}>
              <FaFacebookF className={classes.socialIcon} />
              <FaInstagram className={classes.socialIcon} />
              <FaYoutube className={classes.socialIcon} />
              <FaLinkedin className={classes.socialIcon} />
            </div>
          </Grid>
        </Grid>
        <div className={classes.bottomDiv}>
          <Link to='/' className={classes.privacyLink}>
            Privacy Policy
          </Link>
          <span>© SCHIMENTI CONSTRUCTION COMPANY, LLC</span>
        </div>
      </Container>
    </section>

    // </BackgroundImage>
  )
}

export default Footer

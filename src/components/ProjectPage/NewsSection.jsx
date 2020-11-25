import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Button from '../Button'

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
  newsSection: {
    padding: '12rem 0',
    height: '96rem',
    color: 'white'
  },
  gridContainer: {
    padding: '12rem 0'
    // marginTop: '32rem'
  },
  rightSide: {
    // display: 'flex',
    // alignItems: 'center',
    // height: '100%'
  },
  contentBox: {
    // ...theme.custom.themedBorderAndPadding,
    width: '60rem',
    marginBottom: '8rem'
  },
  aboutTitle: {
    ...theme.custom.title2,
    textShadow: 'black 0px 0px 3px',
    marginBottom: '2rem'
  },
  subtitle: {
    textTransform: 'uppercase',
    textShadow: 'black 0px 0px 3px',
    fontWeight: 300,
    letterSpacing: '2px',
    fontSize: '1.4rem',
    marginBottom: '3rem'
  },
  paragraph: {
    textShadow: 'black 0px 0px 5px',
    fontSize: '1.7rem'
    // '&:first-of-type::before': {
    //   ...theme.custom.themedArrowForBefore,
    //   transform: 'translateY(1.9rem)'
    // }
  },
  newsLogo: {
    maxWidth: '18rem'
  }
}))

const NewsSection = ({
  newsLogoImgFluid,
  newsBgImgFluid,
  newsTitle,
  newsSubtitle,
  newsParagraph,
  newsButton,
  newsButtonLink
}) => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      optionalName: file(name: { eq: "services-safety" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 176, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [state, setState] = useState('initial-state')

  useEffect(() => {
    return () => {}
  }, [])

  const atXsDown = useMediaQuery(theme.breakpoints.down('xs')) // below 600
  const atMdUp = useMediaQuery(theme.breakpoints.up('md')) // 960 and above
  const atSmOnly = useMediaQuery(theme.breakpoints.only('sm')) // only between 600 and 959
  const betweenSmLg = useMediaQuery(theme.breakpoints.between('sm', 'lg')) // only between 600 and 1919

  return (
    <BackgroundImage
      Tag='section'
      className={classes.newsSection}
      fluid={newsBgImgFluid}
    >
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={0} md={6}>
            <Img
              fluid={newsLogoImgFluid}
              alt='News Company Logo'
              className={classes.newsLogo}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.rightSide}>
            <div className={classes.contentBox}>
              <Typography variant='h3' className={classes.subtitle}>
                In the News
              </Typography>
              <Typography variant='h2' className={classes.aboutTitle}>
                {newsTitle}
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.paragraph}
              >
                {newsParagraph}
              </Typography>
            </div>
            <Button isLink text='More About Us' to='/' alt='About Page' />
          </Grid>
        </Grid>
      </Container>
    </BackgroundImage>
  )
}

export default NewsSection

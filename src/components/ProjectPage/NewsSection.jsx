import React from 'react'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  newsSection: {
    padding: '12rem 0',
    height: '96rem',
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
      height: '85rem',
      padding: '9rem 0'
    }
  },
  bgImg: {
    zIndex: -10
  },
  gridContainer: {
    padding: '12rem 0'
  },
  rightSide: {},
  contentBox: {
    width: '60rem',
    marginBottom: '8rem',
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    }
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
  const classes = useStyles()

  return (
    <section className={classes.newsSection}>
      <GatsbyImage
        image={getImage(newsBgImgFluid)}
        alt='Background'
        className={classes.bgImg}
        objectPosition='0% 0%'
      />
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={0} md={6}>
            <GatsbyImage
              image={getImage(newsLogoImgFluid)}
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
    </section>
  )
}

export default NewsSection

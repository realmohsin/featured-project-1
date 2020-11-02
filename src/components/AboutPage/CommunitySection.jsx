import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import Button from '../Button'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'

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
  communitySection: {
    height: '86rem'
  },
  leftSide: {
    paddingTop: '14rem',
    paddingLeft: '18rem'
  },
  rightSide: {
    position: 'relative',
    height: '86rem'
  },
  communityImgContainer: {
    height: '69.2rem',
    width: '100%'
  },
  quoteBox: {
    position: 'absolute',
    bottom: '4rem',
    left: '15%',
    width: '39rem',
    height: '30rem',
    padding: '3.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    '&::before': {
      content: '""',
      backgroundImage: `url(${sectionBg2})`,
      backgroundPosition: 'top right',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      zIndex: -1,
      opacity: 0.75
    }
  },
  quoteText: {
    marginBottom: '2.2rem'
  },
  miniThemeBox: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: '2.4rem'
  },
  clientName: {
    fontWeight: 'bold'
  }
}))

const CommunitySection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      aboutCommunity: file(name: { eq: "about-community" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 728, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log('data:', data)

  return (
    <section className={classes.communitySection}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.leftSide}>
          <ThemedContentBox
            title='Schimenti Spirit'
            subtitle='Community Commitment'
          >
            <Typography variant='body1'>
              The Schimenti spirit reaches out beyond our walls. That spirit
              encourages a sense of collaboration and appreciation within our
              communities and across the nation where we are dedicated to being
              a responsible and supportive corporate citizen.
            </Typography>
            <Typography variant='body1'>
              As a company and as individual employees, the people of Schimenti
              are dedicated to being good neighbors through ongoing community
              involvement, sponsorships, annual events with Habitat for
              Humanity, local schools, neighborhood outreach and peer mentoring
              programs.
            </Typography>
          </ThemedContentBox>
          <Button isLink to='/' text='Building Our Communities' />
        </Grid>
        <Grid item xs={12} md={6} className={classes.rightSide}>
          <div className={classes.communityImgContainer}>
            <Img
              fluid={data.aboutCommunity.childImageSharp.fluid}
              alt='Community'
              // className={classes.communityImg}
            />
          </div>

          <div className={classes.quoteBox}>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.quoteText}
            >
              “We possess a unique set of skills and the ability to build more
              than structures – we can improve and enhance the lives of others.
              Because of this, it is important for us to constantly give back to
              the communities around us.”
            </Typography>
            <div className={classes.miniThemeBox}>
              <Typography variant='body1' className={classes.clientName}>
                Joseph Rotondo
              </Typography>
              <Typography variant='body1' className={classes.clientInfo}>
                Executive Vice President <br />
                New York, NY
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default CommunitySection

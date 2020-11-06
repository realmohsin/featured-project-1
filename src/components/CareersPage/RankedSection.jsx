import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
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
  rankedSection: {
    padding: '14rem 0'
  },
  extraThemedBoxClass: {
    width: '75rem'
  },
  topRightSide: {
    paddingLeft: '3rem'
  },
  statGridContainer: {
    marginBottom: '7rem'
  },
  statGridItem: {
    paddingRight: '7rem'
  },
  statPercent: {
    color: theme.palette.primary.main,
    fontSize: '5.4rem',
    fontWeight: 'bold'
  },
  statText: {
    marginTop: '-1rem'
  }
}))

const RankedSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      quote: file(name: { eq: "quote-bubble" }) {
        childImageSharp {
          fluid(maxWidth: 1526, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.rankedSection}>
      <Container>
        <Grid container className={classes.topGridContainer}>
          <Grid item xs={12} md={8}>
            <ThemedContentBox
              title={
                <>
                  NYC & CT Offices Ranked <br /> Best Places to Work 2019
                </>
              }
              extraClass={classes.extraThemedBoxClass}
            >
              <Typography variant='body1' gutterBottom>
                Schimenti’s New York and Connecticut offices were recognized by
                the New York State Society for Human Resource Management
                (NYS-SHRM) and the Hartford Business Journal as excellent places
                to advance your career. Results were based on workplace
                policies, practices and philosophy, as well as an employee
                survey on their experiences working for Schimenti.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item xs={12} md={4} className={classes.topRightSide}>
            <Img fluid={data.quote.childImageSharp.fluid} alt='quote' />
          </Grid>
        </Grid>
        <Grid container className={classes.statGridContainer}>
          <Grid item xs={12} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              95%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              think senior leaders live the core values of the company.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              98%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              are proud to be a part of the Schimenti Team.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              100%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              agree safety is a top priority. <br /> We think safe, work safe,
              live safe.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              95%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              plan to continue their career at Schimenti long-term.
            </Typography>
          </Grid>
        </Grid>
        <Button asLink text='Connect with our Recruiter' />
      </Container>
    </section>
  )
}

export default RankedSection

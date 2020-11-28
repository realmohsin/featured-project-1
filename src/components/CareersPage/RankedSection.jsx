import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  rankedSection: {
    padding: '14rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '10rem 0'
    }
  },
  extraThemedBoxClass: {
    // width: '75rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '1rem'
    }
  },
  topRightSide: {
    paddingLeft: '3rem',
    [theme.breakpoints.down('md')]: {
      margin: '3rem 0 8rem'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0rem 0 6rem'
    }
  },
  quoteImg: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '75%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '105%',
      transform: 'translateX(-2.2rem)'
    }
  },
  statGridContainer: {
    marginBottom: '7rem'
  },
  statGridItem: {
    paddingRight: '2rem',
    paddingLeft: '5rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '4rem'
    }
  },
  statPercent: {
    color: theme.palette.primary.main,
    fontSize: '5.4rem',
    fontWeight: 'bold'
  },
  statText: {
    marginTop: '-1rem'
  },
  extraButtonClass: {
    [theme.breakpoints.down('md')]: {
      margin: '-2rem auto 0'
    }
  }
}))

const RankedSection = props => {
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
            <Img
              fluid={data.quote.childImageSharp.fluid}
              alt='quote'
              className={classes.quoteImg}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.statGridContainer}>
          <Grid item xs={12} sm={6} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              95%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              think senior leaders live the core values of the company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              98%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              are proud to be a part of the Schimenti Team.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              100%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              agree safety is a top priority. <br /> We think safe, work safe,
              live safe.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.statGridItem}>
            <Typography variant='body1' className={classes.statPercent}>
              95%
            </Typography>
            <Typography variant='body1' className={classes.statText}>
              plan to continue their career at Schimenti long-term.
            </Typography>
          </Grid>
        </Grid>
        <Button
          asLink
          text='Connect with our Recruiter'
          extraClass={classes.extraButtonClass}
        />
      </Container>
    </section>
  )
}

export default RankedSection

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import jobListings from '../../data/jobListings'

const useStyles = makeStyles(theme => ({
  exploreSection: {
    padding: '14rem 0 20rem',
    [theme.breakpoints.down('md')]: {
      padding: '12rem 0 10rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10rem 0'
    }
  },
  leftSide: {
    paddingRight: '5rem',
    [theme.breakpoints.down('md')]: {
      paddingRight: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0'
    }
  },
  rightSide: {
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0'
    }
  },
  title: {
    fontSize: '1.4rem',
    margin: '3rem 0 4rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  jobListings: {
    borderTop: '2px solid #808085',
    marginTop: '3rem',
    paddingTop: '3rem'
  },
  jobListing: {
    borderBottom: '1px solid #ddd',
    padding: '1.6rem 0'
  },
  role: {
    color: theme.palette.primary.main,
    fontSize: '1.6rem',
    fontWeight: 'bold'
  },
  joinMessage: {
    fontSize: '4.1rem',
    marginTop: '5rem',
    marginBottom: '6rem',
    fontWeight: 'bold',
    lineHeight: '1.4'
  },
  rankMessage: {
    marginTop: '5rem',
    fontWeight: 'bold',
    fontSize: '2.7rem'
  },
  exploreCareersImg: {
    width: '80%',
    marginBottom: '10rem',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem auto 10rem',
      width: '70%'
    }
  },
  extraThemedBox: {
    width: '50rem',
    '& h4': {
      fontSize: '3.4rem'
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      marginRight: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 12rem'
    }
  },
  recruiterImg: {
    width: '100%'
  }
}))

const ExploreSection = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      explore1: file(name: { eq: "explore-1" }) {
        childImageSharp {
          fluid(maxWidth: 457, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      explore2: file(name: { eq: "explore-2" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.exploreSection}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.leftSide}>
            <Typography variant='h3' className={classes.title}>
              Explore Careers
            </Typography>
            <Img
              fluid={data.explore1.childImageSharp.fluid}
              className={classes.exploreCareersImg}
            />
            <ThemedContentBox
              title='Beginning Your Career in Construction'
              extraClass={classes.extraThemedBox}
              titleAs='h4'
            >
              <Typography variant='body1' gutterBottom>
                Schimenti Construction Company believes in providing that
                experience opportunity for students with degrees in construction
                management, engineering, architecture and other related
                programs.
                <b>
                  We offer internships within project management, field
                  operations, and estimating.
                </b>
              </Typography>
              <Typography variant='body1' gutterBottom>
                As an intern with Schimenti you will be able to learn, develop,
                and master useful skills such as project management, problem
                solving, research and data analysis, effective oral and written
                communications, teamwork and leadership, attention to detail,
                time management and organization, self-confidence, and a sense
                of responsibility.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item xs={12} md={6} className={classes.rightSide}>
            <Typography variant='h3' className={classes.title}>
              Connect with our Recruiter
            </Typography>
            <Img
              fluid={data.explore2.childImageSharp.fluid}
              className={classes.recruiterImg}
            />
            <Typography variant='body1' className={classes.joinMessage}>
              Join Our Team of Dynamic and Talented Professionals
            </Typography>
            <ul className={classes.jobListings}>
              {jobListings.map(listing => (
                <li className={classes.jobListing}>
                  <span className={classes.role}>{listing.role}</span> -{' '}
                  {listing.location}
                </li>
              ))}
            </ul>
            <Typography variant='body1' className={classes.rankMessage}>
              Ranked Best Places to Work 2019 in New York & Connecticut
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ExploreSection

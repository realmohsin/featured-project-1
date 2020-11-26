import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import { IoMdArrowDropright } from 'react-icons/io'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

const useStyles = makeStyles(theme => ({
  safetySection: {
    padding: '14rem 0 19rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    [theme.breakpoints.down('sm')]: {
      padding: '12rem 0 15rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10rem 0 9rem'
    }
  },
  safetyItem: {
    marginBottom: '0.4rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.2rem'
    }
  },
  arrowIcon: {
    transform: 'translateY(2px)'
  },
  safetyImgContainer: {
    width: '30rem',
    marginLeft: 'auto',
    marginRight: '6rem',
    [theme.breakpoints.down('md')]: {
      margin: '10rem auto'
    }
  },
  safetyImg: {},
  extraThemedBoxClass: {
    width: '80rem',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      marginRight: '5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '1.3rem'
    }
  }
}))

const SafetySection = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      servicesSafety: file(name: { eq: "services-safety" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 176, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.safetySection}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} className={classes.leftGridItem}>
            <ThemedContentBox
              title='Before Anything... Safety'
              subtitle='Priority One'
              extraClass={classes.extraThemedBoxClass}
            >
              <Typography variant='body1' gutterBottom>
                The safety and well-being of our employees, subcontractors,
                clients and the general public, is the most critical component
                of our business. Our safety goal is to have zero injuries and
                zero time loss due to accidents. To achieve this we’ve
                implemented numerous programs and standards including:
              </Typography>

              <Typography variant='body1' className={classes.safetyItem}>
                <IoMdArrowDropright className={classes.arrowIcon} /> Require
                personal protective equipment on every site
              </Typography>

              <Typography variant='body1' className={classes.safetyItem}>
                <IoMdArrowDropright className={classes.arrowIcon} /> Employ AGC
                as our independent safety auditing company
              </Typography>

              <Typography variant='body1' className={classes.safetyItem}>
                <IoMdArrowDropright className={classes.arrowIcon} /> All
                superintendents have 30 HR OSHA training
              </Typography>

              <Typography variant='body1' className={classes.safetyItem}>
                <IoMdArrowDropright className={classes.arrowIcon} /> First
                Aid/CPR/AED training from American Red Cross
              </Typography>

              <Typography variant='body1' className={classes.safetyItem}>
                <IoMdArrowDropright className={classes.arrowIcon} /> Created
                "Safe on Purpose" initiative
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item xs={12} md={4} className={classes.rightGridItem}>
            <div className={classes.safetyImgContainer}>
              <Img
                fluid={data.servicesSafety.childImageSharp.fluid}
                alt='Think Safe, Work Safe, Live Safe'
                className={classes.safetyImg}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SafetySection

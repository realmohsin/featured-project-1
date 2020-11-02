import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import aboutSnapshotBg from '../../assets/images/about-page/about-snapshot-bg.jpg'

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
  snapshotSection: {
    padding: '8rem 0 12rem',
    backgroundImage: `url(${aboutSnapshotBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '91rem',
    color: 'white'
  },
  gridItem: {
    marginBottom: '5rem',
    paddingRight: '4rem',
    paddingLeft: '6rem'
  },
  icon: {
    width: '10rem',
    marginBottom: '2rem'
  },
  topText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  bottomText: {
    fontSize: '1.3rem'
  },
  newsTitle: {
    fontSize: '1.3rem',
    margin: '0rem 0 14rem',
    paddingLeft: '0rem',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    wordSpacing: '1px'
  }
}))

const snapshotCardData = [
  {
    imgName: 'snapshot-1',
    topText: '$285MM',
    bottomText: 'Annual Revenue'
  },
  {
    imgName: 'snapshot-2',
    topText: '130%+',
    bottomText: 'Increase in annual growth over the last five years'
  },
  {
    imgName: 'snapshot-3',
    topText: '95%+',
    bottomText:
      'More than 95% of our customers would recommend Schimenti to industry peers and colleagues'
  },
  {
    imgName: 'snapshot-4',
    topText: '9/10',
    bottomText:
      'More than 9 out of 10 customers retain Schimenti for new projects'
  },
  {
    imgName: 'snapshot-5',
    topText: '200+',
    bottomText: 'Employees strong and growing'
  },
  {
    imgName: 'snapshot-6',
    topText: '30+',
    bottomText: 'Project Managers on Staff'
  },
  {
    imgName: 'snapshot-7',
    topText: '55+',
    bottomText: 'Field Supervisors on Staff'
  },
  {
    imgName: 'snapshot-8',
    topText: '50+',
    bottomText: 'Trade Laborers on Staff'
  }
]

const SnapshotCard = ({ imgFluid, topText, bottomText }) => {
  const classes = useStyles()
  return (
    <div className={classes.snapshotItem}>
      <Img fluid={imgFluid} className={classes.icon} />
      <p className={classes.topText}>{topText}</p>
      <p className={classes.bottomText}>{bottomText}</p>
    </div>
  )
}

const SnapshotSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      snapshot1: file(name: { eq: "snapshot-1" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 430, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot2: file(name: { eq: "snapshot-2" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot3: file(name: { eq: "snapshot-3" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot4: file(name: { eq: "snapshot-4" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot5: file(name: { eq: "snapshot-5" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot6: file(name: { eq: "snapshot-6" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot7: file(name: { eq: "snapshot-7" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapshot8: file(name: { eq: "snapshot-8" }) {
        childImageSharp {
          fluid(maxWidth: 110, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const changeImgName = imgName => imgName.split('-').join('')

  return (
    <section className={classes.snapshotSection}>
      <Container>
        <Typography variant='h2' className={classes.newsTitle}>
          Company Snapshot
        </Typography>
        <Grid container className={classes.gridContainer}>
          {snapshotCardData.map(snapshotCard => (
            <Grid item xs={6} md={3} className={classes.gridItem}>
              <SnapshotCard
                imgFluid={
                  data[changeImgName(snapshotCard.imgName)].childImageSharp
                    .fluid
                }
                topText={snapshotCard.topText}
                bottomText={snapshotCard.bottomText}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default SnapshotSection

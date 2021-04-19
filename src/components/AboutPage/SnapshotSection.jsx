import React from 'react'
import clsx from 'clsx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import aboutSnapshotBg from '../../assets/images/about-page/about-snapshot-bg.jpg'

const useStyles = makeStyles(theme => ({
  snapshotSection: {
    padding: '8rem 0 12rem',
    // backgroundImage: `url(${aboutSnapshotBg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    height: '91rem',
    color: 'white',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      height: '140rem'
    }
  },
  bgImg: {
    zIndex: -10
  },
  gridItem: {
    marginBottom: '5rem',
    paddingRight: '4rem',
    paddingLeft: '6rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: '8rem'
    }
  },
  icon: {
    width: '10rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 2rem'
    }
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
    wordSpacing: '1px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 10rem'
    }
  },
  iconCorrected: {
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(1.8rem)'
    }
  },
  iconSlightlyCorrected: {
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(0.9rem)'
    }
  }
}))

const snapshotCardData = [
  {
    imgName: 'snapshot-1',
    topText: '$285MM',
    bottomText: 'Annual Revenue',
    iconCorrected: true
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
    bottomText: 'Employees strong and growing',
    iconSlightlyCorrected: true
  },
  {
    imgName: 'snapshot-6',
    topText: '30+',
    bottomText: 'Project Managers on Staff',
    iconCorrected: true
  },
  {
    imgName: 'snapshot-7',
    topText: '55+',
    bottomText: 'Field Supervisors on Staff',
    iconCorrected: true
  },
  {
    imgName: 'snapshot-8',
    topText: '50+',
    bottomText: 'Trade Laborers on Staff',
    iconSlightlyCorrected: true
  }
]

const SnapshotCard = ({
  imgFluid,
  topText,
  bottomText,
  iconCorrected,
  iconSlightlyCorrected
}) => {
  const classes = useStyles()
  return (
    <div className={classes.snapshotItem}>
      <GatsbyImage
        image={imgFluid}
        className={clsx(
          classes.icon,
          iconCorrected && classes.iconCorrected,
          iconSlightlyCorrected && classes.iconSlightlyCorrected
        )}
      />
      <p className={classes.topText}>{topText}</p>
      <p className={classes.bottomText}>{bottomText}</p>
    </div>
  )
}

const SnapshotSection = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      snapshot1: file(name: { eq: "snapshot-1" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot2: file(name: { eq: "snapshot-2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot3: file(name: { eq: "snapshot-3" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot4: file(name: { eq: "snapshot-4" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot5: file(name: { eq: "snapshot-5" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot6: file(name: { eq: "snapshot-6" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot7: file(name: { eq: "snapshot-7" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      snapshot8: file(name: { eq: "snapshot-8" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `)

  const changeImgName = imgName => imgName.split('-').join('')

  return (
    <section className={classes.snapshotSection}>
      <StaticImage
        src='../../assets/images/about-page/about-snapshot-bg.jpg'
        className={classes.bgImg}
      />
      <Container>
        <Typography variant='h2' className={classes.newsTitle}>
          Company Snapshot
        </Typography>
        <Grid container className={classes.gridContainer}>
          {snapshotCardData.map(snapshotCard => (
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
              <SnapshotCard
                imgFluid={getImage(
                  data[changeImgName(snapshotCard.imgName)].childImageSharp
                )}
                topText={snapshotCard.topText}
                bottomText={snapshotCard.bottomText}
                iconCorrected={snapshotCard.iconCorrected}
                iconSlightlyCorrected={snapshotCard.iconSlightlyCorrected}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default SnapshotSection

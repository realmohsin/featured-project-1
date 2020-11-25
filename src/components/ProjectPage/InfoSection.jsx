import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import { IoMdArrowDropright } from 'react-icons/io'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

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
  infoSection: {
    padding: '14rem 0 14rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%'
  },
  leftGridItem: {
    paddingRight: '3rem'
  },
  rightImgContainer: {
    width: '38rem',
    marginLeft: 'auto'
  },
  extraThemedBoxClass: {
    width: '70rem'
  },
  statContainer: {
    padding: '8rem 0 15rem'
  },
  statGridItem: {
    borderLeft: '1px solid #ccc',
    padding: '2rem 5rem',
    '&:last-of-type': {
      borderRight: '1px solid #ccc'
    }
  },
  stat: {
    fontSize: '5.4rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  statLabel: {
    textAlign: 'center',
    fontSize: '1.6rem'
  }
}))

const InfoSection = ({
  logoFluid,
  infoParagraphs,
  rightImgFluid,
  squareFt,
  timelineWks,
  clientSince
}) => {
  const theme = useTheme()
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
    <section className={classes.infoSection}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} className={classes.leftGridItem}>
            <ThemedContentBox
              headerImgFluid={logoFluid}
              extraClass={classes.extraThemedBoxClass}
            >
              {infoParagraphs.map(paraText => (
                <Typography variant='body1' gutterBottom>
                  {paraText}
                </Typography>
              ))}
            </ThemedContentBox>
          </Grid>
          <Grid item xs={12} md={4} className={classes.rightGridItem}>
            <div className={classes.rightImgContainer}>
              <Img
                fluid={rightImgFluid}
                alt='Think Safe, Work Safe, Live Safe'
                className={classes.safetyImg}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.statContainer}>
          <Grid item className={classes.statGridItem} xs={12} md={4}>
            <p className={classes.stat}>{squareFt}</p>
            <p className={classes.statLabel}>Square Feet</p>
          </Grid>
          <Grid item className={classes.statGridItem} xs={12} md={4}>
            <p className={classes.stat}>{timelineWks}</p>
            <p className={classes.statLabel}>Timeline</p>
          </Grid>
          <Grid item className={classes.statGridItem} xs={12} md={4}>
            <p className={classes.stat}>{clientSince}</p>
            <p className={classes.statLabel}>
              Our Valued Client Since {clientSince}
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default InfoSection

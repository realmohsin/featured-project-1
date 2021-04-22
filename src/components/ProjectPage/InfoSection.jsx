import React from 'react'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  infoSection: {
    padding: '14rem 0 14rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12rem 0 4rem'
    }
  },
  bgImg: {
    zIndex: -10
  },
  leftGridItem: {
    paddingRight: '3rem'
  },
  rightImgContainer: {
    width: '38rem',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: '0 auto'
    }
  },
  extraThemedBoxClass: {
    width: '70rem',
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 9rem'
    }
  },
  statContainer: {
    padding: '8rem 0 15rem'
  },
  statGridItem: {
    borderLeft: '1px solid #ccc',
    padding: '2rem 5rem',
    '&:last-of-type': {
      borderRight: '1px solid #ccc',
      [theme.breakpoints.down('sm')]: {
        borderRight: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'none',
      borderBottom: '1px solid #ccc',
      marginBottom: '2rem'
    }
  },
  stat: {
    fontSize: '5.4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem'
    }
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
  const classes = useStyles()

  return (
    <section className={classes.infoSection}>
      <StaticImage
        src='../../assets/images/common/section-bg-1.jpg'
        alt='Background'
        className={classes.bgImg}
        objectPosition='0% 0%'
      />
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={8} className={classes.leftGridItem}>
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
          <Grid item xs={12} md={6} lg={4} className={classes.rightGridItem}>
            <div className={classes.rightImgContainer}>
              <GatsbyImage
                image={getImage(rightImgFluid)}
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

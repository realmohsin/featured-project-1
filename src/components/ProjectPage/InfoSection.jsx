import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

const useStyles = makeStyles(theme => ({
  infoSection: {
    padding: '14rem 0 14rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    [theme.breakpoints.down('sm')]: {
      padding: '12rem 0 4rem'
    }
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

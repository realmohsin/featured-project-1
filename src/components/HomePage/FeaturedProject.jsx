import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Hidden, Typography } from '@material-ui/core'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

const useStyles = makeStyles(theme => ({
  featuredProject: {},
  imgSide: {
    padding: '1rem',
    position: 'relative',
    paddingRight: '4.4rem',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  bigImgContainer: {},
  bigImg: {},
  smallImgContainer: {
    position: 'absolute',
    height: '38rem',
    width: '30rem',
    top: '58%',
    right: '14%',
    boxShadow: theme.shadows[9],
    overflow: 'hidden'
  },
  smallImg: {
    width: '30rem',
    height: '45rem'
  },
  infoSide: {},
  info: {
    padding: '5.4rem 3.5rem',
    maxWidth: '44rem',
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    zIndex: 10,
    position: 'relative',
    '&::before': {
      content: '""',
      backgroundImage: `url(${sectionBg1})`,
      backgroundPosition: 'top right',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      zIndex: -1,
      opacity: 0.45
    },
    [theme.breakpoints.down('sm')]: {
      margin: '-8rem auto',
      backgroundColor: 'rgba(255, 255, 255, 0.98)'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '3rem 2rem',
      width: '80%'
    }
  },
  logoImg: {
    width: '15rem',
    // height: '100%'
    marginBottom: '3rem'
  },
  infoText: {
    lineHeight: 1.6,
    fontSize: '1.5rem',
    marginBottom: '2.5rem'
  },
  themedBox: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: '2.2rem',
    marginBottom: '6rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '3rem'
    }
  },
  companyName: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    marginBottom: '0.2rem'
  },
  quoter: {
    fontSize: '1.4rem'
  },
  viewProjectLink: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    marginBottom: '1rem'
  }
}))

const FeaturedProject = ({
  featuredProject: {
    bigImgName,
    bigImgFluid,
    smallImgFluid,
    logoImgFluid,
    companyName,
    quoteText,
    quoter
  }
}) => {
  const classes = useStyles()

  return (
    <article className={classes.featuredProject}>
      <Grid container>
        <Grid item xs={12} md={8} className={classes.imgSide}>
          <div className={classes.bigImgContainer}>
            <Img
              fluid={bigImgFluid}
              className={classes.bigImg}
              alt={`View of ${companyName} project`}
            />
            {/* <img src={bigImg3} className={classes.bigImg} /> */}
          </div>
          <Hidden smDown>
            <div className={classes.smallImgContainer}>
              <Img
                fluid={smallImgFluid}
                className={classes.smallImg}
                alt={`View of ${companyName} project`}
              />
            </div>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={4} className={classes.infoSide}>
          {/* <BackgroundImage Tag='div' className={classes.info} fluid={bg2Fluid}> */}
          <div className={classes.info}>
            <Img
              fluid={logoImgFluid}
              className={classes.logoImg}
              alt={`${companyName} logo`}
            />
            <Typography
              variant='body1'
              gutterBottom
              className={classes.infoText}
            >
              "{quoteText}"
            </Typography>
            <div className={classes.themedBox}>
              <Typography variant='body1' className={classes.companyName}>
                {companyName}
              </Typography>
              <Typography variant='body1' className={classes.quoter}>
                {quoter}
              </Typography>
            </div>
            <Link to='/' className={classes.viewProjectLink}>
              View Project
            </Link>
          </div>
          {/* </BackgroundImage> */}
        </Grid>
      </Grid>
    </article>
  )
}

export default FeaturedProject

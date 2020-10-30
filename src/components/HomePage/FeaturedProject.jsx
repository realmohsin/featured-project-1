import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'
import bigImg3 from '../../assets/images/home-page/featured-3-big.jpg'

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
  featuredProject: {},
  imgSide: {
    padding: '1rem',
    position: 'relative',
    paddingRight: '4.4rem'
  },
  bigImgContainer: {
    // width: '100rem'
    // height: '56.2rem'
  },
  bigImg: {
    // width: '100rem',
    // height: '56.2rem'
  },
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
  infoSide: {
    // padding: '1rem 10rem 1rem 0'
  },
  info: {
    padding: '5.4rem 3.5rem',
    // height: '100%',
    width: '44rem',
    // backgroundSize: 'cover',
    // backgroundImage: `url(${sectionBg1})`,
    // backgroundPosition: 'top right',
    // boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
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
    }
  },
  logoImg: {
    // width: '10rem'
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
    marginBottom: '6rem'
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
    logoImgFixed,
    companyName,
    quoteText,
    quoter
  }
}) => {
  const theme = useTheme()
  const classes = useStyles()
  const {
    sectionBg2: {
      childImageSharp: { fluid: bg2Fluid }
    }
  } = useStaticQuery(graphql`
    query {
      sectionBg2: file(name: { eq: "section-bg-2" }) {
        childImageSharp {
          fluid(maxWidth: 1536, maxHeight: 1536) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [state, setState] = useState('initial-state')

  useEffect(() => {
    return () => {}
  }, [])

  const atXsDown = useMediaQuery(theme.breakpoints.down('xs')) // below 600
  const atMdUp = useMediaQuery(theme.breakpoints.up('md')) // 960 and above
  const atSmOnly = useMediaQuery(theme.breakpoints.only('sm')) // only between 600 and 959
  const betweenSmLg = useMediaQuery(theme.breakpoints.between('sm', 'lg')) // only between 600 and 1919

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
          <div className={classes.smallImgContainer}>
            <Img
              fluid={smallImgFluid}
              className={classes.smallImg}
              alt={`View of ${companyName} project`}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.infoSide}>
          {/* <BackgroundImage Tag='div' className={classes.info} fluid={bg2Fluid}> */}
          <div className={classes.info}>
            <Img
              fixed={logoImgFixed}
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

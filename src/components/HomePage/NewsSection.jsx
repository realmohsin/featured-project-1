import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Typography } from '@material-ui/core'
import Slider from 'react-slick'

const useStyles = makeStyles(theme => ({
  newsSection: {
    // height: '95rem',
    padding: '12rem 4rem 14rem',
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 2rem 12rem'
    }
  },
  newsTitle: {
    fontSize: '1.8rem',
    margin: '3rem 0 5rem',
    paddingLeft: '28rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      textAlign: 'center'
    }
  },
  slider: {
    // height: '56rem'
    cursor: 'move' /* fallback if grab cursor is unsupported */,
    cursor: 'grab',
    // overflow: 'visible',
    '&:active': {
      cursor: 'grabbing'
    }
  },
  slide: {
    height: '58rem',
    padding: '0 2.5rem',
    // margin: '0 2.5rem',
    outline: 'none',
    position: 'relative',
    '&:hover > div': {
      backgroundColor: 'rgba(0,0,0,0)'
    },
    '&:hover .gatsby-image-wrapper': {
      transform: 'scale(1.02)'
    },
    [theme.breakpoints.down('xs')]: {}
  },
  slideImg: {
    height: '100%',
    transition: '0.4s all',
    // boxShadow: theme.shadows[2],
    '&:hover': {
      // on slide class
    }
  },
  slideTitle: {
    position: 'absolute',
    bottom: '4rem',
    left: '6rem',
    width: '26rem',
    color: 'white',
    fontSize: '3.3rem',
    fontWeight: 'bold',
    zIndex: 50,
    lineHeight: '1.1',
    textShadow: 'black 0px 0px 5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
      width: '20rem'
    }
  },
  slideOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: '2.5rem',
    left: '2.5rem',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    transition: '0.4s all',
    '&:hover': {
      // on slide class
    }
  }
}))

const NewsSection = props => {
  const classes = useStyles()

  const lessThan1550 = useMediaQuery('(max-width:1550px)')
  const lessThan1100 = useMediaQuery('(max-width:1100px)')
  const lessThan795 = useMediaQuery('(max-width:795px)')

  const getNumOfSlides = () => {
    if (lessThan795) return 1
    if (lessThan1100) return 2
    if (lessThan1550) return 3
    return 4
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: getNumOfSlides(),
    slidesToScroll: getNumOfSlides(),
    autoplay: 'true',
    autoplaySpeed: 3500
  }

  return (
    <section className={classes.newsSection}>
      <Typography variant='h2' className={classes.newsTitle}>
        Schimenti In The News
      </Typography>
      <Slider {...settings} className={classes.slider}>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-1.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />

          <Link to='/' className={classes.slideTitle}>
            Repositioning the Retail Market
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-2.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            Times Square Mcdonald's Takes Infill Building to the Extreme
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-3.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            NYC Retail Panel: Industry Insights in Changing Market
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-4.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            Highlighting High-End Retail at Hudson Yards
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-5.png'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            $175m FreshDirect Facility a Stepping Stone for Schimenti Growth
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-6.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            Schimenti Recognized as a 2019 Best Company to Work For
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-7.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            Times Square Bank of America Now Open
          </Link>
          <div className={classes.slideOverlay} />
        </div>
        <div className={classes.slide}>
          <StaticImage
            src='../../assets/images/home-page/news-8.jpg'
            alt='section background'
            className={classes.slideImg}
            id='slide-img'
          />
          <Link to='/' className={classes.slideTitle}>
            Schimenti Construction Company Moves NYC HQs
          </Link>
          <div className={classes.slideOverlay} />
        </div>
      </Slider>
    </section>
  )
}

export default NewsSection

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import Slider from 'react-slick'
import Button from '../Button'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  peopleSection: {
    height: '70.1rem',
    padding: '13rem 0',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      height: '100%',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      height: '150rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '11rem 0',
      height: '138rem'
    }
  },
  bgImg: {
    zIndex: -10,
    height: '100%'
  },
  gridContainer: {},
  leftSide: {
    paddingTop: '4rem'
  },
  rightSide: {
    marginTop: '-3rem'
  },
  contentBox: {
    ...theme.custom.themedBorderAndPadding,
    width: '55rem',
    marginBottom: '6rem'
  },
  aboutTitle: {
    ...theme.custom.title2
  },
  paragraph: {
    '&:first-of-type::before': {
      ...theme.custom.themedArrowForBefore,
      transform: 'translateY(1.9rem)'
    }
  },
  slider: {
    cursor: 'move' /* fallback if grab cursor is unsupported */,
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    },
    [theme.breakpoints.down('md')]: {
      margin: '9rem auto'
    }
  },
  clientSlide: {
    height: '56rem',
    position: 'relative',
    outline: 'none',
    margin: '0 auto',
    padding: '0 0.5rem'
  },
  clientImg: {
    width: '30rem',
    height: '39.8rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '32rem'
    }
    // [theme.breakpoints.down('xs')]: {
    //   margin: '0 auto'
    // }
  },
  quoteBox: {
    position: 'absolute',
    top: '45%',
    left: '26%',
    width: '38.3rem',
    height: '28.1rem',
    padding: '3.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: theme.shadows[1],
    zIndex: 10,
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      left: '16%'
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(0.9)',
      width: '32rem',
      height: '32rem',
      left: 'auto',
      right: '4%',
      padding: '2.5rem'
    }
  },
  quoteText: {
    marginBottom: '2.2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem'
    }
  },
  miniThemeBox: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: '2.4rem'
  },
  clientName: {
    fontWeight: 'bold'
  },
  extraThemedBox: {
    [theme.breakpoints.down('md')]: {
      margin: 'auto'
    }
  },
  extraButtonClass: {
    [theme.breakpoints.down('md')]: {
      margin: '4rem auto 6rem'
    }
  }
}))

const PeopleSection = props => {
  const classes = useStyles()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 'true',
    autoplaySpeed: 3200
  }

  return (
    <section className={classes.peopleSection}>
      <StaticImage
        src='../../assets/images/common/section-bg-1.jpg'
        alt='section background'
        className={classes.bgImg}
        objectPosition='top right'
      />
      <Container className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.leftSide} xs={12} lg={6}>
            <ThemedContentBox
              title={<>Building Epic Things Requires Extraordinary People.</>}
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                The people of Schimenti are our most valuable and important
                resource. They possess an energy and dedication that permeates
                the entire company. We call it The Cheetah Factor, and it is
                visible every day as our people overcome challenges, create
                inventive solutions, and build strong relationships with each
                other and our clients.
              </Typography>
            </ThemedContentBox>
            <Button
              isLink
              text='More About Us'
              to='/about'
              extraClass={classes.extraButtonClass}
            />
          </Grid>
          <Grid item className={classes.rightSide} xs={12} lg={6}>
            <Slider {...settings} className={classes.slider}>
              <div className={classes.clientSlide}>
                <StaticImage
                  src='../../assets/images/home-page/client-1.jpg'
                  alt='Client One'
                  className={classes.clientImg}
                />
                <div className={classes.quoteBox}>
                  <StaticImage
                    src='../../assets/images/common/section-bg-1.jpg'
                    alt='section background'
                    className={classes.bgImg}
                    objectPosition='top right'
                  />
                  <Typography
                    variant='body1'
                    gutterBottom
                    className={classes.quoteText}
                  >
                    "I love construction because it is amazing to see structures
                    go from paper to fruition. It's incredible to work together
                    as a team and create something to be proud of and for others
                    to share."
                  </Typography>
                  <div className={classes.miniThemeBox}>
                    <Typography variant='body1' className={classes.clientName}>
                      Andrew Heller
                    </Typography>
                    <Typography variant='body1' className={classes.clientInfo}>
                      Project Manager <br />
                      New York, NY
                    </Typography>
                  </div>
                </div>
              </div>

              <div className={classes.clientSlide}>
                <StaticImage
                  src='../../assets/images/home-page/client-2.jpg'
                  alt='Client Two'
                  className={classes.clientImg}
                />
                <div className={classes.quoteBox}>
                  <StaticImage
                    src='../../assets/images/common/section-bg-1.jpg'
                    alt='section background'
                    className={classes.bgImg}
                    objectPosition='top right'
                  />
                  <Typography
                    variant='body1'
                    gutterBottom
                    className={classes.quoteText}
                  >
                    "I love construction because it is amazing to see structures
                    go from paper to fruition. It's incredible to work together
                    as a team and create something to be proud of and for others
                    to share."
                  </Typography>
                  <div className={classes.miniThemeBox}>
                    <Typography variant='body1' className={classes.clientName}>
                      Andrew Heller
                    </Typography>
                    <Typography variant='body1' className={classes.clientInfo}>
                      Project Manager <br />
                      New York, NY
                    </Typography>
                  </div>
                </div>
              </div>

              <div className={classes.clientSlide}>
                <StaticImage
                  src='../../assets/images/home-page/client-3.jpg'
                  alt='Client Three'
                  className={classes.clientImg}
                />
                <div className={classes.quoteBox}>
                  <StaticImage
                    src='../../assets/images/common/section-bg-1.jpg'
                    alt='section background'
                    className={classes.bgImg}
                    objectPosition='top right'
                  />
                  <Typography
                    variant='body1'
                    gutterBottom
                    className={classes.quoteText}
                  >
                    "I love construction because it is amazing to see structures
                    go from paper to fruition. It's incredible to work together
                    as a team and create something to be proud of and for others
                    to share."
                  </Typography>
                  <div className={classes.miniThemeBox}>
                    <Typography variant='body1' className={classes.clientName}>
                      Andrew Heller
                    </Typography>
                    <Typography variant='body1' className={classes.clientInfo}>
                      Project Manager <br />
                      New York, NY
                    </Typography>
                  </div>
                </div>
              </div>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </section>
    // </BackgroundImage>
  )
}

export default PeopleSection

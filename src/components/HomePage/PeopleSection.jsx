import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import Button from '../Button'
import ThemedContentBox from '../ThemedContentBox'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

const useStyles = makeStyles(theme => ({
  peopleSection: {
    height: '70.1rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    padding: '13rem 0',
    [theme.breakpoints.down('md')]: {
      height: '150rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '11rem 0',
      height: '140rem'
    }
  },
  gridContainer: {
    // marginTop: '20rem'
  },
  leftSide: {
    paddingTop: '4rem'
  },
  rightSide: {},
  contentBox: {
    ...theme.custom.themedBorderAndPadding,
    width: '55rem',
    marginBottom: '6rem'
  },
  aboutTitle: {
    ...theme.custom.title2
    // textShadow: 'black 0px 0px 3px'
  },
  paragraph: {
    // textShadow: 'black 0px 0px 5px',
    '&:first-of-type::before': {
      ...theme.custom.themedArrowForBefore,
      transform: 'translateY(1.9rem)'
    }
  },
  slider: {
    // height: '56rem'
    cursor: 'move' /* fallback if grab cursor is unsupported */,
    cursor: 'grab',
    // overflow: 'visible',
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
    // background: 'gray',
    outline: 'none'
  },
  clientImg: {
    width: '30rem',
    height: '39.8rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '35rem'
    }
  },
  quoteBox: {
    position: 'absolute',
    top: '45%',
    left: '26%',
    width: '38.3rem',
    height: '28.1rem',
    // background: 'blue',
    padding: '3.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: theme.shadows[1],
    zIndex: 10,
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
      opacity: 0.75
    },
    [theme.breakpoints.down('md')]: {
      left: '16%'
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(0.9)',
      width: '33rem',
      height: '32rem',
      left: '10%'
    }
  },
  quoteText: {
    marginBottom: '2.2rem'
  },
  miniThemeBox: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: '2.4rem'
  },
  clientName: {
    fontWeight: 'bold'
    // marginBottom: '.2rem'
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
  const data = useStaticQuery(graphql`
    query {
      sectionBg: file(name: { eq: "section-bg-1" }) {
        childImageSharp {
          fluid(maxWidth: 2732, maxHeight: 1632) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      client1: file(name: { eq: "client-1" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      client2: file(name: { eq: "client-2" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      client3: file(name: { eq: "client-3" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
    // <BackgroundImage
    //   Tag='section'
    //   className={classes.peopleSection}
    //   fluid={data.sectionBg.childImageSharp.fluid}
    // >
    <section className={classes.peopleSection}>
      <Container className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.leftSide} xs={12} lg={6}>
            {/* <div className={classes.contentBox}>
              <Typography variant='h2' className={classes.aboutTitle}>
                Building Epic Things Requires Extraordinary People.
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.paragraph}
              >
                The people of Schimenti are our most valuable and important
                resource. They possess an energy and dedication that permeates
                the entire company. We call it The Cheetah Factor, and it is
                visible every day as our people overcome challenges, create
                inventive solutions, and build strong relationships with each
                other and our clients.
              </Typography>
            </div> */}
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
              to='/'
              extraClass={classes.extraButtonClass}
            />
          </Grid>
          <Grid item className={classes.rightSide} xs={12} lg={6}>
            <Slider {...settings} className={classes.slider}>
              <div className={classes.clientSlide}>
                <Img
                  fluid={data.client1.childImageSharp.fluid}
                  alt='Client 1'
                  className={classes.clientImg}
                />
                <div className={classes.quoteBox}>
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
                <Img
                  fluid={data.client2.childImageSharp.fluid}
                  alt='Client 2'
                  className={classes.clientImg}
                />
                <div className={classes.quoteBox}>
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
                <Img
                  fluid={data.client3.childImageSharp.fluid}
                  alt='Client 3'
                  className={classes.clientImg}
                />
                <div className={classes.quoteBox}>
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

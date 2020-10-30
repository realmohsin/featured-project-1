import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import Button from '../Button'
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
  peopleSection: {
    height: '70.1rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    padding: '13rem 0'
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
    height: '39.8rem'
  },
  quoteBox: {
    position: 'absolute',
    top: '45%',
    left: '26%',
    width: '45.3rem',
    height: '28.1rem',
    // background: 'blue',
    padding: '3.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
  }
}))

const PeopleSection = props => {
  const theme = useTheme()
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
    slidesToScroll: 1
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
          <Grid item className={classes.leftSide} xs={12} md={6}>
            <div className={classes.contentBox}>
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
            </div>
            <Button isLink text='More About Us' to='/' />
          </Grid>
          <Grid item className={classes.rightSide} xs={12} md={6}>
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

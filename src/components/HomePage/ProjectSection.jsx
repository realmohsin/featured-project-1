import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import featuredProjectsData from '../../data/featuredProjects'
import FeaturedProject from './FeaturedProject'
import Button from '../Button'
import changeFileNameToKey from '../../utils/changeFileNameToKey'
import '../../styles/slick-arrows.css'

const useStyles = makeStyles(theme => ({
  projectSection: {
    height: '100rem',
    // backgroundImage: `url(${sectionBg1})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    padding: '16.5rem 6rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      height: '125rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '14rem 0',
      height: '90rem'
    }
  },
  bgImg: {
    zIndex: -10
  },
  slider: {
    height: '80rem',
    maxWidth: '158rem',
    margin: '0 auto',
    cursor: 'move' /* fallback if grab cursor is unsupported */,
    cursor: 'grab',
    // overflow: 'visible',
    '&:active': {
      cursor: 'grabbing'
    },
    '& > div': {
      width: '100%',
      height: '100%'
    }
  },
  button: {
    position: 'absolute',
    // left: '17rem',
    left: '9%',
    bottom: '15%',
    '@media (max-width: 1525px)': {
      left: '6%',
      bottom: '20%'
    },
    [theme.breakpoints.down('md')]: {
      bottom: '25%',
      left: '7%',
      transform: 'scale(0.9)'
    },
    '@media (max-width: 1245px)': {
      left: '5%'
    },
    '@media (max-width: 1125px)': {
      left: '2%',
      bottom: '35%',
      transform: 'scale(0.75)'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      transform: 'scale(1)',
      margin: '6rem auto'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1rem auto',
      right: '15%'
    }
  }
}))

const ProjectSection = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      featured1Big: file(name: { eq: "featured-1-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured1Small: file(name: { eq: "featured-1-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured1Logo: file(name: { eq: "featured-1-logo" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured2Big: file(name: { eq: "featured-2-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured2Small: file(name: { eq: "featured-2-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured2Logo: file(name: { eq: "featured-2-logo" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured3Big: file(name: { eq: "featured-3-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured3Small: file(name: { eq: "featured-3-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured3Logo: file(name: { eq: "featured-3-logo" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured4Big: file(name: { eq: "featured-4-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured4Small: file(name: { eq: "featured-4-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      featured4Logo: file(name: { eq: "featured-4-logo" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 'true',
    autoplaySpeed: 2800
  }

  return (
    <section className={classes.projectSection}>
      <StaticImage
        src='../../assets/images/common/section-bg-1.jpg'
        alt='section background'
        className={classes.bgImg}
        objectPosition='top right'
      />
      <Slider {...settings} className={classes.slider}>
        {featuredProjectsData
          .map(featuredProject => {
            // adding childImageSharps to raw data first
            return {
              ...featuredProject,
              bigImgFluid: getImage(
                data[changeFileNameToKey(featuredProject.bigImgName)]
                  .childImageSharp
              ),
              smallImgFluid: getImage(
                data[changeFileNameToKey(featuredProject.smallImgName)]
                  .childImageSharp
              ),
              logoImgFluid: getImage(
                data[changeFileNameToKey(featuredProject.logoImgName)]
                  .childImageSharp
              )
            }
          })
          .map(featuredProject => (
            <FeaturedProject
              featuredProject={featuredProject}
              key={featuredProject.companyName}
            />
          ))}
      </Slider>
      <Hidden xsDown>
        <Button isLink text='Featured Projects' extraClass={classes.button} />
      </Hidden>
    </section>
  )
}

export default ProjectSection

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import featuredProjectsData from '../../data/featuredProjects'
import FeaturedProject from './FeaturedProject'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'
import Button from '../Button'
import changeFileNameToKey from '../../utils/changeFileNameToKey'
import '../../styles/slick-arrows.css'

const useStyles = makeStyles(theme => ({
  projectSection: {
    height: '100rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    padding: '16.5rem 6rem',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: '125rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '14rem 0',
      height: '90rem'
    }
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
      sectionBg: file(name: { eq: "section-bg-1" }) {
        childImageSharp {
          fluid(maxWidth: 2732, maxHeight: 1632) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured1Big: file(name: { eq: "featured-1-big" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured1Small: file(name: { eq: "featured-1-small" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured1Logo: file(name: { eq: "featured-1-logo" }) {
        childImageSharp {
          fluid(maxWidth: 178) {
            ...GatsbyImageSharpFluid
          }
          # fixed(width: 178) {
          #   ...GatsbyImageSharpFixed
          # }
        }
      }
      featured2Big: file(name: { eq: "featured-2-big" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured2Small: file(name: { eq: "featured-2-small" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured2Logo: file(name: { eq: "featured-2-logo" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
          # fixed(width: 220) {
          #   ...GatsbyImageSharpFixed
          # }
        }
      }
      featured3Big: file(name: { eq: "featured-3-big" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured3Small: file(name: { eq: "featured-3-small" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured3Logo: file(name: { eq: "featured-3-logo" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
          # fixed(width: 180) {
          #   ...GatsbyImageSharpFixed
          # }
        }
      }
      featured4Big: file(name: { eq: "featured-4-big" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured4Small: file(name: { eq: "featured-4-small" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      featured4Logo: file(name: { eq: "featured-4-logo" }) {
        childImageSharp {
          fluid(maxWidth: 154) {
            ...GatsbyImageSharpFluid
          }
          # fixed(width: 154) {
          #   ...GatsbyImageSharpFixed
          # }
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
    // <BackgroundImage
    //   Tag='section'
    //   className={classes.projectSection}
    //   fluid={data.sectionBg.childImageSharp.fluid}
    // >
    <section className={classes.projectSection}>
      <Slider {...settings} className={classes.slider}>
        {featuredProjectsData
          .map(featuredProject => {
            // adding childImageSharps to raw data first
            return {
              ...featuredProject,
              bigImgFluid:
                data[changeFileNameToKey(featuredProject.bigImgName)]
                  .childImageSharp.fluid,
              smallImgFluid:
                data[changeFileNameToKey(featuredProject.smallImgName)]
                  .childImageSharp.fluid,
              logoImgFluid:
                data[changeFileNameToKey(featuredProject.logoImgName)]
                  .childImageSharp.fluid
            }
          })
          .map(featuredProject => (
            <FeaturedProject featuredProject={featuredProject} />
          ))}
      </Slider>
      <Hidden xsDown>
        <Button isLink text='Featured Projects' extraClass={classes.button} />
      </Hidden>
    </section>
    // </BackgroundImage>
  )
}

export default ProjectSection

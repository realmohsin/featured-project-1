import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import featuredProjectsData from '../../data/featuredProjects'
import FeaturedProject from './FeaturedProject'
import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'
import Button from '../Button'

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
  projectSection: {
    height: '100rem',
    backgroundImage: `url(${sectionBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    padding: '16.5rem 6rem',
    position: 'relative'
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
    left: '17rem',
    bottom: '15%'
  }
}))

const ProjectSection = props => {
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
          # fluid(maxWidth: 680, maxHeight: 182) {
          #   ...GatsbyImageSharpFluid
          # }
          fixed(width: 178) {
            ...GatsbyImageSharpFixed
          }
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
          # fluid(maxWidth: 500, maxHeight: 223) {
          #   ...GatsbyImageSharpFluid
          # }
          fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
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
          # fluid(maxWidth: 180) {
          #   ...GatsbyImageSharpFluid
          # }
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
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
          # fluid(maxWidth: 154) {
          #   ...GatsbyImageSharpFluid
          # }
          fixed(width: 154) {
            ...GatsbyImageSharpFixed
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

  const changeFileName = fileName => {
    // changes 'featured-1-big', 'featured-2-small', etc to 'featured1Big', 'featured2Small'
    const splitInArr = fileName.split('-')
    const lastWord = splitInArr[splitInArr.length - 1]
    splitInArr[splitInArr.length - 1] =
      lastWord[0].toUpperCase() + lastWord.slice(1)
    return splitInArr.join('')
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
                data[changeFileName(featuredProject.bigImgName)].childImageSharp
                  .fluid,
              smallImgFluid:
                data[changeFileName(featuredProject.smallImgName)]
                  .childImageSharp.fluid,
              logoImgFixed:
                data[changeFileName(featuredProject.logoImgName)]
                  .childImageSharp.fixed
            }
          })
          .map(featuredProject => (
            <FeaturedProject featuredProject={featuredProject} />
          ))}
      </Slider>
      <Button isLink text='Featured Projects' extraClass={classes.button} />
    </section>
    // </BackgroundImage>
  )
}

export default ProjectSection

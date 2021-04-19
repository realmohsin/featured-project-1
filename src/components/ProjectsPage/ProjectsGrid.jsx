import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import projectsList from '../../data/projectsList'
import changeFileNameToKey from '../../utils/changeFileNameToKey'

const useStyles = makeStyles(theme => ({
  projectsGrid: {
    background: 'gray'
  },
  gridItem: {
    height: '40rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    position: 'relative',
    overflow: 'hidden',
    '&:hover > div': {
      backgroundColor: 'rgba(0,0,0,0)'
    },
    '&:hover .gatsby-image-wrapper': {
      transform: 'scale(1.02)'
    }
  },
  projectImg: {
    height: '100%',
    transition: '0.4s all'
  },
  projectTitle: {
    position: 'absolute',
    bottom: '4rem',
    left: '6rem',
    width: '32rem',
    color: 'white',
    fontSize: '3.2rem',
    fontWeight: 'bold',
    zIndex: 50,
    lineHeight: '1.1',
    textShadow: 'black 0px 0px 10px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    transition: '0.4s all'
  }
}))

const ProjectsGrid = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      primark: file(name: { eq: "primark" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      massimoDutti: file(name: { eq: "massimo-dutti" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samsung: file(name: { eq: "samsung" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nike: file(name: { eq: "nike" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hm: file(name: { eq: "hm" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      krispyKreme: file(name: { eq: "krispy-kreme" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jdSports: file(name: { eq: "jd-sports" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lidl: file(name: { eq: "lidl" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      filson: file(name: { eq: "filson" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mcdonalds: file(name: { eq: "mcdonalds" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cmxCinebistro: file(name: { eq: "cmx-cinebistro" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schimentiHq: file(name: { eq: "schimenti-hq" }) {
        childImageSharp {
          fluid(maxWidth: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.projectsGrid}>
      <Grid container className={classes.gridContainer}>
        {projectsList.map(project => {
          console.log(
            project.imgName,
            'to',
            changeFileNameToKey(project.imgName)
          )
          return (
            <Grid item xs={12} md={4} className={classes.gridItem}>
              <Link to={`/${project.slug}`} className={classes.projectTitle}>
                <Img
                  fluid={
                    data[changeFileNameToKey(project.imgName)].childImageSharp
                      .fluid
                  }
                  className={classes.projectImg}
                />
                <h3>{project.name}</h3>
              </Link>
              <div className={classes.overlay} />
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default ProjectsGrid

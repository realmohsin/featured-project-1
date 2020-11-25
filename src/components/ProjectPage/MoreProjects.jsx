import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'

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
  moreProjects: {
    padding: '12rem 0 15rem'
  },
  newsTitle: {
    fontSize: '1.6rem',
    margin: '3rem 0 7rem',
    paddingLeft: '5rem',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    wordSpacing: '1px'
  },
  project: {
    position: 'relative',
    height: '36rem'
  },
  projectName: {
    position: 'absolute',
    fontSize: '4.2rem',
    bottom: '3rem',
    left: '4rem',
    textShadow: 'black 0px 0px 5px',
    fontWeight: 'bold',
    color: 'white'
  },
  projectImg: {
    height: '100%'
  },
  gridItem: {
    padding: '1.8rem'
  }
}))

const MoreProjects = ({
  project1Name,
  project2Name,
  project3Name,
  project1ImgFluid,
  project2ImgFluid,
  project3ImgFluid
}) => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      optionalName: file(name: { eq: "services-safety" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 176, quality: 100) {
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
    <section className={classes.moreProjects}>
      <Container>
        <Typography variant='h2' className={classes.newsTitle}>
          More Projects Like This
        </Typography>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div className={classes.project}>
              <Img
                fluid={project1ImgFluid}
                alt={`${project1Name}`}
                className={classes.projectImg}
              />
              <p className={classes.projectName}>{project1Name}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div className={classes.project}>
              <Img
                fluid={project2ImgFluid}
                alt={`${project2Name}`}
                className={classes.projectImg}
              />
              <p className={classes.projectName}>{project2Name}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <div className={classes.project}>
              <Img
                fluid={project3ImgFluid}
                alt={`${project3Name}`}
                className={classes.projectImg}
              />
              <p className={classes.projectName}>{project3Name}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default MoreProjects

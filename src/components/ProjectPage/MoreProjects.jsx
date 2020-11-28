import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  moreProjects: {
    padding: '12rem 0 15rem',
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0 10rem'
    }
  },
  newsTitle: {
    fontSize: '1.6rem',
    margin: '3rem 0 7rem',
    paddingLeft: '5rem',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    wordSpacing: '1px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      textAlign: 'center'
    }
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
  const classes = useStyles()

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

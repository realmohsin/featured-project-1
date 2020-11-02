import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'
import employees from '../../data/employees'

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
  teamSection: {
    padding: '12rem 0',
    backgroundImage: `url(${sectionBg2})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%'
  },
  employeeCard: {
    height: '42.2rem',
    width: '29.1rem'
  },
  employeeImgContainer: {
    height: '29.1rem',
    width: '100%'
  },
  employeeImg: {
    // height: '29.1rem'
  },
  bottomOfCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '3rem',
    paddingBottom: '2.5rem',
    background: 'white'
  },
  employeeName: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    marginTop: '1rem'
  },
  employeePosition: {
    fontSize: '1.3rem'
  },
  gridContainer: {
    width: '95rem',
    margin: '0 auto'
  },
  newsTitle: {
    fontSize: '1.8rem',
    margin: '3rem 0 7rem',
    paddingLeft: '15rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px'
  }
}))

const Employee = ({ imgFluid, name, position }) => {
  const classes = useStyles()
  return (
    <div className={classes.employeeCard}>
      <div className={classes.employeeImgContainer}>
        <Img fluid={imgFluid} alt={name} className={classes.employeeImg} />
      </div>

      <div className={classes.bottomOfCard}>
        <Typography variant='body1' className={classes.employeeName}>
          {name}
        </Typography>
        <Typography variant='body1' className={classes.employeePosition}>
          {position}
        </Typography>
      </div>
    </div>
  )
}

const TeamSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      employee1: file(name: { eq: "employee-1" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee2: file(name: { eq: "employee-2" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee3: file(name: { eq: "employee-3" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee4: file(name: { eq: "employee-4" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee5: file(name: { eq: "employee-5" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee6: file(name: { eq: "employee-6" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee7: file(name: { eq: "employee-7" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee8: file(name: { eq: "employee-8" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      employee9: file(name: { eq: "employee-9" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const changeImgName = imgName => imgName.split('-').join('')

  return (
    <section className={classes.teamSection}>
      <Container>
        <Typography variant='h2' className={classes.newsTitle}>
          Leadership
        </Typography>
        <Grid container className={classes.gridContainer}>
          {employees.map(employee => (
            <Grid item xs={12} md={4}>
              <Employee
                imgFluid={
                  data[changeImgName(employee.imgName)].childImageSharp.fluid
                }
                name={employee.name}
                position={employee.position}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default TeamSection

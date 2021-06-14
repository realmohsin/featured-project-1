import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'
import employees from '../../data/employees'

const useStyles = makeStyles(theme => ({
  teamSection: {
    padding: '12rem 0',
    backgroundImage: `url(${sectionBg2})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0'
    }
  },
  employeeCard: {
    height: '42.2rem',
    width: '29.1rem',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      transform: 'scale(0.95)'
    }
  },
  employeeImgContainer: {
    height: '29.1rem',
    width: '100%'
  },
  employeeImg: {},
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
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  newsTitle: {
    fontSize: '1.9rem',
    margin: '3rem 0 7rem',
    paddingLeft: '15rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      paddingLeft: 0
    }
  }
}))

const Employee = ({ imgFluid, name, position }) => {
  const classes = useStyles()
  return (
    <div className={classes.employeeCard}>
      <div className={classes.employeeImgContainer}>
        <GatsbyImage image={getImage(imgFluid)} alt={name} />
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
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      employee1: file(name: { eq: "employee-1" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee2: file(name: { eq: "employee-2" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee3: file(name: { eq: "employee-3" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee4: file(name: { eq: "employee-4" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee5: file(name: { eq: "employee-5" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee6: file(name: { eq: "employee-6" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee7: file(name: { eq: "employee-7" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee8: file(name: { eq: "employee-8" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      employee9: file(name: { eq: "employee-9" }) {
        childImageSharp {
          gatsbyImageData
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
            <Grid item xs={12} sm={6} md={4}>
              <Employee
                imgFluid={data[changeImgName(employee.imgName)].childImageSharp}
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

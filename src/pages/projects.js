import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import SubcontractorSection from '../components/ContactPage/SubcontractorSection'
import LocationSection from '../components/ContactPage/LocationSection'
import ContactFormSection from '../components/ContactPage/ContactFormSection'
import ProjectsHeroSection from '../components/ProjectsPage/ProjectsHeroSection'
import ProjectsGrid from '../components/ProjectsPage/ProjectsGrid'
// import contactHeroBg from '../assets/images/common/footer-bg.jpg'

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
  extraHeroContent: {
    width: '92rem',
    '& h2': {
      fontSize: '3.5rem'
    }
  },
  test: {
    background: 'green',
    color: 'white'
  }
}))

export default function ProjectsPage () {
  const classes = useStyles()

  return (
    <Layout>
      <HeroSection isJustNav />
      <ProjectsHeroSection />
      <ProjectsGrid />
    </Layout>
  )
}

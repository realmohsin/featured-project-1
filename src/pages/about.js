import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/HomePage/ProjectSection'
import AboutSection from '../components/HomePage/AboutSection'
import PeopleSection from '../components/HomePage/PeopleSection'
import NewsSection from '../components/HomePage/NewsSection'
import HeroContent from '../components/HeroContent'
import PhilosophySection from '../components/AboutPage/PhilosophySection'
import TraditionSection from '../components/AboutPage/TraditionSection'
import CommunitySection from '../components/AboutPage/CommunitySection'
import TeamSection from '../components/AboutPage/TeamSection'
import SnapshotSection from '../components/AboutPage/SnapshotSection'
import PartnersSection from '../components/AboutPage/PartnersSection'

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
  }
}))

export default function AboutPage ({ data }) {
  const classes = useStyles()

  return (
    <Layout>
      <HeroSection heroBgFluid={data.aboutHeroBg.childImageSharp.fluid}>
        <HeroContent
          subtitle="It's More Than Construction"
          title='Focused on customer experience, founded on a passion for excellence and timeliness, all to provide the highest quality of service to our clients.'
          buttonText='Community'
          url='/'
          extraClass={classes.extraHeroContent}
        />
      </HeroSection>
      <PhilosophySection />
      <PartnersSection />
      <SnapshotSection />
      <TeamSection />
      <CommunitySection />
      <TraditionSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutHeroBg: file(name: { eq: "about-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1335, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

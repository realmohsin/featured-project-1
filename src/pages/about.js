import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import HeroContent from '../components/HeroContent'
import PhilosophySection from '../components/AboutPage/PhilosophySection'
import TraditionSection from '../components/AboutPage/TraditionSection'
import TeamSection from '../components/AboutPage/TeamSection'
import SnapshotSection from '../components/AboutPage/SnapshotSection'
import PartnersSection from '../components/AboutPage/PartnersSection'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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
      <HeroSection heroImgData={data.aboutHeroBg.childImageSharp}>
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
      <Hidden xsDown>
        <SnapshotSection />
      </Hidden>
      <TeamSection />
      <TraditionSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutHeroBg: file(name: { eq: "about-hero-bg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

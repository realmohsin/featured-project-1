import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import HeroContent from '../components/HeroContent'
import RankedSection from '../components/CareersPage/RankedSection'
import ChallengingSection from '../components/CareersPage/ChallengingSection'
import CareersVideoSection from '../components/CareersPage/CareersVideoSection'
import ExploreSection from '../components/CareersPage/ExploreSection'

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
      <HeroSection heroBgFluid={data.careersHeroBg.childImageSharp.fluid}>
        <HeroContent
          subtitle='Elevate Your Career'
          title='Cultivating, inspiring and challenging future leaders to overcome boundaries, stretch goals and reach new heights.'
          buttonText='What Our Workers Say'
          url='/'
          extraClass={classes.extraHeroContent}
        />
      </HeroSection>
      <RankedSection />
      <ChallengingSection />
      <CareersVideoSection />
      <ExploreSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    careersHeroBg: file(name: { eq: "careers-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1335, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

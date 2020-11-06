import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import HeroContent from '../components/HeroContent'
import RankedSection from '../components/CareersPage/RankedSection'
import ChallengingSection from '../components/CareersPage/ChallengingSection'
import CareersVideoSection from '../components/CareersPage/CareersVideoSection'
import ExploreSection from '../components/CareersPage/ExploreSection'

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
      <HeroSection heroBgFluid={data.servicesHeroBg.childImageSharp.fluid}>
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
    servicesHeroBg: file(name: { eq: "services-hero-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1335, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

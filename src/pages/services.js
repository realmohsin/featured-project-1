import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
// import HeroSection from '../components/HeroSection'
// import HeroContent from '../components/HeroContent'
// import LeftInfoSection1 from '../components/ServicesPage/LeftInfoSection1'
// import LeftInfoSection2 from '../components/ServicesPage/LeftInfoSection2'
// import RightInfoSection1 from '../components/ServicesPage/RightInfoSection1'
// import RightInfoSection2 from '../components/ServicesPage/RightInfoSection2'
// import SafetySection from '../components/ServicesPage/SafetySection'
// import VideoSafetySection from '../components/ServicesPage/VideoSafetySection'

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
      {/* <HeroSection heroBgFluid={data.servicesHeroBg.childImageSharp.fluid}>
        <HeroContent
          subtitle='Working For You'
          title='Hundreds of professionals covering everything from ground-up new construction and renovations, to remodels and program rollouts.'
          buttonText='General Construction'
          url='/'
          extraClass={classes.extraHeroContent}
        />
      </HeroSection>
      <SafetySection />
      <VideoSafetySection />
      <LeftInfoSection1 />
      <RightInfoSection1 />
      <LeftInfoSection2 />
      <RightInfoSection2 /> */}
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

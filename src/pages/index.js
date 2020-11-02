import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/HomePage/ProjectSection'
import AboutSection from '../components/HomePage/AboutSection'
import PeopleSection from '../components/HomePage/PeopleSection'
import NewsSection from '../components/HomePage/NewsSection'
import HeroContent from '../components/HeroContent'

export default function Home ({ data }) {
  return (
    <Layout>
      <HeroSection heroBgFluid={data.hero1.childImageSharp.fluid}>
        <HeroContent
          subtitle='The&Partnership / New York NY'
          title='A Modern Approach to Thinking Outside the Box'
          buttonText='View Project'
          url='/'
        />
      </HeroSection>
      <ProjectSection />
      <AboutSection />
      <PeopleSection />
      <NewsSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    hero1: file(name: { eq: "hero-img-1" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1335, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # featured1Big: file(name: { eq: "featured-1-big" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 1000, maxHeight: 573) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    # featured1Small: file(name: { eq: "featured-1-small" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 300, maxHeight: 450) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    # featured1Logo: file(name: { eq: "featured-1-logo" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 500, maxHeight: 223) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
  }
`

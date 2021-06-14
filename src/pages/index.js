import React from 'react'
import { graphql } from 'gatsby'
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
      <HeroSection heroImgData={data.homeHeroBg.childImageSharp} homePage>
        <HeroContent
          subtitle='The&Partnership / New York NY'
          title='A Modern Approach to Thinking Outside the Box'
          buttonText='View Projects'
          url='/projects'
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
    homeHeroBg: file(name: { eq: "hero-img-1" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

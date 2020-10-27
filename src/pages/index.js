import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import HeroSection from '../components/HomePage/HeroSection'
import FeaturedProjects from '../components/HomePage/FeaturedProjects'
import AboutSection from '../components/HomePage/AboutSection'
import PeopleSection from '../components/HomePage/PeopleSection'
import NewsSection from '../components/HomePage/NewsSection'

export default function Home ({ data }) {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <PeopleSection />
      <NewsSection />
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     # file(relativePath: { eq: "featured-1.png" }) {
//     #   childImageSharp {
//     #     fixed(width: 125, height: 125) {
//     #       ...GatsbyImageSharpFixed
//     #     }
//     #   }
//     # }
//     # contentfulRomanoHomePage {
//     #   heroImageTitle
//     #   heroImage1 {
//     #     fluid(maxWidth: 1800, quality: 100) {
//     #       ...GatsbyContentfulFluid
//     #     }
//     #   }
//     # }
//   }
// `

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Home ({ data }) {
  return <Layout>hello</Layout>
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

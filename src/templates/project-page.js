import React from 'react'
import Layout from '../components/layout'

import { makeStyles, Box, Container, Grid, Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import projects from '../data/projects'

const useStyles = makeStyles(theme => ({}))

const ProjectPageTemplate = ({ pageContent }) => {
  const projectData = projects.find(
    project => project.name === pageContent.name
  )
  if (projectData === undefined) return <div>404</div>

  return (
    <Layout>
      {/* <HeroSection heroBgFluid={data.hero1.childImageSharp.fluid}>
        <HeroContent
          subtitle='The&Partnership / New York NY'
          title={`Project Page`}
          buttonText='View Project'
          url='/'
        />
      </HeroSection> */}
      hello
      {/* <ProjectSection />
      <AboutSection />
      <PeopleSection />
      <NewsSection /> */}
    </Layout>
  )
}

// export const query = graphql`
//   query($name: String!) {
//     site {
//       siteMetadata {
//         projects {
//           $name
//         }
//       }
//     }
//   }
// `

export default ProjectPageTemplate

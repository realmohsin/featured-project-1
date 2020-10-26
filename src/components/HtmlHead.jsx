import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const HtmlHead = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        name='description'
        content={description || site.siteMetadata.description}
      />
    </Helmet>
  )
}

export default HtmlHead
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
      <link
        href='https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  )
}

export default HtmlHead

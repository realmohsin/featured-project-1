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

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      {/* <meta property='og:url' content='http://myawesomewebsite.com/' /> */}
      <meta property='og:title' content={title} />
      <meta
        property='og:description'
        content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
      />
      <meta property='og:image' content='/facebookimage.png' />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='http://myawesomewebsite.com/' />
      <meta property='twitter:title' content='My Awesome Website' />
      <meta
        property='twitter:description'
        content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
      />
      <meta property='twitter:image' content='/twitterimage.png' />
    </Helmet>
  )
}

export default HtmlHead

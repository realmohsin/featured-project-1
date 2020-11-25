const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      site {
        siteMetadata {
          projects {
            slug
            imgName
            name
            hero {
              title
              subtitle
              heroImgName
            }
            infoSection {
              logoImgName
              infoParagraphs
              infoRightImgName
              squareFt
              timelineWks
              clientSince
            }
            videoSection {
              overlayImgName
              vidSectionBg
            }
            quoteSection {
              leftQuoteImgName
              quote
              quoter
            }
            newsSection {
              newsLogoImgName
              newsBgImgName
              newsTitle
              newsSubtitle
              newsParagraph
              newsButton
              newsButtonLink
            }
            moreProjectsSection {
              project1 {
                project1Name
                project1ImgName
              }
              project2 {
                project2Name
                project2ImgName
              }
              project3 {
                project3Name
                project3ImgName
              }
            }
          }
        }
      }
    }
  `)

  result.data.site.siteMetadata.projects.forEach(
    ({
      slug,
      imgName,
      name,
      hero: { title, subtitle, heroImgName },
      infoSection: {
        logoImgName,
        infoParagraphs,
        infoRightImgName,
        squareFt,
        timelineWks,
        clientSince
      },
      videoSection: { overlayImgName, vidSectionBg },
      quoteSection: { leftQuoteImgName, quote, quoter },
      newsSection: {
        newsLogoImgName,
        newsBgImgName,
        newsTitle,
        newsSubtitle,
        newsParagraph,
        newsButton,
        newsButtonLink
      },
      moreProjectsSection: {
        project1: { project1Name, project1ImgName },
        project2: { project2Name, project2ImgName },
        project3: { project3Name, project3ImgName }
      }
    }) => {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/project-page.js`),
        context: {
          slug,
          imgName,
          name,
          hero: {
            title,
            subtitle
          },
          heroImgName,
          infoSection: {
            infoParagraphs,
            squareFt,
            timelineWks,
            clientSince
          },
          logoImgName,
          infoRightImgName,
          overlayImgName,
          vidSectionBg,
          quoteSection: {
            quote,
            quoter
          },
          leftQuoteImgName,
          newsSection: {
            newsTitle,
            newsSubtitle,
            newsParagraph,
            newsButton,
            newsButtonLink
          },
          newsLogoImgName,
          newsBgImgName,
          moreProjectsSection: {
            project1Name,
            project2Name,
            project3Name
          },
          project1ImgName,
          project2ImgName,
          project3ImgName
        }
      })
    }
  )
}

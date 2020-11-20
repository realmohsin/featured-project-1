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
            name
            slug
          }
        }
      }
    }
  `)

  result.data.site.siteMetadata.projects.forEach(({ name, slug }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        name
      }
    })
  })
}

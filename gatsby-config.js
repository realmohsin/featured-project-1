module.exports = {
  siteMetadata: {
    title: 'template-2',
    description: 'Description for template-2.',
    author: '' // this is for twitter seo, use twitter handle
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `common-images`,
    //     path: `${__dirname}/src/assets/images/common`
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `home-page-images`,
    //     path: `${__dirname}/src/assets/images/home-page`
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `careers-page-images`,
    //     path: `${__dirname}/src/assets/images/careers-page`
    //   }
    // },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}

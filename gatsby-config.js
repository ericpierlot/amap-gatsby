module.exports = {
  siteMetadata: {
    title: `AMAP L'isle sur la sorgue`,
    description: `AMAP L'isle sur la sorgue. Des paniers de légumes bio et de saison toutes les semaines à l'isle sur la sorgue.`,
    author: `Eric`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    //   {
    //     resolve: `gatsby-source-wordpress`,
    //     options: {
    //         baseUrl: `amap-islesursorgue.fr`,
    //         protocol: `https`,
    //         includedRoutes: ['**/posts'],
    //         useACF: false
    //     }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `studio bloom`,
    description: `Studio bloom, we are a web agency based in the blue mountains that provide Website Design and Development for small businesses`,
    author: `Studio Bloom`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `studio-bloom`,
        short_name: `studio bloom`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/diamond.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};

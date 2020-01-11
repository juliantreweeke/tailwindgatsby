require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    `Contentful spaceId and the access token need to be provided.`
  )
};

module.exports = {
  siteMetadata: {
    title: `studio bloom`,
    description: `Studio bloom, we are a web agency based in the blue mountains that provide Website Design and Development for small businesses`,
    author: `Studio Bloom`
  },
  plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: contentfulConfig,
      },
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
        icon: `src/images/lotus2.png`
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


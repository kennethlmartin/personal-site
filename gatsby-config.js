/**
 * @file gatsby-config
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = {
  author: '@kennethlmartin',
  description: 'Personal website for Kenneth Martin',
  title: 'Kenneth Martin',
};

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-emotion',
  'gatsby-plugin-theme-ui',
  {
    options: {
      icon: 'src/images/icon.jpg',
      name: 'Kenneth Martin',
      short_name: 'Kenny',
      start_url: '/',
    },
    resolve: 'gatsby-plugin-manifest',
  },
  {
    options: {
      anonymize: true,
      trackingId: 'UA-173106412-1',
    },
    resolve: 'gatsby-plugin-google-analytics',
  },
];

module.exports = {
  plugins,
  siteMetadata,
};

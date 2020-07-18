module.exports = {
  siteMetadata: {
    title: 'Kenneth Martin',
    description: 'Personal website for Kenneth Martin',
    author: '@kennethlmartin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kenneth Martin',
        short_name: 'Kenny',
        start_url: '/',
        icon: 'src/images/avatar-circle.png',
      },
    },
  ],
}
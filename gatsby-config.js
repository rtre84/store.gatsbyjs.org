require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl_orig: 'https://store.gatsbyjs.org',
    siteUrl: 'https://cutepetsuppliesstore.com/',
    title: 'Woofs and Meows! Get your pet supplies here!',
    description:
      'We pride ourselves in curating an extensive range of unique premium quality products at very competitive prices. With something for every season in a variety of styles, sizes and colors, show your pet some love today or better yet, gift your loved ones with simple yet thoughtful trinkets for their furry friends no matter where they are and take advantage of our worldwide shipping on all orders… stress-free.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/`)
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'pet-supplies-admin',
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        paginationSize: 25
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Store',
        short_name: 'Gatsby Store',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2C0B02',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-93349937-6',
        respectDNT: true
      }
    }
  ]
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: 'ecommerce',
  },
  developMiddleware: app => {
    if (process.env.API_URL) {
      app.use(
        '/api',
        proxy({
          target: process.env.API_URL || '/',
          changeOrigin: true,
          secure: false,
        })
      );
      app.use(
        '/admin',
        proxy({
          target: process.env.API_URL || '/',
          changeOrigin: true,
          secure: false,
        })
      );
    } else {
      app.use(
        '/api',
        proxy({
          target: '/',
          changeOrigin: true,
          secure: false,
          router: {
            'localhost:8000': 'http://localhost:5000'
          }
        })
      );
      app.use(
        '/admin',
        proxy({
          target: '/',
          changeOrigin: true,
          secure: false,
          router: {
            'localhost:8000': 'http://localhost:5000'
          }
        })
      );
    }

  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-firebase',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffb200',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-layout'
    // 'gatsby-plugin-offline',
  ]
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://codebase.studio`,
    title: "Flutter Software Development Company | Helping you design and develop your tech startup",
    titleTemplate: "%s · Codebase Studio",
    author: "Codebase Studio",
    image: "../assets/images/codebase_logo_black.png",
    defaultImage: "../assets/images/codebase_logo_black.png",
    url: "https://codebase.studio",
    description: "Do you have an idea for a tech startup? We are a cross-platfrom software development company that helps non-technical founders & entrepreneurs develop amazing mobile and web tech for their startup. Get a quote today."
  },
  plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/static/img`,
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/src/pages`,
            name: 'pages',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/src/assets/images`,
            name: 'images',
          },
        },
        {
          resolve: 'gatsby-transformer-remark',
          options: {
            plugins: [
              {
                resolve: 'gatsby-remark-relative-images',
                options: {
                  name: 'uploads',
                },
              },
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 2048,
                },
              },
              {
                resolve: 'gatsby-remark-copy-linked-files',
                options: {
                  destinationDir: 'static',
                },
              },
            ],
          },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-offline',
        {
          resolve: 'gatsby-plugin-netlify-cms',
          options: {
            modulePath: `${__dirname}/src/cms/cms.js`,
            stylePath: `${__dirname}/src/cms/styles.css`
          },
        },
        // {
        //   resolve: `gatsby-plugin-google-analytics`,
        //   options: {
        //     trackingId: 'UA-141693263-1',
        //     head: false,
        //     anonymize: true,
        //   },
        // },
        // {
        //   resolve: `gatsby-plugin-facebook-pixel`,
        //   options: {
        //     pixelId: '407626136581094',
        //   },
        // },
        {
          resolve: `gatsby-plugin-hotjar`,
          options: {
            id: 1381054,
            sv: 6
          },
        },
        {
          resolve: `@mangoart/gatsby-plugin-purechat`,
          options: {
            // PureChat js snippet
            enabled: true,
            websiteId: `bd18f713-df8e-4782-9532-e519766415d4`, 
          },
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'src/assets/images/codebase_logo_black.png', // This path is relative to the root of the site.
          },
        },
        {
          resolve: `@mangoart/gatsby-plugin-purechat`,
          options: {
            // include the PureChat js snippet
            enabled: true,
            // your website id, extract from the snippet provided by purechat 
            websiteId: `YOUR_WEBSITE_ID`, 
          },
        },
        {
          resolve: 'gatsby-plugin-emotion',
          options: {
          },
        },
        {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
            host: 'https://www.codebase.studio',
            sitemap: 'https://www.codebase.studio/sitemap.xml',
            policy: [{ userAgent: '*', allow: '/', disallow: ['/admin'] }]
          }
        },
        'gatsby-plugin-netlify'
      ],
}


module.exports = {
  siteMetadata: {
    siteUrl: `https://codebase.studio`,
    title: "Flutter Software Development Company | We build tech startups | Codebase Studio",
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
        // {
        //   resolve:'gatsby-plugin-layout',
        //   options: {
        //     component: require.resolve('./src/components/layout/Layout')
        //   }
        // },
        {
          resolve: 'gatsby-plugin-netlify-cms',
          options: {
            modulePath: `${__dirname}/src/cms/cms.js`,
            stylePath: `${__dirname}/src/cms/styles.css`
          },
        },
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-141693263-1",
            head: true,
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
          resolve: 'gatsby-plugin-emotion',
          options: {
          },
        },
        'gatsby-plugin-netlify'
      ],
}











//   plugins: [
//     'gatsby-plugin-sharp',
//     'gatsby-transformer-sharp',
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         path: `${__dirname}/static/img`,
//         name: 'uploads',
//       },
//     },
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         path: `${__dirname}/src/pages`,
//         name: 'pages',
//       },
//     },
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         path: `${__dirname}/src/assets/images`,
//         name: 'images',
//       },
//     },
//     {
//       resolve: 'gatsby-transformer-remark',
//       options: {
//         plugins: [
//           {
//             resolve: 'gatsby-remark-relative-images',
//             options: {
//               name: 'uploads',
//             },
//           },
//           {
//             resolve: 'gatsby-remark-images',
//             options: {
//               maxWidth: 2048,
//             },
//           },
//           {
//             resolve: 'gatsby-remark-copy-linked-files',
//             options: {
//               destinationDir: 'static',
//             },
//           },
//         ],
//       },
//     },
//     'gatsby-plugin-react-helmet',
//     'gatsby-plugin-sass',
//     `gatsby-plugin-sitemap`,
//     'gatsby-plugin-offline',
//     {
//       resolve: 'gatsby-plugin-netlify-cms',
//       options: {
//         modulePath: `${__dirname}/src/cms/cms.js`,
//         stylePath: `${__dirname}/src/cms/styles.css`
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-analytics`,
//       options: {
//         trackingId: "UA-141693263-1",
//         head: true,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: 'gatsby-starter-default',
//         short_name: 'starter',
//         start_url: '/',
//         background_color: '#663399',
//         theme_color: '#663399',
//         display: 'minimal-ui',
//         icon: 'src/assets/images/codebase_logo_black.png', // This path is relative to the root of the site.
//       },
//     },
//     {
//       resolve: 'gatsby-plugin-emotion',
//       options: {
//       },
//     },
//     'gatsby-plugin-netlify'
//   ],
// }

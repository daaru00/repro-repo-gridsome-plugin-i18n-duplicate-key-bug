// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['de-de', 'en-us'],
        pathAliases: {
          'de-de': 'de',
          'en-us': 'en',
        },
        enablePathRewrite: false,
        fallbackLocale: 'en-us',
        defaultLocale: 'de-de',
        messages: {},
      },
    },
  ],
  templates: {
    Product: [
      {
        path: '/product/:id',
      },
    ],
  },
}

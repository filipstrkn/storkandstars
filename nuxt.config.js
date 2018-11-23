require('dotenv').config()


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'storkandstars',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'studio site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheets',
        href: 'https://fonts.googleapis.com/css?family=Karma:300,400|Source+Sans+Pro:300,400,600,700&amp;subset=latin-ext'
      }
    ],
  },
  modules: [
    ['storyblok-nuxt', { accessToken: 'QnXlb6vo8JjKti7gkDI0Dgtt', cacheProvider: 'memory' }],
    '@nuxtjs/dotenv'
  ],
  plugins: [
    '~/plugins/components'
  ],
  serverMiddleware: ['~/api'],
  /*
  ** Customize the progress bar color
  */
  loading: {
    name: 'pulse',
    color: '#3B8070',
    background: '#000000',
  },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLint on save
  //   */
  //   extend (config, { isDev, isClient }) {
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}


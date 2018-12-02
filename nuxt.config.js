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
        href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700|Lora:400,400i,700&amp;subset=latin-ext'
        // href: 'https://fonts.googleapis.com/css?family=Karma:300,400|Source+Sans+Pro:300,400,600,700&amp;subset=latin-ext'
      },
      {
        rel: 'stylesheets',
        href: 'href="https://use.typekit.net/oqr0cnm.css'
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
  // loading: false,
  loading: {
    name: 'pulse',
    color: '#000000',
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


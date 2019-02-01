require('dotenv').config()


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'eoeo - design sprints & digital art',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'studio site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheets',
        href: 'https://fonts.googleapis.com/css?family=Mukta|Muli:600|Merriweather:300,300i,400,400i,700'
      }
    ],
  },
  modules: [
    ['storyblok-nuxt', { accessToken: 'QnXlb6vo8JjKti7gkDI0Dgtt', cacheProvider: 'memory' }],
    '@nuxtjs/dotenv'
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/masonry'
  ],
  serverMiddleware: ['~/api'],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/Loading/index.vue',
  // loading: {
  //   name: 'pulse',
  //   color: '#000000',
  //   background: '#000000',
  // },
  scrollToTop: false
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


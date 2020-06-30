import path from 'path'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Bekah McDonald | Front End Developer based in London',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I’m a front-end developer, with 3+ years of agency experience and a strong background in project management. I’m a fast learner, love teaching myself new things, and bring a project-management level of organisation to everything I do.',
      },
      { name: 'msapplication-TileColor', content: '#f8c34e' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png?v=oLJGaOglqd',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png?v=oLJGaOglqd',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=oLJGaOglqd',
      },
      { rel: 'manifest', href: '/site.webmanifest?v=oLJGaOglqd' },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg?v=oLJGaOglqd',
        color: '#f8c34e',
      },
      { rel: 'shortcut icon', href: '/favicon.ico?v=oLJGaOglqd' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/stylesheets/style.scss', '@/assets/stylesheets/fonts.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/lazysizes.client.js',
    '@/plugins/smoothscroll.client.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient, loaders }) {
      loaders.scss.prependData = `@import "${path.resolve(
        __dirname,
        'assets/stylesheets/prepend.scss'
      )}";`
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        // 'postcss-url': false,
        // 'postcss-nested': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}

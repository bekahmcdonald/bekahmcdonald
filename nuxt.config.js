import path from 'path'

export default {
  target: 'static',
  head: {
    title:
      'Bekah McDonald | Freelance web developer based in East London, specialising in WordPress, Shopify and web animation.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Freelance web developer based in East London, specialising in WordPress, Shopify and web animation.',
      },
      { name: 'msapplication-TileColor', content: '#f8c34e' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png?v=wjvAygHTit',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png?v=wjvAygHTit',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=wjvAygHTit',
      },
      { rel: 'manifest', href: '/site.webmanifest?v=wjvAygHTit' },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg?v=wjvAygHTit',
        color: '#f8c34e',
      },
      { rel: 'shortcut icon', href: '/favicon.ico?v=wjvAygHTit' },
      {
        rel: 'stylesheet',
      },
    ],
  },
  css: ['@/assets/stylesheets/fonts.scss', '@/assets/stylesheets/style.scss'],
  plugins: [
    '@/plugins/lazysizes.client.js',
    '@/plugins/smoothscroll.client.js',
    '@/plugins/amplitude.client.js',
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-PMDTP7S',
  },
  axios: {},
  build: {
    extend(config, { isDev, isClient, loaders }) {
      loaders.scss.additionalData = `@import "${path.resolve(
        __dirname,
        'assets/stylesheets/prepend.scss'
      )}";`
    },
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}

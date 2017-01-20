require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'React Redux Example',
    description: 'All the modern best practices in one example.',
    head: {
      title: 'create, share, and find free public data',
      titleTemplate: '%s - zenow',
      meta: [
        {name: 'description', content: 'Create, Share, and Find Free Public Data'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'zenow'},
        {property: 'og:image', content: 'https://www.zenow.io/images/logo.png'},
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'zenow'},
        {property: 'og:description', content: 'Create, Share, and Find Free Public Data'},
        {property: 'og:image:width', content: '380'},
        {property: 'og:image:height', content: '194'}
      ]
    }
  },

}, environment);

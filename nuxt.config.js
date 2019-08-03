module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'try-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // css: [
  //   // node.js 모듈을 로드합니다.
  //   'hover.css/css/hover-min.css',
  //   // 전처리기가 사용된 node.js 모듈.
  //   { src: 'bulma', lang: 'sass' },
  //   // 프로젝트 내부의 Css 파일
  //   '~assets/css/main.css',
  //   // 프로젝트의 sass 파일
  //   { src: '~assets/css/main.scss', lang: 'scss' } // sass 대신 scss
  // ]
}


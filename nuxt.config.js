const pkg = require('./package')
const bodyParser =  require('body-parser')
const axios = require('axios');



module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'T59 Enterprise',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, maximum-scale=1' },
      { rel: 'description', name: 'description', content: 'Circuito de Surf 013' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }     
       
    ]
  },    
    
      
    
  
  /*
  ** Customize the progress-bar color
  */
  loading: false, 

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/k-framework.css',
    '~assets/styles/tipography.css',
    '~assets/styles/animations.css',
    '~assets/styles/forms.css'
  ],
  
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [   
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['nuxt-social-meta', {
      url: 'http://www.t59enterprise.com.br/',
      title: 'Circuito de Surf 013 em Santos SP!',
      description: 'Inscreva-se Já!',
      img: 'http://agenciakpax.com.br/wp-content/uploads/2019/04/circuito-de-surf-013-em-santos.jpg',
      locale: 'ru_RU',
      twitter: '@UserName',
      themeColor: '#ThemeColor'
    }]
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://t59enterprise.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://t59enterprise.firebaseio.com',
    fbAPIKey: 'AIzaSyAWo-CohkiLxfPkDSZAmx_J7Q1beWZYekA'
    

  }, 
  transition: {
    name:'fade',
    mode:'out-in'  
  },
//   router: {
//     middleware: 'log'
//  }
serverMiddleware: [
  bodyParser.json(),
  '~/api'
],
generate: {
  routes: function(){
    return axios.get('https://t59enterprise.firebaseio.com/posts.json')
    .then(res => {
      const routes = []
      for (const key in res.data) {
        routes.push({
          route: '/posts/' + key, 
          payload:{postData: res.data[key]}
         });
      }
      return routes
     })     
   }
  }
}

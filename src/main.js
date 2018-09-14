import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from '../store'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.blue.base,
  //   secondary: colors.blue.lighten2,
  //   accent: '#82B1FF',
  //   error: '#FF5252',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FFC107'
  // }
})

Vue.config.productionTip = false

// Register Custom Global Components

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
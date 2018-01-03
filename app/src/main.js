import Vue from 'vue';
import App from './App';
import router from './router';
import Velocity from './libs/velocity.js';
import './sass/main.sass';

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

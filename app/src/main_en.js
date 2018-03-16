import Vue from 'vue';
import App from './App';
import router from './router';
import Velocity from './libs/velocity.js';
import './sass/main.sass';
var VueTouch = require('vue-touch');
var data = require('./langs/en.json')


VueTouch.config.pan = {
  threshold: 10
}
VueTouch.config.swipe = {
  threshold: 140
}

// Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data() {
    return {
    	data
    };
  }
})

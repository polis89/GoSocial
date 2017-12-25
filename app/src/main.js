import Velocity from './libs/velocity.js'
import Vue from 'vue'
import App from './App.vue'
import './sass/main.sass'
var axios = require('axios');

new Vue({
  el: '#app',
  render: h => h(App)
})


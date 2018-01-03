import Vue from 'vue'
import Router from 'vue-router'
import Index from '../vues/Index'
import Portfolio from '../vues/portfolio'
import Job from '../vues/job'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
    	path: '/portfolio',
    	name: 'portfolio',
    	component: Portfolio
    },
    {
    	path: '/portfolio/:type',
    	name: 'portfolio',
    	component: Portfolio
    },
    {
      path: '/job',
      name: 'job',
      component: Job
    },
    {
    	path: '/job/:id',
    	name: 'job',
    	component: Job
    },
  ]
})

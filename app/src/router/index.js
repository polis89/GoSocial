import Vue from 'vue'
import Router from 'vue-router'
import Index from '../vues/Index'
import Portfolio from '../vues/portfolio'
import Vacancy from '../vues/vacancy'
import Job from '../vues/job'
import Agency from '../vues/agency'
import People from '../vues/people'
import Design from '../vues/design'

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
    	name: 'portfolioTYPE',
    	component: Portfolio
    },
    {
      path: '/job',
      name: 'job',
      component: Job
    },
    {
      path: '/job/:id',
      name: 'jobID',
      component: Job
    },
    {
      path: '/vacancy',
      name: 'vacancy',
      component: Vacancy
    },
    {
      path: '/agency',
      name: 'agency',
      component: Agency
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
    	path: '/design',
    	name: 'design',
    	component: Design
    },
  ]
})

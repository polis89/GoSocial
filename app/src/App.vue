<template>
  <div id="app">
    <app-header v-bind:appStatus="appStatus" v-on:burger-click="burgerClick"></app-header>
    <app-main-page></app-main-page>
    <app-menu v-bind:appStatus="appStatus" v-on:show-page="showPageFromMenu"></app-menu>
    <portfolio v-bind:is-open="showPortfolio"></portfolio>
  </div>
</template>

<script>
import header from './vues/header.vue'
import menu from './vues/menu.vue'
import portfolio from './vues/portfolio.vue'
import mainpage from './vues/main-page.vue'

export default {
  name: 'app',
  components:{
    "app-header": header,
    "app-menu": menu,
    "portfolio": portfolio,
    "app-main-page": mainpage,
  },
  data () {
    return {
      showPortfolio: false,
      appStatus: 'start',  //Start - showMenu - showPage
    }
  },
  methods: {
    burgerClick(event) {
      switch(this.appStatus){
        case 'start':
          this.appStatus = 'showMenu';
          break;
        case 'showMenu':
          this.appStatus = 'start';
          break;
        case 'showPage':
          this.openPrevPage();
          break;
      }
    },
    showPageFromMenu(event){
      this.showPortfolio = true;
      this.appStatus = 'showPage';
    },
    openPrevPage(){
      this.appStatus = 'showMenu';
      this.showPortfolio = false;
    },
  }
}
</script>

<style lang="sass">

#app
	font-family: 'Gilroy', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	position: absolute
	top: 0
	left: 0
	width: 100%
	z-index: 1000
	min-height: 100%


h1, h2 
	font-weight: normal;


ul 
	list-style-type: none;
	padding: 0;


li 
	display: inline-block;
	margin: 0 10px;


a 
	color: #42b983;

</style>

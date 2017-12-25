<template>
  <div id="app">
    <app-header v-bind:appStatus="appStatus" v-on:burger-click="burgerClick"></app-header>
    <app-main-page v-on:show-page="showCatalog"></app-main-page>
    <app-menu v-bind:appStatus="appStatus" v-on:show-page="showCatalog"></app-menu>
    <portfolio v-bind:is-open="showPortfolio" v-bind:works="portfolioWorks"></portfolio>
  </div>
</template>

<script>
import header from './vues/header.vue'
import menu from './vues/menu.vue'
import portfolio from './vues/portfolio.vue'
import mainpage from './vues/main-page.vue'
var axios = require('axios');
const AJAX_URL = 'http://polies.ru/GoSocial/wp-json';

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
      appStatus: 'start',  //Start - showMenu - showPage
      showPortfolio: false,
      portfolioWorks: [],

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
    showCatalog(cat){
      var self = this;
      console.log("Category = " + cat);
      axios.get(AJAX_URL + '/wp/v2/works?_embed')
        .then(function (response) {
          self.portfolioWorks = [];
          var responseData = response.data;
          if(cat){
            responseData = responseData.filter(function(item){
              console.log('filter for: ');
              console.log(item);
              return item.work_category.indexOf(cat) != -1;
            });
          }
          console.log(responseData);
          axios.get(AJAX_URL + "/acf/v3/works")
            .then(function(responseACF){
              console.log('responseACF');
              console.log(responseACF);

              responseData.forEach(function(item){
                var name = item.title.rendered;
                var thumbnail = item._embedded['wp:featuredmedia'][0].source_url;
                var desc = "";
                for (var i = 0; i < responseACF.data.length; i++){
                  if(responseACF.data[i].id == item.id){
                    desc = responseACF.data[i].acf['краткое_описание'];
                    break;
                  }
                }
                self.portfolioWorks.push({name: name, thumbnail: thumbnail, desc: desc});
              });
              self.showPortfolio = true;
              self.appStatus = 'showPage';
            });
        })
        .catch(function (error) {
          console.log(error.message);
      });
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
	color: #000;
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

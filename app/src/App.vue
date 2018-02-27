<template>
  <div id="app">
    <router-link :to="'/'" class="h1_sm">GOSOCIAL</router-link>
    <app-header v-bind:isMobile="isMobile" v-bind:appStatus="appStatus" v-on:burger-click="burgerClick"></app-header>
    <app-main-page></app-main-page>
    <app-menu v-bind:isMobile="isMobile" v-bind:appStatus="appStatus"></app-menu>
    <router-view v-bind:isMobile="isMobile"/>
  </div>
</template>

<script>
import header from './vues/header.vue'
import menu from './vues/menu.vue'
import mainpage from './vues/main-page.vue'

export default {
  name: 'app',
  components:{
    "app-header": header,
    "app-menu": menu,
    "app-main-page": mainpage,
  },
  data () {
    return {
      isMobile: window.innerWidth < 991,
      appStatus: 'start',  //Start - showMenu - showPage
    }
  },
  mounted () {
    switch(this.$route.name){
      case "portfolio":
      case "portfolioID":
      case "job":
      case "jobID":
      case "vacancy":
      case "agency":
      case "people":
      case "design":
      case "news":
      case "newsID":
        this.appStatus = "showPage";
        return;
      default:
        this.appStatus = "start";
    }
    console.log(this.$route);
  },
  watch: {
    '$route' (to, from) {
      // При изменении страницы изменять состояние приложения
      // console.log(from);
      // console.log(to);
      if(((" " + document.body.className + " " ).indexOf( " noscroll " ) > -1)){
        document.body.classList.toggle("noscroll");
      }
      switch(to.name){
        case "portfolio":
        case "portfolioTYPE":
        case "job":
        case "jobID":
        case "vacancy":
        case "agency":
        case "people":
        case "design":
        case "news":
        case "newsID":
          this.appStatus = "showPage";
          return;
        case "index":
          if(this.isMobile){
            this.appStatus = "start"
          }else{
            this.appStatus = "showMenu";
          }
          return;
        default:
          this.appStatus = "showMenu";
      }
      // console.log('newAppStatus = ' + this.appStatus);
    }
  },
  methods: {
    burgerClick(event) {
      if(!this.isMobile){
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
      }else{
        switch(this.appStatus){
          case 'start':
          case 'showPage':
            this.appStatus = 'showMenu';
            if(!((" " + document.body.className + " " ).indexOf( " noscroll " ) > -1)){
              document.body.classList.toggle("noscroll");
            }
            break;
          case 'showMenu':
            this.appStatus = 'start';
            if((" " + document.body.className + " " ).indexOf( " noscroll " ) > -1){
              document.body.classList.toggle("noscroll");
            }
            break;
        }
      }
    },
    openPrevPage(){
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="sass">
  @font-face
    font-family: "Gilroy"
    font-weight: normal
    font-style: normal
    src: url('./fonts/Gilroy-Regular.otf') format('truetype')

  @font-face
    font-family: "Gilroy"
    font-weight: bold
    font-style: normal
    src: url('./fonts/Gilroy-Bold.otf') format('truetype')

  @font-face
    font-family: "Gilroy"
    font-weight: 900
    font-style: normal
    src: url('./fonts/Gilroy-Black.otf') format('truetype')

  @font-face
    font-family: "Gilroy"
    font-weight: 600
    font-style: normal
    src: url('./fonts/Gilroy-Semibold.otf') format('truetype')

  @font-face
    font-family: "Gilroy"
    font-weight: 500
    font-style: normal
    src: url('./fonts/Gilroy-Medium.otf') format('truetype')
</style>

<template>
  <div id="app">
    <app-header v-bind:appStatus="appStatus" v-on:burger-click="burgerClick"></app-header>
    <app-main-page></app-main-page>
    <app-menu v-bind:appStatus="appStatus"></app-menu>
    <router-view/>
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
      console.log('WATCH route');
      console.log(from);
      console.log(to);
      switch(to.name){
        case "portfolio":
        case "portfolioID":
        case "job":
        case "jobID":
        case "vacancy":
          this.appStatus = "showPage";
          return;
        default:
          this.appStatus = "showMenu";
      }
      console.log('newAppStatus = ' + this.appStatus);
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
    showJob(job){
      var self = this;
      console.log("showjob, job = " + job);
      axios.get(AJAX_URL + '/wp/v2/works/' + job + '?_embed')
        .then(function (response) {
          var responseData = response.data;
          console.log(responseData);
          self.currentJob = {};
          self.currentJob.title = responseData.title.rendered;
          self.currentJob.mainImg = responseData.acf["главное_изображение"];
          self.currentJob.mainDesc = responseData.acf["текст_под_описанием"];
          self.currentJob.authors = [];
          if(responseData.acf["авторы"]){
            for (var i = 0; i < responseData.acf["авторы"].length; i++){
              self.currentJob.authors.push({
                position: responseData.acf["авторы"][i]["должность"], 
                name: responseData.acf["авторы"][i]["имя"]});
            }
          }
          self.currentJob.contentLines = [];
          if(responseData.acf["блоки"]){
            for (var i = 0; i < responseData.acf["блоки"].length; i++){
              var newLine = {};
              var block = responseData.acf["блоки"][i];
              if(block["тип"] == "Большое изображение"){
                newLine.big = true;
                newLine.block = {imgUrl: block["изображение"]}
              }else{
                newLine.big = false;
                newLine.blocks = [];
                newLine.blocks.push({isImg: block["тип"] == "Маленькое изображение", imgUrl: block["изображение"], text: block["текст"]});
                if(!newLine.big){
                  i++;
                  block = responseData.acf["блоки"][i];
                  if(block){
                    newLine.blocks.push({isImg: block["тип"] == "Маленькое изображение", imgUrl: block["изображение"], text: block["текст"]});
                  }
                }
              }
              self.currentJob.contentLines.push(newLine);
            }
          }
          console.log(self.currentJob);
          self.showPortfolio = false;
          self.isJobShowed = true;
        })
        .catch(function (error) {
          console.log(error.message);
      });
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

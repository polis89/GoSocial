<template>
  <div id="app">
    <app-header v-bind:appStatus="appStatus" v-on:burger-click="burgerClick"></app-header>
    <app-main-page v-on:show-catalog="showCatalog"></app-main-page>
    <app-menu v-bind:appStatus="appStatus" v-on:show-catalog="showCatalog"></app-menu>
    <portfolio 
      v-bind:is-open="showPortfolio" 
      v-bind:works="portfolioWorks" 
      v-on:show-catalog="showCatalog"
      v-on:show-job="showJob"></portfolio>
    <job 
      v-bind:is-open="isJobShowed"
      v-bind:job="currentJob"
      v-on:show-catalog="showCatalog"></job>
  </div>
</template>

<script>
import header from './vues/header.vue'
import menu from './vues/menu.vue'
import portfolio from './vues/portfolio.vue'
import job from './vues/job.vue'
import mainpage from './vues/main-page.vue'
var axios = require('axios');
const AJAX_URL = 'http://polies.ru/GoSocial/wp-json';

function removeHTMLTags(str){
  str = str.replace(/&(lt|gt);/g, function (strMatch, p1){
    return (p1 == "lt")? "<" : ">";
  });
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export default {
  name: 'app',
  components:{
    "app-header": header,
    "app-menu": menu,
    "portfolio": portfolio,
    "app-main-page": mainpage,
    "job": job,
  },
  data () {
    return {
      appStatus: 'start',  //Start - showMenu - showPage
      showPortfolio: false,
      isJobShowed: false,
      portfolioWorks: [],
      currentJob: {},
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
      console.log("showCatalog, Category = " + cat);
      axios.get(AJAX_URL + '/wp/v2/works?_embed')
        .then(function (response) {
          self.portfolioWorks = [];
          var responseData = response.data;
          if(cat){
            responseData = responseData.filter(function(item){
              // console.log('filter for: ');
              // console.log(item);
              return item.work_category.indexOf(cat) != -1;
            });
          }
          console.log(responseData);
          axios.get(AJAX_URL + "/acf/v3/works")
            .then(function(responseACF){
              // console.log('responseACF');
              // console.log(responseACF);

              responseData.forEach(function(item){
                var name = item.title.rendered;
                var thumbnail = item._embedded['wp:featuredmedia'][0].source_url;
                var id = item.id;
                var desc = "";
                for (var i = 0; i < responseACF.data.length; i++){
                  if(responseACF.data[i].id == item.id){
                    desc = responseACF.data[i].acf['краткое_описание'];
                    break;
                  }
                }
                self.portfolioWorks.push({name: removeHTMLTags(name), thumbnail: thumbnail, desc: desc, id: id});
              });
              self.showPortfolio = true;
              self.appStatus = 'showPage';
            });
        })
        .catch(function (error) {
          console.log(error.message);
      });
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
      if(this.showPortfolio){
        this.appStatus = 'showMenu';
        this.showPortfolio = false;
      }else if(this.isJobShowed){
        this.isJobShowed = false;
        this.showPortfolio = true;
      }
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

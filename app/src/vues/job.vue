<template>
  <transition 
    name="inleft">
    <div class="job-page">
      <!-- JOB -->
      <img v-bind:src="job.mainImg" alt="job" class="top-img">
      <div class="wrapper-job">
        <div class="top-block">
          <div class="h1" v-html="job.title"></div>
          <div v-html="job.mainDesc">
          </div>
          <div class="authors">
            <div class="desc">
              People may forget
            </div>
            <div class="author" v-for="author in job.authors">
              <div class="pos">{{ author.position }}</div>
              <div class="name">{{ author.name }}</div>
            </div>
          </div>
        </div>
        <div class="content-line" v-for="line in job.contentLines">
          <template v-if="line.big">
            <div class="block big-block">
              <div class="img-cont">
                <img v-bind:src="line.block.imgUrl" alt="img">
              </div>
            </div>
          </template>
          <template v-else>
            <div class="block" v-for="block in line.blocks">
              <div class="img-cont" v-if="block.isImg">
                <img v-bind:src="block.imgUrl" alt="img">
              </div>
              <template v-else>
                <div class="text-cont" v-html="block.text">
                  
                </div>
                <div class="img-bottom" v-if="block.imgUrl">
                  <img v-bind:src="block.imgUrl" alt="img">
                </div>
              </template>
            </div>
          </template>
        </div>
        <div class="icon-mouse">
          <img src="img/scroll.png" alt="icon">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';
import rest from '../rest';
var axios = require('axios');

export default {
  // name: 'app',
  components:{  
    "app-footer": appfooter,
  },
  props: ['isOpen'],
  data () {
    return {
      // pageShowed: false,
      job: {},
    }
  },
  beforeRouteEnter (to, from, next) {
    var job = {};
    var jobID = to.params.id;
    console.log("showjob, job = " + jobID);
    axios.get(rest.AJAX_URL + '/wp/v2/works/' + jobID + '?_embed')
      .then(function (response) {
        var responseData = response.data;
        console.log(responseData);
        job.title = responseData.title.rendered;
        job.mainImg = responseData.acf["главное_изображение"];
        job.mainDesc = responseData.acf["текст_под_описанием"];
        job.authors = [];
        if(responseData.acf["авторы"]){
          for (var i = 0; i < responseData.acf["авторы"].length; i++){
            job.authors.push({
              position: responseData.acf["авторы"][i]["должность"], 
              name: responseData.acf["авторы"][i]["имя"]});
          }
        }
        job.contentLines = [];
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
            job.contentLines.push(newLine);
          }
        }
        console.log(job);
        next(vm => vm.job = job);
        // self.showPortfolio = false;
        // self.isJobShowed = true;
      })
      .catch(function (error) {
        console.log(error.message);
    });

  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  }
}
</script>

<style lang="sass">

</style>

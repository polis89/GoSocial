<template>
  <transition 
    name="inleft_fade-mob">
    <div class="job-page">
      <!-- JOB -->
      <img v-if="!isMobile" v-bind:src="job.mainImg" alt="job" class="top-img">
      <div v-if="!isMobile" class="wrapper-job">
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
      <div class="header_sm" v-if="isMobile">
        <img src="img/info-icon.png" alt="info" class="info-job" v-on:click="clickInfo">
      </div>
      <div class="job_imgs-sm" v-if="isMobile">
        <div class="pad"></div>
        <template v-for="image in job.imgs">
          <div class="img-cont">
            <img :src="image" alt="img" class="img-full">
          </div>
        </template>
      </div>
      <div class="header_sm header_sm_close" v-if="isJobInfoShowed" v-on:click="clickInfo">
        <div class="close-icon">
          <span></span>
          <span></span>
        </div>
      </div>

      <transition 
        name="inleftall">
        <div class="job_info-sm " v-if="isJobInfoShowed">
          <div class="wrap-job-sm">
            <div class="h1" v-html="job.title"></div>
            <div class="h1-desc">
              Lorem ipsum dol <br>
              or sit amet, adi
            </div>
            <div v-html="job.mainDesc">
            </div>
            <div class="content-line-sm" v-for="line in job.contentLines">
              <div class="block-sm" v-for="block in line.blocks">
                <template v-if="!block.isImg">
                  <div class="text-cont" v-html="block.text">
                    
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';
import rest from '../rest';
var axios = require('axios');

export default {
  props: [],
  components:{  
    "app-footer": appfooter,
  },
  props: ['isOpen'],
  data () {
    return {
      isMobile: window.innerWidth < 991,
      isJobInfoShowed: false,
      job: {},
    }
  },
  beforeRouteEnter (to, from, next) {
    var job = {};
    job.imgs = []; //Mobile imgs
    var jobID = to.params.id;
    console.log("showjob, job = " + jobID);
    axios.get(rest.AJAX_URL + '/wp/v2/works/' + jobID + '?_embed')
      .then(function (response) {
        var responseData = response.data;
        console.log(responseData);
        job.title = responseData.title.rendered;
        job.mainImg = responseData.acf["главное_изображение"];
        job.imgs.push(job.mainImg);
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
              newLine.block = {imgUrl: block["изображение"]};
              job.imgs.push(block["изображение"]);
            }else{
              newLine.big = false;
              newLine.blocks = [];
              newLine.blocks.push({isImg: block["тип"] == "Маленькое изображение", imgUrl: block["изображение"], text: block["текст"]});
              if(block["изображение"]){
                job.imgs.push(block["изображение"]);
              }
              if(!newLine.big){
                i++;
                block = responseData.acf["блоки"][i];
                if(block){
                  newLine.blocks.push({isImg: block["тип"] == "Маленькое изображение", imgUrl: block["изображение"], text: block["текст"]});
                  if(block["изображение"]){
                    job.imgs.push(block["изображение"]);
                  }
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
    clickInfo: function(event){
      this.isJobInfoShowed = !this.isJobInfoShowed;
      document.body.classList.toggle("noscroll");
    }
  }
}
</script>

<style lang="sass">

</style>

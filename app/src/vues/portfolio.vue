<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="port-wrap">
      <div class="header_sm" v-if="isMobile">
      </div>
      <div class="portfolio">
        <div class="wrapper wrapper-port">
          <transition name="fadein" mode="out-in">
            <template v-if="!isMobile">
              <div class="portfolio-vars" v-if="isDesign">
                <router-link :to="'/portfolio/' + categoriesID.design[0]">{{ texts.all }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[1]">{{ texts.cat_potreb }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[2]">{{ texts.cat_corp }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[3]">{{ texts.cat_expo }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[4]">{{ texts.cat_event }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[5]">{{ texts.cat_riteil }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[6]">{{ texts.cat_web }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[7]">{{ texts.cat_motion }}</router-link>
              </div>
              <div class="portfolio-vars" v-else-if="isSmm">
                <router-link :to="'/portfolio/' + categoriesID.smm[0]">{{ texts.all }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[7]">Никуда</router-link>
              </div>
              <div class="portfolio-vars" v-else>
                <router-link to="/portfolio">Все</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.design[0]">{{ texts.cat_design }}</router-link>
                /
                <router-link :to="'/portfolio/' + categoriesID.smm[0]">{{ texts.cat_smm }}</router-link>
              </div>
            </template>
          </transition>
          <transition-group   
            name="fadein">
                  <template v-for="(workitem, index) in works">
                    <!-- <router-link class="work" :to="{ name: 'job', params: { id: workitem.id }}"> -->
                    <router-link class="work" :to="'/job/' + workitem.id" v-bind:key="workitem.id + '_' + categoryType">
                      <img v-bind:src="workitem.thumbnail" alt="work">
                      <div class="desc-cont" v-if="!isMobile">
                        <div class="name"> {{ workitem.name }} </div>
                        <div class="text"> {{ workitem.desc }} </div>
                      </div>
                    </router-link>
                    <!-- <a href="#"  v-on:click.prevent="showJob(workitem.id)"></a> -->
                  </template>
          </transition-group>
          <a href="#" class="download">
            <div class="img-cont">
              <img src="img/pdf.png" alt="pdf">
            </div>
            <div class="text-cont">
              <strong>{{ texts.download }}</strong><br>
              {{ texts.ourOffer }}
            </div>
          </a>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';
import rest from '../rest';
var axios = require('axios');

export default {
  props: ['isMobile'],
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      works: {},
      categoryType: 0,
      categoriesID: {
        // order: desigh, Потребительский , Корпоративный, Экспо , Event , Ритейл , Web, Моушн
        design: [3, 20, 21, 22, 23, 24, 25, 26],
        // order: smm, 
        smm: [2, 2],
      },
      readyToUpdate: true,
      texts: {}
    }
  },
  created: function() {
      this.texts = this.$root.$data.page_catalog;
  },
  computed: {
    isDesign: function(){
      return this.categoriesID.design.indexOf(this.categoryType) != -1;
    },
    isSmm: function(){
      return this.categoriesID.smm.indexOf(this.categoryType) != -1;
    },
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
    showJob: function (job){
      // console.log('showJob in portfolio');
      this.$emit('show-job', job);
      // console.log('showJob 2 in portfolio');
    },
  },
  beforeRouteEnter (to, from, next) {
    axios.get(rest.AJAX_URL + '/wp/v2/works?_embed')
      .then(function (response) {
        var responseData = response.data;
        var categoryType = parseInt(to.params.type) || 0;
        var works = [];
        // console.log('Open portfolio, categoryID = ' + categoryType);
        if(categoryType){
          responseData = responseData.filter(function(item){
            // console.log('filter for: ');
            // console.log(item);
            return item.work_category.indexOf(categoryType) != -1;
          });
        }
        // console.log('Filtered Data:');
        // console.log(responseData);
        responseData.forEach(function(item){
          var langSuff = "";
          if(!langSuff){
            var name = item.title.rendered;
          }else{
            // console.log('title = ' + "title" + i18n.LANG_SUFF);
            // console.log('LANG_SUFF = ' + langSuff);
            var name = item.acf["title" + langSuff];
          }
          var thumbnail = item._embedded['wp:featuredmedia'][0].source_url;
          var id = item.id;
          var desc = item.acf["краткое_описание" + langSuff];
          if(name){
            works.push({name: rest.removeHTMLTags(name), thumbnail: thumbnail, desc: desc, id: id});
          }
        });
        next(vm => {vm.works = works; vm.categoryType = categoryType});
      })
      .catch(function (error) {
        console.log(error.message);
    });
  },
  beforeRouteUpdate (to, from, next) {
    var self = this;
    // this.readyToUpdate = false;
    this.works = {};
    // setTimeout(function(){
    //   self.readyToUpdate = true;
    // }, 500);
    axios.get(rest.AJAX_URL + '/wp/v2/works?_embed')
      .then(function (response) {
        var responseData = response.data;
        var categoryType = parseInt(to.params.type) || 0;
        var works = [];
        // console.log('Open portfolio, categoryID = ' + categoryType);
        if(categoryType){
          responseData = responseData.filter(function(item){
            // console.log('filter for: ');
            // console.log(item);
            return item.work_category.indexOf(categoryType) != -1;
          });
        }
        // console.log('Filtered Data:');
        // console.log(responseData);
        responseData.forEach(function(item){
          var langSuff = i18n.LANG_SUFF;
          if(!langSuff){
            var name = item.title.rendered;
          }else{
            // console.log('title = ' + "title" + i18n.LANG_SUFF);
            // console.log('LANG_SUFF = ' + langSuff);
            var name = item.acf["title" + langSuff];
          }
          var thumbnail = item._embedded['wp:featuredmedia'][0].source_url;
          var id = item.id;
          var desc = item.acf["краткое_описание" + langSuff];
          if(name){
            works.push({name: rest.removeHTMLTags(name), thumbnail: thumbnail, desc: desc, id: id});
          }
        });
          self.works = works;
          self.categoryType = categoryType;
          next();
        // }
      })
      .catch(function (error) {
        console.log(error.message);
    });
    // next();
  },
  beforeRouteLeave (to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    // console.log(to);
    if(to.name == "portfolio" || to.name == "portfolioTYPE"){
      this.works = {};
    }
    next();
  }
}
</script>

<style lang="sass">

</style>

<template>
  <transition 
    name="inleft">
    <div class="page page-news">
      <div class="wrapper-page">
        <div class="header_sm" v-if="isMobile">
        </div>
        <div class="news_item" v-for="news_item in pageData.news">
          <div class="name" v-if="!isMobile" >{{news_item.name}}</div>
          <router-link :to="'news/' + news_item.id" class="name" v-if="isMobile" v-html="news_item.name"></router-link>
          <div class="row">
            <div class="img-cont">
              <img :src="news_item.img" alt="img">
            </div>
            <div class="text-cont" v-if="!isMobile">
              <div class="text-big" v-html="news_item.short_desc"></div>
              <div class="text">
                {{news_item.long_desc}}
                <router-link :to="'news/' + news_item.id"><nobr>{{texts.more}}</nobr></router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <app-footer></app-footer>
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
      texts: {},
      pageData: {},
      translates: {
      }
    }
  },
  created: function() {
      this.texts = this.$root.$data.page_news;
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
  beforeRouteEnter (to, from, next) {
    var pageData = {};
    var pageID = 65;
    // console.log("show News");
    axios.get(rest.AJAX_URL + '/wp/v2/posts?_embed')
      .then(function (response) {
        var responseData = response.data;
        // console.log(responseData);
        pageData.news = [];
        if(responseData){
          for (var i = 0; i < responseData.length; i++){
            var news_item = {
              name: responseData[i].title.rendered,
              short_desc: responseData[i].acf['короткое_описание'],
              long_desc: responseData[i].acf['длинное_описание'],
              img: responseData[i].acf['фото'],
              id: responseData[i].id
            };
            pageData.news.push(news_item);
          }
        }
        next(vm => vm.pageData = pageData);
      })
      .catch(function (error) {
        console.log(error.message);
    });
  },
}
</script>

<style lang="sass">

</style>

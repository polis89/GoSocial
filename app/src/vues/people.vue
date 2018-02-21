<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="page page-people">
      <div class="wrapper-people">
        <h2 class="h2">Доска почета</h2>
        <div class="peoples">
          <div class="people" v-for="(worker, index) in pageData.workers">
            <div class="img-cont">
              <img :src="worker.img" alt="img">
            </div>
            <div class="name">{{worker.name}}</div>
            <div class="position">{{worker.position}}</div>
            <div class="quote" v-if="worker.slogan" v-html="worker.slogan">
              
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
import i18n from '../i18n';
var Instafeed = require("instafeed.js");
var axios = require('axios');

export default {
  props: ['isMobile'],
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      pageData: {},
      translates: {
        download: i18n.translates.download[i18n.LANG_INDEX] ,
        ourOffer: i18n.translates.ourOffer[i18n.LANG_INDEX] ,
        all: i18n.translates.all[i18n.LANG_INDEX] ,
      }
    }
  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
  beforeRouteEnter (to, from, next) {
    var pageData = {};
    console.log("show Peoples");
    axios.get(rest.AJAX_URL + '/wp/v2/workers?_embed')
      .then(function (response){
        var responseData = response.data;
        console.log(responseData);
        pageData.workers = [];
        if(responseData){
          for (var i = responseData.length - 1; i >= 0; i--){
            var vac = {
              img: responseData[i]._embedded['wp:featuredmedia'][0].source_url,
              name: responseData[i].acf['имя'],
              position: responseData[i].acf['должность'],
              slogan: responseData[i].acf['девиз'],
            };
            pageData.workers.push(vac);
          }
        }
        console.log(pageData.workers);
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
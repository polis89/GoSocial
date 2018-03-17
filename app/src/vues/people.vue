<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="page page-people">
      <div class="wrapper-people">
        <div class="header_sm" v-if="isMobile">
        </div>
        <h2 class="h2">{{texts.board}}</h2>
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
var axios = require('axios');

export default {
  props: ['isMobile'],
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      pageData: {},
      texts: {}
    }
  },
  created: function() {
      this.texts = this.$root.$data.page_people;
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
  beforeRouteEnter (to, from, next) {
    var pageData = {};
    // console.log("show Peoples");
    axios.get(rest.AJAX_URL + '/wp/v2/workers?_embed')
      .then(function (response){
        var responseData = response.data;
        // console.log(responseData);
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
        // console.log(pageData.workers);
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
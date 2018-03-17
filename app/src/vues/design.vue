<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="page page-design">
      <div class="wrapper-page">
        <div class="header_sm" v-if="isMobile">
        </div>
        <div class="portfolio-vars">
          <router-link to="/design">{{texts.cat_design}}</router-link>
          /
          <router-link to="/portfolio/3">{{texts.cat_smm}}</router-link>
          /
          <router-link to="/portfolio/2">{{texts.cat_seo}}</router-link>
          /
          <router-link to="/portfolio">{{texts.cat_proj}}</router-link>
        </div>
        <div class="row">
          <div class="text-block">
            <h2 class="h2">{{texts.b1_title}}</h2>
            <h3 class="h3" v-html="texts.b1_h3"></h3>
            <p v-html="texts.b1_text">
            </p>
          </div>
          <div class="img-cont">
            <img src="img/pred-1.jpg" alt="img">
          </div>
        </div>
        <div class="row inverse">
          <div class="text-block">
            <h2 class="h2">{{texts.b2_title}}</h2>
            <h3 class="h3" v-html="texts.b2_h3"></h3>
            <p v-html="texts.b2_text"></p>
          </div>
          <div class="img-cont">
            <img src="img/pred-2.jpg" alt="img">
          </div>
        </div>
        <div class="row">
          <div class="text-block">
            <h2 class="h2">{{texts.b3_title}}</h2>
            <h3 class="h3" v-html="texts.b3_h3">
            </h3>
            <p v-html="texts.b3_text">
            </p>
          </div>
          <div class="img-cont">
            <img src="img/pred-3.jpg" alt="img">
          </div>
        </div>

      </div>
      <app-footer></app-footer>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';

export default {
  props: ['isMobile'],
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      texts: {},
      works: {}
    }
  },
  created: function() {
      this.texts = this.$root.$data.page_design;
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
}
</script>

<style lang="sass">

</style>

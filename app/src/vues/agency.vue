<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="page page-agency">
      <div class="wrapper-page">
        <div class="header_sm__placeholder" v-if="!isMobile"></div>
        <div class="header_sm" v-if="isMobile">
        </div>
        <div class="row">
          <div class="left">
            <div class="shift-right">
              <h2 class="h2-big" v-html="texts.b1_title">
              </h2>
              <div class="img-full" v-if="isMobile">
                <img src="img/agency-1.jpg" alt="img">
              </div>
              <div class="text-cont gray">
                <p v-html="texts.b1_desc">
                </p>
              </div>
              <div class="out-desc" v-if="!isMobile" v-html="texts.b1_desc_left">
              </div>
            </div>
            <div class="img-cont" v-if="!isMobile">
              <img src="img/agency-2.jpg" alt="img">
            </div>
          </div>     
          <div class="right">
            <div class="shift-right">
              <div class="img-cont">
                <img src="img/agency-1.jpg" alt="img" v-if="!isMobile">
              </div>
              <div class="h2-big" v-html="texts.b2_title">
              </div>
              <div class="img-full" v-if="isMobile">
                <img src="img/agency-2.jpg" alt="img">
              </div>
              <p v-if="isMobile" v-html="texts.b2_desc">
              </p>
              <div class="left-in">
                <img src="img/q-1.png" alt="q" class="quote">
                <img src="img/q-1.png" alt="q" class="quote rotate">
                {{texts.b2_quote}}
              </div>
              <div class="right-in">
                <p v-if="!isMobile" v-html="texts.b2_desc">
                </p>
                <div class="desc" >
                  {{texts.b2_desc_left}}
                </div>
              </div>
            </div>
          </div>     
        </div>
        <div class="row">
          <div class="left">
            <div class="close" v-if="!isMobile">
              <span></span>
              <span></span>
            </div>
            <div class="desc" v-if="!isMobile" v-html="texts.b3_desc_left">
            </div>
            <div class="h2-big" v-html="texts.b3_title">
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-5.jpg" alt="img">
            </div>
            <div class="left-in" v-html="texts.b3_desc">
            </div>
            <div class="four-img" v-if="isMobile">
              <img src="img/agency-6-sm.jpg" alt="img">
              <img src="img/agency-7-sm.jpg" alt="img">
              <img src="img/agency-8-sm.jpg" alt="img">
              <img src="img/agency-9-sm.jpg" alt="img">
            </div>
            <div class="right-in" v-html="texts.b3_desc_add">
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-10-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="text-rotate">
              {{texts.b3_text_rotate}}
            </div>
            <div class="desc-abs" v-html="texts.b3_text_right_add">
            </div>
            <div class="shift-left">
              <div class="left-in">
                <div class="img-cont">
                  <img src="img/agency-3.jpg" alt="img">
                </div>
              </div>
              <div class="right-in">
                <div class="img-cont">
                  <img src="img/agency-4.jpg" alt="img">
                </div>
              </div>
              <div class="desc" >
                <p v-html="texts.b3_text_right"></p>
              </div>
              <div class="img-cont">
                <img src="img/agency-5.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!isMobile">
          <div class="left">
            <div class="img-cont">
              <img src="img/agency-6.jpg" alt="img">
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="img-cont">
                <img src="img/agency-7.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!isMobile">
          <div class="left">
            <div class="left-in half">
              <div class="img-cont">
                <img src="img/agency-8.jpg" alt="img">
              </div>
            </div>
            <div class="right-in half">
              <div class="img-cont">
                <img src="img/agency-9.jpg" alt="img">
              </div>
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="img-cont">
                <img src="img/agency-10.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <div class="h2-big" v-html="texts.b4_title">
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-11-sm.jpg" alt="img">
            </div>
            <div class="four-img" v-if="isMobile">
              <img src="img/agency-14-sm.jpg" alt="img">
              <img src="img/agency-15-sm.jpg" alt="img">
              <img src="img/agency-13-sm.jpg" alt="img">
              <img src="img/agency-12-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="desc-abs">
              <p v-html="texts.b4_right_1">
              </p>
              <p v-html="texts.b4_right_2">
              </p>
              <p v-html="texts.b4_right_3">
              </p>
            </div>
            <div class="shift-left">
              <div class="img-cont">
                <img src="img/agency-11.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!isMobile">
          <div class="left">
            <div class="left-in half">
              <div class="img-cont">
                <img src="img/agency-12.jpg" alt="img">
              </div>
            </div>
            <div class="right-in half">
              <div class="img-cont">
                <img src="img/agency-13.jpg" alt="img">
              </div>
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="left-in half">
                <div class="img-cont">
                  <img src="img/agency-14.jpg" alt="img">
                </div>
              </div>
              <div class="right-in half">
                <div class="img-cont">
                  <img src="img/agency-15.jpg" alt="img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <div class="left-in" v-html="texts.b4_text_1">
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-17-sm.jpg" alt="img">
            </div>
            <div class="right-in">
              <div class="text-cont" v-html="texts.b4_text_2">
              </div>
              <div class="img-cont" v-if="!isMobile">
                <img src="img/agency-16.jpg" alt="img">
              </div>
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-16-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="shift-left">
              <div class="img-cont" >
                <img src="img/agency-17.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="h2-big alt">
          {{texts.b5_title}}
        </div>
        <div class="row row-alt">
          <div class="left">
            <p v-html="texts.b5_text_1">
            </p>
            <div class="four-img" v-if="isMobile">
              <img src="img/agency-18-sm.jpg" alt="img">
              <img src="img/agency-18-sm.jpg" alt="img">
              <img src="img/agency-18-sm.jpg" alt="img">
              <img src="img/agency-18-sm.jpg" alt="img">
            </div>
            <p v-html="texts.b5_text_2">
            </p>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-19-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="img-cont-alt">
              <img src="img/agency-18.jpg" alt="img">
            </div>
          </div>
        </div>
        <div class="row row-alt" v-if="!isMobile">
          <div class="left">
            <div class="img-cont ">
              <img src="img/agency-19.jpg" alt="img">
            </div>
          </div>
          <div class="right">
            <div class="left-in">
              <div class="img-cont">
                <img src="img/agency-20.jpg" alt="img">
              </div>
            </div>
            <div class="right-in">
              <div class="img-cont">
                <img src="img/agency-21.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="h2-big alt mb" >
          <span v-html="texts.b6_title"></span>
          <div class="desc" v-if="!isMobile" v-html="texts.b6_title_desc">
          </div>
          <a href="#" class="insta-mob" v-if="isMobile">instagram</a>
        </div>
        <div class="row">
          <div class="img-full" v-if="isMobile">
            <img src="img/agency-22-sm.jpg" alt="img">
          </div>
          <div class="left">
            <div class="left-in" v-html="texts.b6_text_1">
            </div>
            <div class="right-in" v-html="texts.b6_text_2">
            </div>
          </div>
          <a href="#" class="insta" v-if="!isMobile">
            instagram
          </a>
        </div>
        <div id="instafeed"></div>
        <div class="desc-mob" v-if="isMobile" v-html="texts.b6_title_desc">
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';
var Instafeed = require("instafeed.js");

export default {
  props: ['isMobile'],
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      works: {},
      texts: {}
    }
  },
  created: function() {
      this.texts = this.$root.$data.page_agency;
  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
  beforeMount () {
    var limit = this.isMobile ? 2 : 3;
    var feed = new Instafeed({
        get: 'user',
        userId: '5883772097',
        clientId: '0ecbd7d90ddb49b5859624837a23c17c',
        accessToken: "5883772097.0ecbd7d.467846ec0d1b4c5588f3b18376c0784c",
        resolution: "low_resolution",
        limit: limit,
    });
    feed.run();
  }
}
</script>

<style lang="sass">

</style>

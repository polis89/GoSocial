<template>
  <div id="main-page">
    <div class="wrapper" id="wrapper-main">
      <v-touch ref="swiper"  
        v-on:pandown="onPanDown" 
        v-on:panup="onPanUp" 
        v-on:swipedown="onSwipeDown" 
        v-on:swipeup="onSwipeUp" 
        v-on:swiperight="onSwipeRight"
        v-on:swipeleft="onSwipeLeft">
        <div class="carousel">
            <div class="slide" v-for="slide in slides" >
              <transition
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false">
                <div v-if="slide.id == currentSlide">
                  
                  <div class="slide_img">
                    <img :src=slide.img alt="img">
                  </div>
                  <div class="slide_text" v-html="slide.text">
                  </div>
                </div>
             </transition>
            </div>
        </div>
        <div class="carousel-controls">
          <button v-on:click="showSlide(1)" v-bind:class="{active: 1 == currentSlide}">01</button>
          <button v-on:click="showSlide(2)" v-bind:class="{active: 2 == currentSlide}">02</button>
          <button v-on:click="showSlide(3)" v-bind:class="{active: 3 == currentSlide}">03</button>
          <button v-on:click="showSlide(4)" v-bind:class="{active: 4 == currentSlide}">04</button>
        </div>
        <div id="mobile-menu-out" class="mobile-menu" v-bind:class="{ active: showMobileMenu && isMobile}">
          <div id="mobile-menu" class="mobmenu-cont">
            <div class="title">Здравый<br> смысл - <br> худший враг<br> творчества.</div>
            <div class="img-cont">
              <img src="img/portfel.jpg" alt="img">
            </div>
            <div class="btns">
              <div class="btn"><router-link to="/portfolio/2" class="link-page">Дизайн</router-link></div>
              <div class="btn"><router-link to="/portfolio/3" class="link-page">Смм</router-link></div>
            </div>
          </div>
        </div>
      </v-touch>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appfooter from './app-footer.vue'

export default {
  // name: 'app',
  props: ['isMobile', 'showMobileMenu'],
  components:{  
    "app-footer": appfooter,
  },
  mounted() {
    // this.$refs.swiper.disable('swipe');
    // this.$refs.swiper.disable('swipeup');
  },
  data () {
    return {
      slides: [
        {
          text: "Здравый<br> смысл - <br> худший враг<br> творчества.",
          img: "img/bg-1.png",
          id: 1,
        },
        {
          text: "Второй<br> смысл - <br> худший враг<br> творчества.",
          img: "img/bg-1.png",
          id: 2,
        },
        {
          text: "Третий<br> смысл - <br> худший враг<br> творчества.",
          img: "img/bg-1.png",
          id: 3,
        },
        {
          text: "Четвертый<br> смысл - <br> худший враг<br> творчества.",
          img: "img/bg-1.png",
          id: 4,
        },
      ],
      currentSlide: 1,
      anim: 'right',
      // showMobileMenu: false,
      enableMobileMenu: false,
      panPrev: 0
    }
  },
  methods: {
    showSlide(slideIndex){
      this.anim = 'right';
      this.currentSlide = slideIndex;
    },
    onSwipeLeft(){
      this.anim = 'left';
      this.currentSlide = this.currentSlide % 4 + 1;
    },
    onSwipeRight(){
      this.anim = 'right';
      this.currentSlide = (this.currentSlide == 1) ? 4 : this.currentSlide - 1;
    },
    onSwipeUp(){
      var el = document.getElementById('wrapper-main');
      var viewportOffset = el.getBoundingClientRect();
      if(viewportOffset.bottom - 1 < document.documentElement.clientHeight){
        // this.showMobileMenu = true;
        this.panPrev = 0;
        this.$emit('openMobMenu');
      }
      // console.log(viewportOffset.bottom);
    },
    // onSwipeDown(){
    //   // console.log('Menu offset');
    //   var el = document.getElementById('mobile-menu');
    //   var viewportOffset = el.getBoundingClientRect();
    //   // console.log(viewportOffset.bottom);
    //   // console.log(el.offsetHeight);
    //   if(viewportOffset.bottom > el.offsetHeight){
    //     this.showMobileMenu = false;
    //     this.panPrev = 0;
    //   }
    // },
    onPanDown(e){
      // console.log('Delta:');
      // console.log(e.deltaY);
      // console.log('PanPrev:');
      // console.log(this.panPrev);
      if(this.panPrev <= 0 || this.panPrev > e.deltaY){
        // console.log('start');
        this.panPrev = 0;
        if(!this.showMobileMenu){
          window.scrollBy(0, -(e.deltaY - this.panPrev));
        }else{
          var el = document.getElementById('mobile-menu-out');
          el.scrollBy(0, -(e.deltaY - this.panPrev));
        }
      }else{
        // console.log('Diff: ');
        // console.log(-(e.deltaY - this.panPrev));
        if(!this.showMobileMenu){
          window.scrollBy(0, -(e.deltaY - this.panPrev));
        }else{
          var el = document.getElementById('mobile-menu-out');
          el.scrollBy(0, -(e.deltaY - this.panPrev));
        }
      }
      this.panPrev = e.deltaY;
    },
    onPanUp(e){
      // console.log('Delta:');
      // console.log(e.deltaY);
      // console.log('PanPrev:');
      // console.log(this.panPrev);
      if(this.panPrev >= 0 || this.panPrev < e.deltaY){
        // console.log('start');
        this.panPrev = 0;
        if(!this.showMobileMenu){
          window.scrollBy(0, -(e.deltaY - this.panPrev));
        }else{
          var el = document.getElementById('mobile-menu-out');
          el.scrollBy(0, -(e.deltaY - this.panPrev));
        }
      }else{
        // console.log('Diff: ');
        // console.log(-(e.deltaY - this.panPrev));
        if(!this.showMobileMenu){
          window.scrollBy(0, -(e.deltaY - this.panPrev));
        }else{
          var el = document.getElementById('mobile-menu-out');
          el.scrollBy(0, -(e.deltaY - this.panPrev));
        }
      }
      this.panPrev = e.deltaY;
    },
    enter: function (el, done) {
      // Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      if(this.anim == 'right'){
        Velocity(el, { translateX: ['0%','-100%'] }, { duration:600, complete: done });
      }else{
        Velocity(el, { translateX: ['0%','100%'] }, { duration:600, complete: done });
      }
    },
    leave: function (el, done) {
      if(this.anim == 'right'){
        Velocity(el, { translateX: ['100vw', '0vw'] }, { duration:600, complete: done });
      }else{
        Velocity(el, { translateX: ['-100vw', '0vw'] }, { duration:600, complete: done });
      }
    }
  }
}
</script>

<style lang="sass">
</style>

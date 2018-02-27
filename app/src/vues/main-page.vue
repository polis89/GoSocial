<template>
  <div id="main-page">
    <div class="wrapper">
      <v-touch v-on:swiperight="onSwipeRight" v-on:swipeleft="onSwipeLeft">
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
      </v-touch>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appfooter from './app-footer.vue'

export default {
  // name: 'app',
  components:{  
    "app-footer": appfooter,
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
      anim: 'right'
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

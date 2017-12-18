<template>
  <div id="main-page">
    <div class="wrapper">
      <carousel :perPage="1">
        <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
        <slide>
          Slide 3 Content
        </slide>
        <slide>
          Slide 4 Content
        </slide>
      </carousel>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import appfooter from './app-footer.vue'

export default {
  // name: 'app',
  components:{  
    Carousel,
    Slide,
    "app-footer": appfooter,
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="sass">
</style>

<template>
  <transition 
    name="inleft">
    <div class="portfolio" v-if="isOpen">
      <div class="wrapper wrapper-port">
        <template>
          <a href="#"  class="work" v-for="workitem in works">
            <img v-bind:src="workitem.thumbnail" alt="work">
            <div class="desc-cont">
              <div class="name"> {{ workitem.name }} </div>
              <div class="text"> {{ workitem.desc }} </div>
            </div>
          </a>
        </template>
      </div>
      <app-footer v-on:show-catalog="$emit('show-catalog', $event)"></app-footer>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue'
export default {
  // name: 'app',
  components:{  
    "app-footer": appfooter,
  },
  props: ['isOpen', 'works'],
  data () {
    return {
      // pageShowed: false,
    }
  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  }
}
</script>

<style lang="sass">

</style>

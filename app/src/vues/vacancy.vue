<template>
  <transition 
    name="inleft">
    <div class="vacancy-page">
      <div class="wrapper-job">
        ВАКАНСИИ
      </div>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';
import rest from '../rest';
var axios = require('axios');

export default {
  // name: 'app',
  components:{  
    "app-footer": appfooter,
  },
  // props: ['isOpen'],
  data () {
    return {
      // pageShowed: false,
      job: {},
    }
  },
  beforeRouteEnter (to, from, next) {
    next();
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

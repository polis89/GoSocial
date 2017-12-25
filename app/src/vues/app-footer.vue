<template>
  <footer>
    <div class="wrapper">
      <div class="links">
        <img src="img/icon-foot-1.png" alt="icon">
        <a href="#" v-on:click="showPage(0)">Portfolio</a>
        /
        <a href="#" v-on:click="showPage(3)">Design</a>
        /
        <a href="#" v-on:click="showPage(2)">Smm</a>
      </div>
      <div class="socials">
        <a href="#"><img src="img/icon-foot-2.png" alt="icon"></a>
        <a href="#"><img src="img/icon-foot-3.png" alt="icon"></a>
        <a href="#"><img src="img/icon-foot-4.png" alt="icon"></a>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  // name: 'app',
  components:{  
  },
  data () {
    return {
    }
  },
  methods: {
    showPage: function (cat){
      this.$emit('show-page', cat);
    },
  }
}
</script>

<style lang="sass">
</style>

<template>
  <div class="header__line">
    <div class="wrapper">
      <h1 class="h1">GOSOCIAL</h1>
      <div class="burger-cont" v-on:click="btnClick">
        <div id="hamburger" class="open">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="langs">
        <a href="http://polies.ru/gs/en" class="lang">en</a>
        <a href="http://polies.ru/gs" class="lang">ru</a>
        <a href="http://polies.ru/gs/mo" class="lang">mo</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'app',
  props: ['appStatus'],
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
    appStatus: function(newV,old){
      // console.log('New: ' + newV + "; old: " + old)
      var burg = document.getElementById('hamburger');
      if(newV == "showMenu" && old == "start"){
        //From burger to close
        burg.className = " ";
        setTimeout(function(){
          burg.className = "close";
        }, 200);
      } else if(newV == "start") {
        //From close to burger
        burg.className = " ";
        setTimeout(function(){
          burg.className = "open";
        }, 200);
      } else if(newV == "showPage") {
        //From close to arrow
        burg.className = " ";
        setTimeout(function(){
          burg.className = "arrow";
        }, 200);
      } else if(newV == "showMenu" && old == "showPage"){
        //From arrow to burger
        burg.className = "arrow-to-line ";
        setTimeout(function(){
          burg.className = "close";
        }, 200);
      }
    }
  },
  methods: {
    btnClick: function (event) {
      this.$emit('burger-click');
    }
  }
}
</script>

<style lang="sass">

</style>

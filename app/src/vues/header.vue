<template>
  <div class="header__line">
    <div class="wrapper">
      <router-link :to="'/'" ><h1 class="h1">GOSOCIAL</h1></router-link>
      
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
        <a href="http://polies.ru/gs/ro" class="lang">ro</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'app',
  props: ['appStatus', 'isMobile'],
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
    appStatus: function(newV,old){
      // console.log('new: ' + newV + ', old: ' + old);
      var burg = document.getElementById('hamburger');
      if(newV == "showMenu" && old == "start"){
        //From burger to close
        burg.className = " ";
        setTimeout(function(){
          burg.className = "close";
        }, 200);
      } else if(newV == "start") {
        //From close to burger
        if(!this.isMobile){
          burg.className = " ";
          setTimeout(function(){
            burg.className = "open";
          }, 200);
        }else if(old == "showMenu"){
          burg.className = " ";
          setTimeout(function(){
            burg.className = "open";
          }, 200);
        }else{
          burg.className = "open";
        }
      } else if(newV == "showPage") {
        //From close to arrow
        if(!this.isMobile){
          burg.className = " ";
          setTimeout(function(){
            burg.className = "arrow";
          }, 200);
        }else{
          burg.className = " ";
          setTimeout(function(){
            burg.className = "open";
          }, 200);
        }
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

<template>
  <transition 
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false" >
    <div class="app-menu" v-if="menuShowed">
      <div class="app-menu__container">
        <div v-if="isMobile">
          <div class="langs">
            <a :href=texts.common.link_en class="lang">en</a>
            <a :href=texts.common.link_ru class="lang">ru</a>
            <a :href=texts.common.link_ro class="lang">ro</a>
          </div>
        </div>
        <ul>
          <li><router-link to="/agency" class="link-page">{{ texts.menu.agency }}</router-link></li>
          <li v-if="!isMobile" @mouseleave="childsPunktsShowed = false">
            <span @mouseover="childsPunktsShowed = true">
              <router-link to="/portfolio" class="link-page punkt-has-child">{{ texts.menu.works }}</router-link>
            </span>
            <transition 
              name="menuPunktsTrans" >
              <div v-if="childsPunktsShowed" class="childs" >
                <router-link to="/portfolio/2" class="link-page">{{ texts.menu.digital_marketing }}</router-link>
                /
                <router-link to="/portfolio/3" class="link-page">{{ texts.menu.design }}</router-link>
              </div>
            </transition>
          </li>
          <li v-if="isMobile"><router-link to="/portfolio/2" class="link-page">{{ texts.menu.digital_marketing }}</router-link></a></li>
          <li v-if="isMobile"><router-link to="/portfolio/3" class="link-page">{{ texts.menu.design }}</router-link></a></li>
          <li><router-link to="/design" class="link-page">{{ texts.menu.offer }}</router-link></a></li>
          <li>
            <router-link to="/news" class="link-page punkt-inline">{{ texts.menu.pulse }}</router-link>
            <router-link to="/vacancy" class="link-page punkt-inline">{{ texts.menu.vacancies }}</router-link>
          </li>
          <li>
            <router-link  v-if="isMobile" to="/people" class="link-small">{{ texts.menu.people }}</router-link>
          </li>
        </ul>   
      </div>
      <div class="app-menu__footer">
        <div class="address" v-html="this.texts.common.address"></div>
        <div class="bottom-line">
          <a href="#">069 707 015</a> <br>
          <a href="mailto:ready@gosocial.md">ready@gosocial.md</a>
          <div class="right">
            <router-link  v-if="!isMobile" to="/people">{{ texts.menu.people }}</router-link>
            <div v-if="isMobile" class="socials">
              <a href="#"><img src="img/icon-foot-2.png" alt="icon"></a>
              <a href="#"><img src="img/icon-foot-3.png" alt="icon"></a>
              <a href="#"><img src="img/icon-foot-4.png" alt="icon"></a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </transition>
</template>

<script>
export default {
  // name: 'app',
  props: ['appStatus', 'isMobile'],
  data () {
    return {
      menuShowed: false,
      pageShowed: false,
      childsPunktsShowed: false,
      texts: {}
    }
  },
  created: function() {
      this.texts.menu = this.$root.$data.menu;
      this.texts.common = this.$root.$data.common;
  },
  watch:{
    appStatus: function(newStatus, oldStatus){
      // console.log("newStatus "+newStatus+" : " +"oldStatus "+oldStatus);
      if(newStatus == 'showMenu' && oldStatus =="start"){
        this.menuShowed = true;
      }else if(newStatus == 'showPage'){
        this.pageShowed = true;
        this.menuShowed = false;
      }else if(newStatus == 'showMenu' && oldStatus =="showPage"){
        var self = this;
        setTimeout(function(){
          self.menuShowed = true;
        },160);
      }else if(newStatus == 'start' && oldStatus =="showMenu"){
        this.pageShowed = false;
        this.menuShowed = false;
      }
    },
  },
  methods: {
    enter: function (el, done) {
      // Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { translateX: ['0%','-100%'] }, { duration:400, complete: done })
    },
    leave: function (el, done) {
      if(this.pageShowed && !this.isMobile){
        Velocity(el, { translateX: ['100vw', '0vw'] }, { ease: 'linear', duration:500, complete: done });
      }else{
        Velocity(el, { translateX: ['-100vw', '0vw'] }, { duration:400, complete: done });
      }
    }
  }
}
</script>

<style lang="sass">

</style>

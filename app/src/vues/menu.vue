<template>
  <transition 
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false" >
    <div class="app-menu" v-if="menuShowed">
      <div class="app-menu__container">
        <ul>
          <li><a href="#" class="link-page" >Агентство</a></li>
          <li @mouseleave="childsPunktsShowed = false">
            <span @mouseover="childsPunktsShowed = true">
              <router-link to="/portfolio" class="link-page punkt-has-child">Работы</router-link>
            </span>
            <transition 
              name="menuPunktsTrans" >
              <div v-if="childsPunktsShowed" class="childs" >
                <router-link to="/portfolio/2" class="link-page">Смм</router-link>
                /
                <router-link to="/portfolio/3" class="link-page">Дизайн</router-link>
              </div>
            </transition>
          </li>
          <li><a href="#" class="link-page">Предлагаем</a></li>
          <li>
            <a href="#" class="link-page punkt-inline">На пульсе</a>
            <router-link to="/vacancy" class="link-page punkt-inline">Вакансии</router-link>
            <!-- <a href="#" class="link-page punkt-inline">Вакансии</a> -->
          </li>
        </ul>   
      </div>
      <div class="app-menu__footer">
        <div class="address">Chisinau, bd. Stefan cel Mare 202 (Kentford-2)</div>
        <div class="bottom-line">
          <a href="#">069 707 015</a>
          <a href="mailto:ready@gosocial.md">ready@gosocial.md</a>
          <div class="right">
            <a href="#">Люди</a>
          </div>
        </div>
      </div> 
    </div>
  </transition>
</template>

<script>
export default {
  // name: 'app',
  props: ['appStatus'],
  data () {
    return {
      menuShowed: false,
      pageShowed: false,
      childsPunktsShowed: false,
    }
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
      if(this.pageShowed){
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

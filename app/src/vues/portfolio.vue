<template>
  <transition 
    name="inleft">
    <div class="portfolio" v-if="isOpen">
      <div class="wrapper">
        <a href="#"  class="work">
          <img src="/img/work-1.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a href="#"  class="work">
          <img src="/img/work-2.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a href="#"  class="work">
          <img src="/img/work-1.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a href="#"  class="work">
          <img src="/img/work-2.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a  href="#" class="work">
          <img src="/img/work-1.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a  href="#" class="work">
          <img src="/img/work-2.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a  href="#" class="work">
          <img src="/img/work-1.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a  href="#" class="work">
          <img src="/img/work-2.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
        <a href="#" class="work">
          <img src="/img/work-1.jpg" alt="work">
          <div class="desc-cont">
            <div class="name">Корпоративный брендинг</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque illo minus debitis, libero fugiat commodi ut vitae</div>
          </div>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // name: 'app',
  props: ['isOpen'],
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
    showPage: function (event){
      this.$emit('showPage');
    }
  }
}
</script>

<style lang="sass">

</style>

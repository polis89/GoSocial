<template>
  <transition 
    name="inleft">
    <div class="page page-agency">
      <div class="wrapper-page">
        <div class="row">
          <div class="left">
            <div class="shift-right">
              <h2 class="h2-big">
                Разве фишка не в том, чтобы делать то,
                что тебе нравится?  
              </h2>
              <div class="text-cont gray">
                <p>
                  Мы пять лет работаем на рынке рекламы и<br>
                  интересуемся всем, что связано с<br>
                  построением брендов, продвижением<br>
                  продуктов и услуг.
                </p>
              </div>
              <div class="out-desc">
                Наша могучая <br>
                диджитал-команда
              </div>
            </div>
            <div class="img-cont">
              <img src="img/agency-2.jpg" alt="img">
            </div>
          </div>     
          <div class="right">
            <div class="shift-right">
              <div class="img-cont">
                <img src="img/agency-1.jpg" alt="img">
              </div>
              <div class="h2-big">
                Работаем <br>
                откуда хотим
              </div>
              <div class="left-in">
                <img src="img/q-1.png" alt="q" class="quote">
                <img src="img/q-1.png" alt="q" class="quote rotate">
                По данным исследовательского центра, 
                сегодня каждая пятая компания (22%) 
                имеет удаленных сотрудников.
              </div>
              <div class="right-in">
                <p>
                  
                Нам не нужно увольняться, чтобы пожить пару месяцев
                в Китае. Не надо отпрашиваться,
                чтобы сходить к врачу или забрать бабушку с вокзала. <br>
                Мы не будем заманивать вас в офис бесплатными печеньками.
                Приходите в МИФ, если свобода важнее.
                </p>
                <div class="desc">
                  Кошка, мышка, ноутбук. Жизнь копирайтера
                </div>
              </div>
            </div>
          </div>     
        </div>
        <div class="row">
          <div class="left">
            <div class="desc">
              Lorem ipsum dolor sit amet, <br>
              consectetur adipisicing elit,
            </div>
            <div class="h2-big">
              Рынок любит тех, кто отдает
              больше, <br>
              чем просит
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="left-in">
                <div class="img-cont">
                  <img src="img/agency-3.jpg" alt="img">
                </div>
              </div>
              <div class="right-in">
                <div class="img-cont">
                  <img src="img/agency-4.jpg" alt="img">
                </div>
              </div>
              <div class="desc">
                <p>Мы пять лет работаем н рынке рекламы<br>
                 и интересуемся всем, что связано
                с<br> построением брендов, продвижением<br>
                 продуктов и услуг.</p>
              </div>
              <div class="img-cont">
                <img src="img/agency-5.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue';
import rest from '../rest';
import i18n from '../i18n';
var axios = require('axios');

export default {
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      works: {},
      translates: {
        download: i18n.translates.download[i18n.LANG_INDEX] ,
        ourOffer: i18n.translates.ourOffer[i18n.LANG_INDEX] ,
        all: i18n.translates.all[i18n.LANG_INDEX] ,
      }
    }
  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
}
</script>

<style lang="sass">

</style>

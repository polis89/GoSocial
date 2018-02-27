<template>
  <transition 
    name="inleft">
    <div class="page page-design">
      <div class="wrapper-page">
        <div class="header_sm" v-if="isMobile">
        </div>
        <div class="portfolio-vars">
          <router-link to="/design">Дизайн</router-link>
          /
          <router-link to="/portfolio/3">Смм</router-link>
          /
          <router-link to="/portfolio/2">Сео</router-link>
          /
          <router-link to="/portfolio">Проекты</router-link>
        </div>
        <div class="row">
          <div class="text-block">
            <h2 class="h2">Design</h2>
            <h3 class="h3">Люди покупают не то, <br>
            что вы создаете, <br>
            а то, почему вы это создаете</h3>
            <p>
              <strong>Любому бизнесу</strong> <br>
              особенно тому, который планирует развиваться, нужен свой фирменный стиль - вот это и есть то, чем мы занимаемся в отделе дизайна. Беремся за все - от разработки логотипов до полноценной айдентики.
              <br>
              <strong>Создаем с нуля</strong> <br>
              или совершенствуем уже имеющуюся базу. Делаем свою работу с любовью и вниманием. Бывает, что отметаем до сотни неудачных вариантов, но всегда в итоге выходим на “конфетку”, в которую наши клиенты влюбляются сами и отрывают с руками. 
              <br>
              <strong>Мы за исключительную уникальность.</strong> <br>
              Вас будут быстро запоминать и узнавать. 
              <br>
              Мы позаботимся об этом! <br>
              Для более подробной информации читайте наше коммерческое предложение <a href="#">тут</a>
            </p>
          </div>
          <div class="img-cont">
            <img src="img/pred-1.jpg" alt="img">
          </div>
        </div>
        <div class="row inverse">
          <div class="text-block">
            <h2 class="h2">SMM</h2>
            <h3 class="h3">Каждый должен заниматься своим делом. <br>
            Клиент – продуктом. <br>
            Мы – его продвижением</h3>
            <p>
              <strong>SMM- это Social Media Marketing </strong> <br>
              (то есть маркетинг в социальных сетях). Мы не понаслышке знаем, что это не просто аббревиатура, а очень сильный и эффективный инструмент, которым не стоит пренебрегать в условиях современного рынка. 
              <br>
              <strong>Важно быть близко к клиенту</strong>
              <br>
              держать его в курсе событий, вовремя делать вкусные предложения, быть с ним на связи и присутствовать в его жизни каждый день? Мы можем это сделать. И не просто можем, а плотно занимаемся именно этим на протяжении 5 последних лет. Знаем как свои пять пальцев самых сильных мира сего-  Facebook, Vkontakte, Odnoklassniki, Youtube, Instagram, Adwords. С радостью замолвим им за вас словечко. 
              <br>
              Для более подробной информации читайте наше коммерческое предложение <a href="#">тут.</a>
            </p>
          </div>
          <div class="img-cont">
            <img src="img/pred-2.jpg" alt="img">
          </div>
        </div>
        <div class="row">
          <div class="text-block">
            <h2 class="h2">Project Creation</h2>
            <h3 class="h3">
            People may forget what <br>
            you said or what you did,
            </h3>
            <p>
              <strong>Занимаемся разработкой</strong> <br>
              запуском и ведением интересных и неординарных проектов. Например, провели батл по фифе среди представителей бизнеса от компании Enter.  
              <br>
              Были частью многих грандиозных проектов, например проект <span class="accent">Be Our Guest от Tourism Moldova</span> под эгидой <span class="accent">Usaid</span>, чем очень гордимся. Сделали для этой кампании сложный интерактивный сайт и занимались продвижением всей кампании в социальных сетях. 
              <br>
              <strong>Про себя тоже не забываем</strong> <br>
              Есть у нас свой внутренний проект, который мы очень любим, называется Secret Santa. Запускаем его каждый год зимой в свое удовольствие, приносим радость людям. 
              <br>
              Принесем радость и вам. Вы знаете как с нами связаться. 
              <br>
              Для более подробной информации читайте наше коммерческое предложение <a href="#">тут</a>
            </p>
          </div>
          <div class="img-cont">
            <img src="img/pred-3.jpg" alt="img">
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
  props: ['isMobile'],
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

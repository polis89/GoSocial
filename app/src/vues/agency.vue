<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="page page-agency">
      <div class="wrapper-page">
        <div class="header_sm" v-if="isMobile">
        </div>
        <div class="row">
          <div class="left">
            <div class="shift-right">
              <h2 class="h2-big">
                Разве фишка не в том, чтобы делать то,
                что тебе нравится?  
              </h2>
              <div class="img-full" v-if="isMobile">
                <img src="img/agency-1.jpg" alt="img">
              </div>
              <div class="text-cont gray">
                <p>
                  Мы пять лет работаем на рынке рекламы и<br>
                  интересуемся всем, что связано с<br>
                  построением брендов, продвижением<br>
                  продуктов и услуг.
                </p>
              </div>
              <div class="out-desc" v-if="!isMobile">
                Наша могучая <br>
                диджитал-команда
              </div>
            </div>
            <div class="img-cont" v-if="!isMobile">
              <img src="img/agency-2.jpg" alt="img">
            </div>
          </div>     
          <div class="right">
            <div class="shift-right">
              <div class="img-cont">
                <img src="img/agency-1.jpg" alt="img" v-if="!isMobile">
              </div>
              <div class="h2-big">
                Работаем <br>
                откуда хотим
              </div>
              <div class="img-full" v-if="isMobile">
                <img src="img/agency-2.jpg" alt="img">
              </div>
              <p v-if="isMobile">
                
              Нам не нужно увольняться, чтобы пожить пару месяцев
              в Китае. Не надо отпрашиваться,
              чтобы сходить к врачу или забрать бабушку с вокзала. <br>
              Мы не будем заманивать вас в офис бесплатными печеньками.
              Приходите в МИФ, если свобода важнее.
              </p>
              <div class="left-in">
                <img src="img/q-1.png" alt="q" class="quote">
                <img src="img/q-1.png" alt="q" class="quote rotate">
                По данным исследовательского центра, 
                сегодня каждая пятая компания (22%) 
                имеет удаленных сотрудников.
              </div>
              <div class="right-in">
                <p v-if="!isMobile">
                  
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
            <div class="close" v-if="!isMobile">
              <span></span>
              <span></span>
            </div>
            <div class="desc" v-if="!isMobile">
              Lorem ipsum dolor sit amet, <br>
              consectetur adipisicing elit,
            </div>
            <div class="h2-big">
              Рынок любит тех, кто отдает
              больше, <br>
              чем просит
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-5.jpg" alt="img">
            </div>
            <div class="left-in">
              Держим руку на пульсе и даже создали <br>
              сообщество маркетологов, в котором<br>
               собираются лучшие специалисты<br>
                рынка, чтобы обсудить новости сферы и<br>
                 лучшие работы.
            </div>
            <div class="four-img" v-if="isMobile">
              <img src="img/agency-6-sm.jpg" alt="img">
              <img src="img/agency-7-sm.jpg" alt="img">
              <img src="img/agency-8-sm.jpg" alt="img">
              <img src="img/agency-9-sm.jpg" alt="img">
            </div>
            <div class="right-in">
              Занимаемся созданием<br>
              сайтов, брендингом,<br>
              придумываем рекламу,<br>
              развиваемпроекты в digital, <br>
              внедряем стратегии.
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-10-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="text-rotate">
              Все, что мы делаем - часть вашего маркетинга.
            </div>
            <div class="desc-abs">
              Потребитель<br>
              всегда <br>
              слушает и<br>
              оценивает.
            </div>
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
        <div class="row" v-if="!isMobile">
          <div class="left">
            <div class="img-cont">
              <img src="img/agency-6.jpg" alt="img">
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="img-cont">
                <img src="img/agency-7.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!isMobile">
          <div class="left">
            <div class="left-in half">
              <div class="img-cont">
                <img src="img/agency-8.jpg" alt="img">
              </div>
            </div>
            <div class="right-in half">
              <div class="img-cont">
                <img src="img/agency-9.jpg" alt="img">
              </div>
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="img-cont">
                <img src="img/agency-10.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <div class="h2-big">
              Мы<br>
              постоянно<br>
              в гуще<br>
              событий.
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-11-sm.jpg" alt="img">
            </div>
            <div class="four-img" v-if="isMobile">
              <img src="img/agency-14-sm.jpg" alt="img">
              <img src="img/agency-15-sm.jpg" alt="img">
              <img src="img/agency-13-sm.jpg" alt="img">
              <img src="img/agency-12-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="desc-abs">
              <p>
                Moldova <br>
                Design <br>
                Weekend <br>
                2017
              </p>
              <p>
                Moldova <br>
                Design <br>
                Weekend <br>
                2017
              </p>
              <p>
                Moldova <br>
                Design <br>
                Weekend <br>
                2017
              </p>
            </div>
            <div class="shift-left">
              <div class="img-cont">
                <img src="img/agency-11.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!isMobile">
          <div class="left">
            <div class="left-in half">
              <div class="img-cont">
                <img src="img/agency-12.jpg" alt="img">
              </div>
            </div>
            <div class="right-in half">
              <div class="img-cont">
                <img src="img/agency-13.jpg" alt="img">
              </div>
            </div>
          </div>
          <div class="right">
            <div class="shift-left">
              <div class="left-in half">
                <div class="img-cont">
                  <img src="img/agency-14.jpg" alt="img">
                </div>
              </div>
              <div class="right-in half">
                <div class="img-cont">
                  <img src="img/agency-15.jpg" alt="img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="left">
            <div class="left-in">
              Мы не просто много читаем, мы <br>
              многое делаем. Мы постоянные <br>
              посетители главных семинаров, <br>
              конференций в сфере. Мы можем <br>
              часами вам разговаривать про  <br>
              нашу работу и столько же можем <br>
              выслушать. В шкафах наших домов <br>
              и квартир можно найти не одну <br>
              стопку полезной литературы, мы <br>
              рады ее обменяться или  <br>
              посоветовать что почитать. <br>
              Считаем саморазвитие одно из <br>
              важнейших пунктов, в работе. 
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-17-sm.jpg" alt="img">
            </div>
            <div class="right-in">
              <div class="text-cont">
                Если мы и не присутствуем на  <br>
                конференции как зритель мы  <br>
                обязательно на ней выступаем. Сами <br>
                проводим и помогаем проводить <br>
                большое количество мероприятий.
              </div>
              <div class="img-cont" v-if="!isMobile">
                <img src="img/agency-16.jpg" alt="img">
              </div>
            </div>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-16-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="shift-left">
              <div class="img-cont" >
                <img src="img/agency-17.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="h2-big alt">
          Отвечаем за свою работу!
        </div>
        <div class="row row-alt">
          <div class="left">
            <p>
              Наше агентство отличает от других компаний <br>
              коллективное движение к профессиональному развитию, <br>
              свежий, современный взгляд на коммуникации, высокий <br>
              уровень креативности. Реализуем решения, <br>
              повышающие ценность брендов, позволяющие  <br>
              компаниям выглядеть достойно, проникать в умы своих  <br>
              потребителей и оставаться в сердцах. Мы помним, что <br>
              digital маркетинг &ndash; это набор инструментов, которые <br>
              должны решать бизнес-задачи клиента.
            </p>
            <div class="four-img" v-if="isMobile">
              <img src="img/agency-18-sm.jpg" alt="img">
              <img src="img/agency-18-sm.jpg" alt="img">
              <img src="img/agency-18-sm.jpg" alt="img">
              <img src="img/agency-18-sm.jpg" alt="img">
            </div>
            <p>
              Ваша культура &ndash; ваш бренд <br>
              Понимаем, как выстроить визуальныю идентификацию, <br>
              когда задачи фирменного стиля гораздо масштабнее, чем <br>
              просто разработка логотипа. Поэтому наши системные <br>
              решения хорошо работают как в офлайн, так и <br>
              онлайн-среде. <br>
              Помогаем компаниям, которые переносят свои  <br>
              офлайн-продукты в онлайн среду
            </p>
            <div class="img-full" v-if="isMobile">
              <img src="img/agency-19-sm.jpg" alt="img">
            </div>
          </div>
          <div class="right" v-if="!isMobile">
            <div class="img-cont-alt">
              <img src="img/agency-18.jpg" alt="img">
            </div>
          </div>
        </div>
        <div class="row row-alt" v-if="!isMobile">
          <div class="left">
            <div class="img-cont ">
              <img src="img/agency-19.jpg" alt="img">
            </div>
          </div>
          <div class="right">
            <div class="left-in">
              <div class="img-cont">
                <img src="img/agency-20.jpg" alt="img">
              </div>
            </div>
            <div class="right-in">
              <div class="img-cont">
                <img src="img/agency-21.jpg" alt="img">
              </div>
            </div>
          </div>
        </div>
        <div class="h2-big alt mb">
          Праздник нужно<br>
          всегда носить с собой.
          <div class="desc" v-if="!isMobile">
            Ожидание радости тоже  <br>
            есть радость.
          </div>
          <a href="#" class="insta-mob" v-if="isMobile">instagram</a>
        </div>
        <div class="row">
          <div class="img-full" v-if="isMobile">
            <img src="img/agency-22-sm.jpg" alt="img">
          </div>
          <div class="left">
            <div class="left-in">
              Мы проводим на работе треть <br>
              суток, и это в лучшем случае. <br>
              Поэтому не удивительно, когда  <br>
              даже самая любимая  <br>
              работа приводит к <br>
              профессиональному "выгоранию".
            </div>
            <div class="right-in">
              По этому мы часто тусим. <br>
              Успешный, динамично развивающийся <br>
              бизнес - это всегда  <br>
              заслуга целой команды.
            </div>
          </div>
          <a href="#" class="insta" v-if="!isMobile">
            instagram
          </a>
        </div>
        <div id="instafeed"></div>
        <div class="desc-mob" v-if="isMobile">
          Ожидание радости тоже есть радость.
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
var Instafeed = require("instafeed.js");
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
  beforeMount () {
    var limit = this.isMobile ? 2 : 3;
    var feed = new Instafeed({
        get: 'user',
        userId: '5883772097',
        clientId: '0ecbd7d90ddb49b5859624837a23c17c',
        accessToken: "5883772097.0ecbd7d.467846ec0d1b4c5588f3b18376c0784c",
        resolution: "low_resolution",
        limit: limit,
    });
    feed.run();
  }
}
</script>

<style lang="sass">

</style>

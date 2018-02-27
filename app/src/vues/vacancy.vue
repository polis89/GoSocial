<template>
  <transition 
    name="inleft_fadeout-mob">
    <div class="vacancy-page">
      <div class="wrapper-vacancy">
        <div class="header_sm" v-if="isMobile">
        </div>
        <div class="left" >
          <h2 class="h2">Собака лает, караван идет</h2>
          <div class="img-cont" v-if="isMobile">
            <img :src="pageData.mainImg" alt="img">
          </div>
          <div v-html="pageData.mainHtml"></div>
        </div>
        <div class="right" v-if="!isMobile">
          <div class="img-cont">
            <img :src="pageData.mainImg" alt="img">
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="steps">
          <div class="step" v-for="(step, index) in pageData.steps">
            <div class="num">{{ index+1 }}</div>
            <p v-html="step">
            </p>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="vacancys">
          <div class="vacancy" v-for="(vacancy, index) in pageData.vacancys">
            <div class="name">Вакансия <strong>{{ vacancy.name }}</strong></div>
            <div class="text"><span v-html="vacancy.desc"></span>
            <span class="open" v-on:click="vacancy.isOpen=false" v-if="vacancy.isOpen">Закрыть</span><span v-on:click="vacancy.isOpen=true" class="open" v-else>Читать далее</span></div>
            <div class="drop-cont" v-if="vacancy.isOpen">
              <div class="column">
                <div class="col-name">Чек-лист наших "хотений":</div>
                <ul>
                  <li v-for="wish in vacancy.wishes" v-html="wish">
                  </li>
                </ul>
              </div>
              <div class="column">
                <div class="col-name">Чек-лист твоих задач:</div>
                <ul>
                  <li v-for="task in vacancy.tasks">
                    {{ task }}
                  </li>
                </ul>
                <div class="col-name">Что ты получишь?</div>
                <ul>
                  <li v-for="get in vacancy.gets">
                    {{ get }}
                  </li>
                </ul>
                <div class="col-name">Нам не хватает тебя. Отправить заявочку.</div>
                <a href="mailto:job@gosocial.md">job@gosocial.md</a>
              </div>
              <div class="clearfix"></div>
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
var axios = require('axios');

export default {
  props: ['isMobile'],
  // name: 'app',
  components:{  
    "app-footer": appfooter,
  },
  // props: ['isOpen'],
  data () {
    return {
      // pageShowed: false,
      pageData: { }
    }
  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
  },
  beforeRouteEnter (to, from, next) {
    var pageData = {};
    var pageID = 65;
    console.log("show Vacancyes");
    axios.get(rest.AJAX_URL + '/wp/v2/pages/' + pageID + '?_embed')
      .then(function (response) {
        var responseData = response.data;
        // console.log(responseData);
        pageData.mainHtml = responseData.acf["котент"];
        pageData.mainImg = responseData.acf["изображение"];
        pageData.steps = [];
        if(responseData.acf["шаги"]){
          for (var i = 0; i < responseData.acf["шаги"].length; i++){
            pageData.steps.push(responseData.acf["шаги"][i]["шаг"]);
          }
        }
        axios.get(rest.AJAX_URL + '/wp/v2/vacancies?_embed')
          .then(function (response){
            var responseData = response.data;
            console.log(responseData);
            pageData.vacancys = [];
            if(responseData){
              for (var i = 0; i < responseData.length; i++){
                var vac = {
                  isOpen: false,
                  name: responseData[i].title.rendered,
                  desc: responseData[i].acf.desc,
                  wishes: [],
                  tasks: [],
                  gets: [],
                };
                if(responseData[i].acf["wishes"]){
                  for (var j = 0; j < responseData[i].acf["wishes"].length; j++){
                    vac.wishes.push(responseData[i].acf["wishes"][j]["wish"]);
                  }
                }
                if(responseData[i].acf["tasks"]){
                  for (var j = 0; j < responseData[i].acf["tasks"].length; j++){
                    vac.tasks.push(responseData[i].acf["tasks"][j]["task"]);
                  }
                }
                if(responseData[i].acf["gets"]){
                  for (var j = 0; j < responseData[i].acf["gets"].length; j++){
                    vac.gets.push(responseData[i].acf["gets"][j]["get"]);
                  }
                }
                pageData.vacancys.push(vac);
              }
            }
            next(vm => vm.pageData = pageData);

          })
          .catch(function (error) {
            console.log(error.message);
        });
      })
      .catch(function (error) {
        console.log(error.message);
    });

  },
}
</script>

<style lang="sass">

</style>

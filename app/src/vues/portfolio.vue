<template>
  <transition 
    name="inleft">
    <div class="portfolio">
      <div class="wrapper wrapper-port">
        <template v-for="workitem in works">
          <!-- <router-link class="work" :to="{ name: 'job', params: { id: workitem.id }}"> -->
          <router-link class="work" :to="'job/' + workitem.id">
            <img v-bind:src="workitem.thumbnail" alt="work">
            <div class="desc-cont">
              <div class="name"> {{ workitem.name }} </div>
              <div class="text"> {{ workitem.desc }} </div>
            </div>
          </router-link>
          <!-- <a href="#"  v-on:click.prevent="showJob(workitem.id)"></a> -->
        </template>
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
  components:{  
    "app-footer": appfooter,
  },
  data () {
    return {
      works: {},
    }
  },
  computed: {
  },
  methods: {
    btnClick: function (event) {
      this.$emit('menuClick');
    },
    showJob: function (job){
      // console.log('showJob in portfolio');
      this.$emit('show-job', job);
      // console.log('showJob 2 in portfolio');
    },
  },
  beforeRouteEnter (to, from, next) {
    axios.get(rest.AJAX_URL + '/wp/v2/works?_embed')
      .then(function (response) {
        var responseData = response.data;
        var categoryType = to.params.type;
        var works = [];
        console.log('request ByCategory ' + categoryType);
        if(categoryType){
          responseData = responseData.filter(function(item){
            console.log('filter for: ');
            console.log(item);
            return item.work_category.indexOf(parseInt(categoryType)) != -1;
          });
        }
        console.log(responseData);
        responseData.forEach(function(item){
          var name = item.title.rendered;
          var thumbnail = item._embedded['wp:featuredmedia'][0].source_url;
          var id = item.id;
          var desc = item.acf["краткое_описание"];
          works.push({name: rest.removeHTMLTags(name), thumbnail: thumbnail, desc: desc, id: id});
        });
        next(vm => vm.works = works);
      })
      .catch(function (error) {
        console.log(error.message);
    });
  },
  beforeRouteUpdate (to, from, next) {
    // this.post = null
    // getPost(to.params.id, (err, post) => {
    //   this.setData(err, post)
    //   next()
    // })
    next();
  },
}
</script>

<style lang="sass">

</style>

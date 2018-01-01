<template>
  <transition 
    name="inleft">
    <div class="job-page" v-if="isOpen">
      <img v-bind:src="job.mainImg" alt="job" class="top-img">
      <div class="wrapper-job">
        <div class="top-block">
          <div class="h1" v-html="job.title"></div>
          <div v-html="job.mainDesc">
          </div>
          <div class="authors">
            <div class="desc">
              People may forget
            </div>
            <div class="author" v-for="author in job.authors">
              <div class="pos">{{ author.position }}</div>
              <div class="name">{{ author.name }}</div>
            </div>
          </div>
        </div>
        <div class="content-line">
          <div class="block">
            <div class="img-cont">
              <img src="img/jobs-2.jpg" alt="img">
            </div>
          </div>
          <div class="block">
            <div class="text-cont">
              <div class="h3">What we <br> 
                              believe <br>
                              in a changing <br>
                              world</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptate praesentium harum officia error, beatae sapiente ipsum labore quia dolor reprehenderit nostrum culpa, id at odio nesciunt quis unde earum natus sequi neque odit. Eos nam pariatur eveniet quis possimus debitis excepturi placeat quisquam blanditiis repudiandae ipsam quaerat reprehenderit officiis, perspiciatis voluptatibus molestiae est temporibus odit. Repudiandae sunt labore quam, veritatis delectus totam eos fugit in sit quia, hic fuga dolores consequuntur error ab, numquam. Consectetur magni recusandae possimus ea, sed error laudantium quis voluptatem aut similique expedita, alias, quia voluptatum reiciendis. Totam tempora dicta eaque maxime doloribus, quasi reiciendis quia, voluptas repellat at laborum libero nam praesentium, delectus minus pariatur omnis ab reprehenderit. Explicabo hic, odit blanditiis rem sunt tempora, voluptatum aliquid dicta eos dolores officia dolorum omnis, perferendis nobis natus harum molestiae aut.</p>
            </div>
          </div>
        </div>
        <div class="content-line">
          <div class="block big-block">
            <div class="img-cont">
              <img src="img/jobs-3.jpg" alt="img">
            </div>
          </div>
        </div>
        <div class="content-line">
          <div class="block">
            <div class="img-cont">
              <img src="img/jobs-4.jpg" alt="img">
            </div>
          </div>
          <div class="block">
            <div class="img-cont">
              <img src="img/jobs-5.jpg" alt="img">
            </div>
          </div>
        </div>
        <div class="content-line">
          <div class="block">
            <div class="text-cont">
              <div class="h2">The criteria <br> 
                              by which <br>
                              people judge
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipi odit. Eos nam pariatur eveniet quis possimus debitis excepturi placeat quisquam blanditiis repudiandae ipsam quaerat reprehenderit officiis, perspiciatis voluptatibus molestiae est temporibus odit. Repudiandae sunt labore quam, veritatis delectus totam eos fugit in sit quia, hic fuga dolores consequuntur error ab, numquam. Consectetur magni recusandae possimus ea, sed error laudantium quis voluptatem aut similique expedita, alias, quia voluptatum reiciendis. Totam tempora dicta eaque maxime doloribus, quasi reiciendis quia, voluptas repellat at laborum libero nam praesentium, delectus minus pariatur omnis ab reprehenderit. Explicabo hic, odit blanditiis rem sunt tempora, voluptatum aliquid dicta eos dolores officia dolorum omnis, perferendis nobis natus harum molestiae aut.</p>
            </div>
          </div>
          <div class="block">
            <div class="img-cont">
              <img src="img/jobs-6.jpg" alt="img">
            </div>
          </div>
        </div>
        <div class="icon-mouse">
          <img src="img/scroll.png" alt="icon">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import appfooter from './app-footer.vue'
export default {
  // name: 'app',
  components:{  
    "app-footer": appfooter,
  },
  props: ['isOpen', 'job'],
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
  }
}
</script>

<style lang="sass">

</style>

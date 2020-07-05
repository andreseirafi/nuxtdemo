<template>
  <div>

    <!-- AJAX Loading-Animation -->
    <template v-if="fg_content.content_loaded==false">
      <div class="content_loading">CONTENT LOADING....</div>
    </template>

    <!-- Content Loaded -->
    <template v-else>

      <!-- Welcome Message -->
      <h1>Dear {{fg_state.my_name}}: <br/> Welcome to HOME!!!</h1>

      <!-- just a duck-image -->
      <img style="width:200px;" src="~/assets/duck.png">
      <br/><br/>

      <!--  Stops-List (static stops - without fg.content) -->
      <nuxt-link to="/stops/1">Jump to Stop 1</nuxt-link><br/><br/>
      <nuxt-link to="/stops/3">Jump to Stop 2</nuxt-link><br/><br/>

      <!-- Stops-List from fg.content-stops (via ajax) -->
      <div v-for="stop in fg_content.stops" :key="stop.id">
          <nuxt-link :to="{path: 'stops/' + stop.id}">Jump to Stop {{stop.title}}</nuxt-link><br/><br/>
      </div>

      <!-- Meta Links -->
      <div class="impressum_link">
        <nuxt-link to="/name_change">PROFILE</nuxt-link>
        <nuxt-link to="/impressum">IMPRESSUM</nuxt-link>
      </div>
      
    </template>






  </div>
</template>




<script>
export default {
  // data () {
  //   return {
  //     whatever: 'WHAT??'
  //   }
  // },
  // computed: {
  //   stops() {
  //     if (this.fg_content.content_loaded) return this.fg_content.stops[2];
  //     else return false;
  //   }
  // },
  // // load-content -> METHOD 1 -> asyncdata - axios with promise
  // asyncData ({ $axios }) {
  //   return $axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_stops_1.json')
  //     .then((res) => {
  //       return { my_content_method_1: res.data }
  //     })
  // },
  // // load-content -> METHOD 2 -> async created() - axios with await
  // async created() {
  //     // content was already loaded -> exit
  //     if (this.fg_content.content_loaded == true) return;
  //     // get content.json
  //     let my_result = await this.$axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_stops_1.json', {
  //         responseType: 'json'
  //     });
  //     this.my_content_method_2.stops = my_result.data.data.stops[2];
  //     this.my_content_method_3.content_loaded = true;
  // }
}
</script>



<style>
  .impressum_link {
    margin-top: 100px;
  }

  .content_loading {
    text-align:center;
    font-size:40px;
    font-weight:600;
    color: #006699;
    margin-top: 100px;
  }
</style>

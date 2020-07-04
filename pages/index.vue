<template>
  <div>

    <template v-if="fg_content.content_loaded==false">
      <div class="content_loading">CONTENT LOADING....</div>
    </template>

    <template v-else>
      <!-- Welcome Message -->
      <h1>Dear {{fg_state.my_name}}: <br/> Welcome to HOME!!!</h1>
      <br/><br/>

      <!--  Stops-List (static stops - without fg.content) -->
      <nuxt-link to="/stops/1">Jump to Stop 1</nuxt-link><br/><br/>
      <nuxt-link to="/stops/3">Jump to Stop 2</nuxt-link><br/><br/>

      <!-- Stops-List from fg.content-stops (via ajax) -->
      <div v-for="stop in fg_content.stops">
          <nuxt-link to="/stops/1">Jump to Stop {{stop.title}}</nuxt-link><br/><br/>
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
  data () {
    return {

    }
  },
  computed: {
    stops() {
      if (this.fg_content.content_loaded) return this.fg_content.stops[2];
      else return false;
    }
  },
  async created() {
      // content was already loaded -> exit
      if (this.fg_content.content_loaded == true) return;
      // get content.json
      let my_result = await this.$axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_stops_1.json', {
          responseType: 'json'
      });
      this.fg_content.stops = my_result.data.data.stops[2];
      this.fg_content.content_loaded = true;
  }
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

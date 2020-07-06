<template>
  <div>
    
      <!-- Welcome Message -->
      <h1>Dear {{fg.visitor.readable_id}}: <br/> Welcome to HOME!!!</h1>

      <!-- just a duck-image -->
      <img style="width:200px;" src="~/assets/duck.png">
      <br/><br/>

      <!--  Stops-List (static stops - without fg.content) -->
      <nuxt-link to="/stops/1">Jump to Stop 1</nuxt-link><br/><br/>
      <nuxt-link to="/stops/3">Jump to Stop 2</nuxt-link><br/><br/>

      <!-- Stops-List from fg.content-stops (via ajax) -->
      <div v-for="stop in stops" :key="stop.id">
          <nuxt-link :to="{path: 'stops/' + stop.id}">Jump to Stop {{stop.title}}</nuxt-link><br/><br/>
      </div>

      <!-- Meta Links -->
      <div class="impressum_link">
        <nuxt-link to="/name_change">PROFILE</nuxt-link>
        <nuxt-link to="/impressum">IMPRESSUM</nuxt-link>
        <button v-if="fg.visitor.language_id!=1" @click="fg.visitor.language_id=1">Englisch</button>
        <button v-if="fg.visitor.language_id!=2" @click="fg.visitor.language_id=2">Deutsch</button>
      </div>







  </div>
</template>




<script>
export default {
  data () {
    return {
      nix: 'nix'
    }
  },
  computed: {
    stops() {
      if (this.fg.startup_content_loaded) return this.fg.content.stops[2];
      else return false;
    }
  }
}
</script>



<style>
  .impressum_link {
    margin-top: 100px;
  }
</style>

<template>
  <div>
    
      <!-- Welcome Message -->
      <h1>Dear {{fg.visitor.readable_id}}: <br/> Welcome to HOME!!!</h1>

      <!-- just a duck-image -->
      <img style="width:200px;" src="~/assets/img/duck.png">
      <br/><br/>

      <!-- just a svg BUT inline -->
      <svg_headphones />
      <br/><br/>

      <!-- Stops-List -->
      <div v-for="stop in stops" :key="stop.id">
          <nuxt-link :to="`/stops/${stop.id}`">Jump to Stop {{stop.title}}</nuxt-link><br/><br/>
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
  import svg_headphones from "~/assets/img/headphones.svg?inline";
  export default {
    components: { svg_headphones },
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
    },
    method: {
      jump_to_other_page(url) {
        this.$router.push(url);
      }
    }
  }
</script>



<style>
  .impressum_link {
    margin-top: 100px;
  }
</style>

<template>
  <div>
    <!-- Back Link -->
    <nuxt-link to="/"><< BACK HOME</nuxt-link>
    
    <!-- Stop Title -->
    <h1>This is -> {{stop.title}}</h1>

  </div>
</template>




<script>
    import stop_detail_view from '~/components/stop_detail_view.vue'

    export default {
        data: function(){
            return {
                stop_id: this.$route.params.id
            }
        },
        computed: {
            stop() {
                if (this.fg.startup_content_loaded) return this.fg.content.stops[2][this.$route.params.id];
                else return false;
            }
        },
        components: {
            stop_detail_view
        }
    }
</script>






<style>


</style>

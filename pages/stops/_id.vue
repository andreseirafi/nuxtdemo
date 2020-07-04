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
                if (this.fg_content.content_loaded) return this.fg_content.stops[this.stop_id];
                else return false;
            }
        },
        components: {
            stop_detail_view
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


</style>

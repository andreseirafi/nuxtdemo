<template>
  <div>
    <!-- Back Link -->
    <nuxt-link to="/"><< BACK HOME</nuxt-link>
    
    <!-- Stop Title -->
    <h1>This is -> {{stop_title}}</h1>

  </div>
</template>




<script>
    import stop_detail_view from '~/components/stop_detail_view.vue'

    export default {
        data: function(){
            return {
                stop_title: "STOP " + this.$route.params.id 
            }
        },
        components: {
            stop_detail_view
        }
    }
</script>






<style>


</style>

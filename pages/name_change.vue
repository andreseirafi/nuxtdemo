<template>
  <div>
        <!-- Back Link -->
        <nuxt-link to="/"><< BACK HOME</nuxt-link><br/><br/>

        <h2>Hallo {{$fg.state.my_name}}!</h2><br/>
        <h4>Willst Du deinen Namen ändern?</h4><br/>
        <button @click="reverse_my_name()">Ja! Bitte verdrehe meinen Namen!!</button>
  </div>
</template>


<script>
module.exports = {
    props: {
        id: String
    },
    data: function(){
        return {
            static_text: "Welcome"
        }
    },
    methods: {
        reverse_my_name() {
            this.fg_state.my_name = this.fg_state.my_name.split("").reverse().join("");
        }
    }
}
</script>



<style>

</style>

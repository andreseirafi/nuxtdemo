<template>
  <div>

      <h2>Hallo {{$fg.state.my_name}}<br>Ich bin der Stop mit der Nummer {{id}}</h2>
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
    }
}
</script>



<style>

</style>

import Vue from 'vue'   
import axios from 'axios';


// init fg
var fg = {};

// init fg.content
fg.content = Vue.observable({
    stops: {},
    content_loaded: false
});



// call get_content()
get_content();



// init fg.state
fg.state = Vue.observable({});
Vue.set(fg.state, 'my_name', "Andre Seirafi");
Vue.set(fg.state, 'language', "DE");

// init global vue-mixins
Vue.mixin({
    data: function() {
        return {
            fg_state: fg.state,
            fg_content: fg.content
        }
    }
});


// injext "fg" directly into a global scope (it will be injected into $nuxt.$fg)
export default ({ app }, inject) => {
    inject('fg', fg)
}






///////////////////////////////////////////////
// get_content()
// DESCRIPTION: get content from server
///////////////////////////////////////////////
async function get_content() {
    try {
        // make ajax-call
        var result = await axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_stops_1.json', {
            responseType: 'json'
        });

        // set fg.content.stops
        fg.content.stops = result.data.data.stops[2];
        // set content_loaded-flag
        fg.content.content_loaded = true;
    } 
    // ERROR-CASE - url not found
    catch(error) {
        console.log("Error loading content.json", error);
    }
}








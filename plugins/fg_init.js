import Vue from 'vue'   
import axios from 'axios';


// init fg
var fg = {};

// init fg.content
fg.content = Vue.observable({
    stops: {},
    content_loaded: false
});


// get content
async function get_content() {
    // get content.json
    var result = await axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_stops_1.json', {
        responseType: 'json'
    });
    // map stops
    fg.content.stops = result.data.data.stops[2];
    //Vue.set(fg.state, 'my_name', "Andre Seirafi");
    // set content_loaded-flag
    fg.content.content_loaded = true;
}
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
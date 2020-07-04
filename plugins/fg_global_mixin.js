import Vue from 'vue'   
import axios from 'axios';


// init fg
var fg = {};

// init fg.content
fg.content = Vue.observable({
    stops: {},
    content_loaded: false
});

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
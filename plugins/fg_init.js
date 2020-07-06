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
        // get content
        var result_1 = await axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_1.json', {
            responseType: 'json'
        });
        // get content.stops
        var result_2 = await axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/content_stops_1.json', {
            responseType: 'json'
        });
        // set fg.content.stops
        fg.content = result_2.data;
        fg.content.stops = result_2.data.data.stops[2];
        // set content_loaded-flag
        fg.content.content_loaded = true;
    } 
    // ERROR-CASE - url not found
    catch(error) {
        console.log("Error loading content.json", error);
    }
}



///////////////////////////////////////////////
// get_translations()
// DESCRIPTION: get translations from server
///////////////////////////////////////////////
async function get_translations() {
    try {
        // get translations
        var result = await axios.get('https://andre.fluxguide.com/fluxguide/public/content/fluxguide/system_cache/translations_1.json', {
            responseType: 'json'
        });
        // set fg.content.stops
        fg.translations = result.data;
    } 
    // ERROR-CASE - url not found
    catch(error) {
        console.log("Error loading content.json", error);
    }
}



///////////////////////////////////////////////
// get_visitor_data()
// DESCRIPTION: get visitor-datat from server
///////////////////////////////////////////////
async function get_visitor_data() {
    try {
        // get translations
        var result = await axios.get('https://andre.fluxguide.com/fluxguide/fluxguide_api/get_visitor_data/', {
            responseType: 'json'
        });
        // set fg.content.stops
        fg.visitor = result.data;

        // init visitor-state-change-detection
        // //// make some vue-stuff with fg.visitor.state
        // // init visitor-state (for reactive visitor-data)
        // if (typeof fg.visitor.state !== 'object') fg.visitor.state = {};
        // if (fg.visitor.state.visitor_id_js == undefined) fg.visitor.state.visitor_id_js = fg.visitor_id_js;
        // fg.visitor.state = Vue.observable(fg.visitor.state);  
        // // add to global vue-mixin
        // Vue.mixin({
        //     data: function(){
        //         return {
        //             fg_visitor_state: fg.visitor.state
        //         }
        //     }
        // });
        // // create a dom-free vue-component to detect changes in fg.visitor.state
        // fg.vm_for_visitor_state = new Vue({
        //     data: {
        //         my_fg_visitor_state: fg.visitor.state
        //     },
        //     watch: {
        //         my_fg_visitor_state: {
        //             handler(new_value, old_value) {
        //                 // trigger "visitor_state_changed"
        //                 fg.core.trigger('visitor_state_changed');
        //                 // call save_visitor()
        //                 fg.core.save_visitor(400);
        //             },
        //             deep: true
        //         }
        //     }
        // });



    } 
    // ERROR-CASE - url not found
    catch(error) {
        console.log("Error loading content.json", error);
    }
}





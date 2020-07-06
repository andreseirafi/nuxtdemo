import Vue from 'vue'   
import axios from 'axios';

// define fluxguide_core base-url
var fg_core_baseurl = "https://andre.fluxguide.com/fluxguide/";

// for testing
var visitor_id_js = "dd255415-2778-4c57-b9e9-2749cf31fd13-1593723910596";

// init fg
var fg = {};
fg = Vue.observable({
    startup_content_loaded: false,
    startup_translations_loaded: false,
    startup_visitor_loaded: false,
    state: {}
});

//// define main app-data
// get_content()
get_content();
// get translations
get_translations();
// get visitor
get_visitor();

// init global vue-mixins
Vue.mixin({
    data: function() {
        return {
            fg: fg
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
        let result_1 = await axios.get(fg_core_baseurl + 'public/content/fluxguide/system_cache/content_1.json', {responseType: 'json'});
        Vue.set(fg, 'content', result_1.data.data);
        
        // get content.stops
        let result_2 = await axios.get(fg_core_baseurl + 'public/content/fluxguide/system_cache/content_stops_1.json', {responseType: 'json'});
        Vue.set(fg.content, 'stops', result_2.data.data.stops);
        
        // set content_loaded-flag
        fg.startup_content_loaded = true;
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
        var result = await axios.get(fg_core_baseurl + 'public/content/fluxguide/system_cache/translations_1.json', {responseType: 'json'});
        // set fg.translations
        Vue.set(fg, 'translations', result.data);
        // set content_loaded-flag
        fg.startup_translations_loaded = true;
    } 
    // ERROR-CASE - url not found
    catch(error) {
        console.log("Error loading translations.json", error);
    }
}



///////////////////////////////////////////////
// get_visitor()
// DESCRIPTION: get visitor from server
///////////////////////////////////////////////
async function get_visitor() {
    try {
        // get translations
        var result = await axios.get(fg_core_baseurl + 'fluxguide_api/get_visitor_data/' + visitor_id_js, {responseType: 'json'});
        // set fg.visitor
        Vue.set(fg, 'visitor', result.data.data);
        // set visitor-loaded-flag
        fg.startup_visitor_loaded = true;

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





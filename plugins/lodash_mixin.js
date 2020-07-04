import Vue from 'vue';   
import _ from 'lodash';

Vue.mixin({
    computed : {
        "_" : function(){
            return _;
        }
    }
});

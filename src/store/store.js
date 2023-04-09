import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//create store
import * as state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';



export default new Vuex.Store({
state,
getters,
mutations,
actions
})
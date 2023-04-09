import { createStore } from 'vuex';

//create store
import * as state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';



 const store = createStore({
state,
getters,
mutations,
actions
})

export default store;
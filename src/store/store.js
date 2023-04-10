import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
//create store
import * as state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';



 const store = createStore({
    plugins: [createPersistedState()],
state,
getters,
mutations,
actions
})

export default store;
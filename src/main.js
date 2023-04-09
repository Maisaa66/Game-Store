import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import store from "./store/store";
createApp(App).use(store).mount('#app')

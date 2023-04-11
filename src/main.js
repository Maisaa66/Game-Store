import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import store from "./store/store";
import { createRouter, createWebHistory } from 'vue-router';
import homePage from './Pages/Home.vue';
import errorPage from "./Pages/Error.vue";
import detailPage from './Pages/Detail.vue';
import recommendedPage from './Pages/recommended.vue'
const routes = [
    { path: "/", component: homePage },
    { path: "/details/:id", component: detailPage },
    {path:"/recommended", component:recommendedPage},

    {        path:'/:NotFound(.*)*',
    component:errorPage,
    meta:{
        hideNavbar:true
    }}
  ];
  

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');

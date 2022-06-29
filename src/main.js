import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import VueAxios from 'vue-axios';
import VueSkeletonLoader from 'skeleton-loader-vue';

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.component('vue-skeleton-loader', VueSkeletonLoader);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

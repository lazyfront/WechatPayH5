import Vue from 'vue';
import App from './App.vue';
import axios from "axios";
import VueAxios  from "vue-axios";
import router from "../src/router/index";
import './assets/css/reset.css';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

axios.interceptors.request.use(()=>{

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../static/ttf.css";
Vue.config.productionTip = false;


// import VueAwesomeSwiper from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

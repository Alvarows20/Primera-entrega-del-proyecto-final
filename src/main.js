import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import "flowbite";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

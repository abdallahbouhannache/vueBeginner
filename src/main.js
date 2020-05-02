import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

var fApp = new Vue({
  render: (h) => h(App),
});

fApp.$mount("#app");

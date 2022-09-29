import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import routers from "../src/routes";
import Auth from "./Auth.js";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.auth = Auth;
const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: routers,
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");

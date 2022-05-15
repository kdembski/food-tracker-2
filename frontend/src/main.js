import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false;

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  attempt: 1,
  throttleWait: 500,
});

import VTooltip from "v-tooltip";
Vue.use(VTooltip, {
  defaultTemplate:
    '<div class="tooltip-vue" role="tooltip"><div class="tooltip-vue-arrow"></div><div class="tooltip-vue-inner"></div></div>',
  defaultArrowSelector: ".tooltip-vue-arrow, .tooltip-vue__arrow",
  defaultInnerSelector: ".tooltip-vue-inner, .tooltip-vue__inner",
  defaultPlacement: "bottom",
  defaultOffset: 5,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


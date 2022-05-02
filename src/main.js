import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueMeta from "vue-meta";
import router from "./router";
import store from "./store";
import i18n from '@/plugins/i18n'
import '@/plugins/vee-validate'
import '@/plugins/vee-validate'
import "@/styles/app.scss"
import "@/mixins/index"
const moment = require('moment')
require('moment/locale/ja')
require('@/services/api')
Vue.use(require('vue-moment'), {
  moment
})

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});


require('@/services/api')
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

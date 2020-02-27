import Vue from 'vue'
import App from './App.vue'
import '../node_modules/tipi-uikit/src/styles/main.scss'
import '../node_modules/highlight.js/styles/rainbow.css'
import router from './router'
import VueHighlightJS from "vue-highlightjs";

Vue.config.productionTip = false;
Vue.use(VueHighlightJS);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

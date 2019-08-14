import Vue from 'vue'
import Stories from './Stories.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Stories),
}).$mount('#stories')

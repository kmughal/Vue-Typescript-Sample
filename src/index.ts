import Vue from 'vue'
import App from './app.vue'

// mount
var vm  = new Vue({
  el: '#app',
  render: h => h(App)
});

window["vm"] = vm;
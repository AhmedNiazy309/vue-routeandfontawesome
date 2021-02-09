import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./jquery-3.5.1";
import $ from 'jquery'

//import vuetify from './plugins/vuetify';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
 // vuetify,
  render: h => h(App),

}).$mount("#app");
/*App.get('/', function(req, res){
  res.render('about/');
});*/

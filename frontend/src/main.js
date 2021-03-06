import Vue from 'vue'
import VueRouter from 'vue-router'
  
import App from './App.vue'
import Index from './components/TutorialList.vue'
import Add from './components/AddTutorial.vue'
  
Vue.use(VueRouter)
  
Vue.config.productionTip = false
  
const routes = [
  {
    name: 'Add',
    path: '/add',
    component: Add
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },

];
  
const router = new VueRouter({ mode: 'history', routes: routes })
  
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')
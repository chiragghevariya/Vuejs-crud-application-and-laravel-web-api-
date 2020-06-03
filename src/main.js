import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import Vuelidate from 'vuelidate'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import Notifications from 'vue-notification'


import App from './App.vue'
import CreateInfo from './components/CreateInfo.vue'
import EditInfo from './components/EditInfo.vue'
import ListingInfo from './components/ListingInfo.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Notifications);
Vue.use(Vuelidate);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component:ListingInfo
    
  },
  {
    name: 'CreateInfo',
    path: '/create-info',
    component: CreateInfo
  },
  {
    name: 'EditInfo',
    path: '/edit-info/:id',
    component: EditInfo
  },
  {
    name: 'ListingInfo',
    path: '/listing-info',
    component: ListingInfo
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

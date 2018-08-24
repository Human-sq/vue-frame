import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from 'components/index.vue';
import Nav from 'components/default/nav';
import Header from 'components/default/header';
import Content from 'components/default/content';
Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    components: { 
      body:Index 
    },
    children: [
      {
        path:'/', 
        components: {
          nav: Nav,
          header:Header,
          content: Content
        }
      },
      {
        path:'/admin', 
        components: {
          nav: Nav,
          header:Header,
          content: Content
        }
      }
    ]
  }
];

export default new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

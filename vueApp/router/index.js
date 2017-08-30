import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import listener from '@/components/listener'

import page1 from '@/components/page/page1'
import page2 from '@/components/page/page2'
import page3 from '@/components/page/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/listener',
      name: 'listener',
      component: listener,
      children:[{
      	path: '/page1',
      	component:page1
      },{
      	path: '/page2',
      	component:page2
      },{
      	path: '/page3',
      	component:page3
      }]
    }
  ]
})

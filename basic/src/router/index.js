import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chapter1 from '@/components/Chapter1'
import Chapter2 from '@/components/Chapter2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chapter1',
      name: 'chapter1',
      component: Chapter1
    },
    {
      path: '/chapter2',
      name: 'chapter2',
      component: Chapter2
    }
  ]
})

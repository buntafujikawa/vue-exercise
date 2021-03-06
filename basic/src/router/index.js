import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chapter1 from '@/components/Chapter1'
import Chapter2 from '@/components/Chapter2'
import Chapter3 from '@/components/Chapter3'
import Chapter4 from '@/components/Chapter4'
import Chapter5 from '@/components/Chapter5'
import Chapter6 from '@/components/Chapter6'

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
    },
    {
      path: '/chapter3',
      name: 'chapter3',
      component: Chapter3
    },
    {
      path: '/chapter4',
      name: 'chapter4',
      component: Chapter4
    },
    {
      path: '/chapter5',
      name: 'chapter5',
      component: Chapter5
    },
    {
      path: '/chapter6',
      name: 'chapter6',
      component: Chapter6
    }
  ]
})

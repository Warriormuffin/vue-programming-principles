import Vue from 'vue'
import Router from 'vue-router'
import Solid from '@/components/Solid'
import Principle from '@/components/Principle'
import Crud from '@/components/Crud'
import Http from '@/components/Http'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Solid',
      component: Solid
    },
    {
      path: '/solid/:letter',
      name: 'Principle',
      component: Principle
    },
    {
      path: '/crud/:letter',
      name: 'Crud',
      component: Crud
    },
    { path: '/http/:letter',
      name: 'Http',
      component: Http

    },
    {
      path: '*',
      redirect: '/'
    },

  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: [
    {
      path: '/',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('@/pages/login')
        }
      ]
    },
    {
      path: '/dashboard',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard')
        }
      ]
    }
  ]
})

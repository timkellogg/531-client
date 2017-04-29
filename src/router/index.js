import Vue from 'vue'
import Router from 'vue-router'
import store from '../state/index'
import Index from '@/components/Index'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import * as types from '../state/types'

Vue.use(Router)

function isAuthenticated(to, from, next) {
  const authenticated = store.state.authenticated

  if (!authenticated) {
    next('/register')
  } else {
    next()
  }
}

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    { path: '/me', name: 'Profile', component: Profile, beforeEnter: isAuthenticated },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})

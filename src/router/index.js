import { Icon } from 'element-ui'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/Register'),
    meta: { title: '注册', icon: 'el-icon-s-tools', hidden: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login'),
    meta: { title: '登录', icon: 'el-icon-s-tools', hidden: false }
  },
  {
    path: '/',
    name: 'Container',
    redirect: 'dashboard',
    component: () => import('@/views/container/Container.vue'),
    meta: { title: 'Container', icon: 'el-icon-s-tools', hidden: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        meta: { title: '首页', icon: 'el-icon-s-home', hidden: true },

      },
      {
        path: '/reserve',
        name: 'Reserve',
        component: { render: (e) => e("router-view") },
        meta: { title: '预约', icon: 'el-icon-s-cooperation', hidden: true },
        children: [
          {
            path: '/seaForm',
            name: 'SeaForm',
            component: () => import('@/views/reserve/SeaForm.vue'),
            meta: { title: '预约查询', icon: 'el-icon-s-opportunity', hidden: true }
          },
          {
            path: '/subForm',
            name: 'reserSubFormves2',
            component: () => import('@/views/reserve/SubForm.vue'),
            meta: { title: '预约提交', icon: 'el-icon-s-marketing', hidden: true },
          },
        ]
      },
    ]
  }
]

const router = new Router({
  routes
})

export default router


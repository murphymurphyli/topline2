import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home', // 给路由随便起个名字
      path: '/',
      // 在整个项目中，木块路径中的@表示的是src目录
      // 加载一个目录默认加载它的index.vue,index.js
      component: () => import('@/views/home')
    }, {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})

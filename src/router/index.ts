// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/user/TheUserLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/user/Home.vue')
      },
      {
        path: 'product-list',
        name: 'product-list',
        component: () => import('@/views/user/ProductList.vue')
      },
      {
        path: 'product-detail/:slug',
        name: 'product-detail',
        component: () => import('@/views/user/ProductDetail.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/user/Cart.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/user/Checkout.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/AdminPageLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/admin/DashBoard.vue')
      },
      {
        path: 'product-management',
        name: 'product-management',
        component: () => import('@/views/admin/ProductManagement.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/Registration.vue')
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: () => import('@/views/ForgetPassword.vue')
  },
  {
    path: '/**',
    name: 'page-not-found',
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

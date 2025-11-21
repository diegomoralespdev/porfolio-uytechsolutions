import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'UY Tech Solutions'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'Sobre Nosotros - UY Tech Solutions'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServiciosView.vue'),
      meta: {
        title: 'Servicios - UY Tech Solutions'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProyectosView.vue'),
      meta: {
        title: 'Proyectos - UY Tech Solutions'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactoView.vue'),
      meta: {
        title: 'Contacto - UY Tech Solutions'
      }
    }
  ],


})

export default router

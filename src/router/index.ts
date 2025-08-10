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
        title: 'UY Tech Solutions - Innovación y Soluciones de Software a Medida'
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router

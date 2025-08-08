import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      // ===== NOVA ADIÇÃO 1: "META INFO" =====
      // Adicionamos uma informação "meta" para marcar esta rota como protegida.
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

// ===== NOVA ADIÇÃO 2: "NAVIGATION GUARD" =====
// Este código é executado ANTES de cada mudança de rota.
router.beforeEach((to, from, next) => {
  // Verifica se a rota de destino exige autenticação
  if (to.meta.requiresAuth) {
    // Verifica se temos um token salvo (simulando que o usuário está logado)
    const token = localStorage.getItem('authToken') // Usaremos 'authToken' como chave
    if (token) {
      // Se o usuário tem token, permite o acesso
      next()
    } else {
      // Se não tem token, redireciona para a página de login
      next('/login')
    }
  } else {
    // Se a rota não exige autenticação, permite o acesso
    next()
  }
})

export default router

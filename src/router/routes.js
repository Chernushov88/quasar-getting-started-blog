
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'todp',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/BlankLayout'),
    children: [
      {
        path: 'login',
        component: () => import('pages/LoginPage')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/graphs', component: () => import('pages/Graphs.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/Register.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

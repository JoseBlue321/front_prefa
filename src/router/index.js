import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import user from '../views/admin/user.vue';
import login from '../views/auth/login.vue';
import postulante from '../views/admin/postulante.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        redirectIfAuth: true
      }
    },
    {
      path: '/users',
      name: 'user',
      component: user,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/postulantes',
      name: 'postulante',
      component: postulante,
      meta: {
        requireAuth: true
      }
    },
  ]
});

  //Guard (protegemos las rutas)
  router.beforeEach((to, from, next)=>{
    //buscamos el token (si existe)
    let token = localStorage.getItem("access_token");
    if(to.meta.requireAuth){
      if(!token){
        return next({
          name: 'login'
        })
      }
      return next();
      }

      if(to.meta.redirectIfAuth && token){
        return next({
          name:'user'
        })
      }
      return next();
    });

export default router

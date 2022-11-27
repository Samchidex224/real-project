import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import ProjectView from '../views/ProjectView.vue'
import BlogView from '../views/BlogView.vue'
import firebase from 'firebase'
import PostView from '../views/PostView.vue'
import ForgotView from '../views/ForgotView.vue'
import Authenticated from '@/views/Authenticated.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotView,
    beforeEnter: (to, from, next) => {
      const user = firebase.auth().currentUser;
      if(user) {
        next({ name: "forgot"});
      } else {
        next();
      }
    }

  },
  {
    path: '/auth',
    name: 'auth',
    component: Authenticated,
    meta:{
      requiresAuth: true,
    },
    children: [
      {
        path: '/blog',
        name: 'blog',
        component: BlogView
      },
      {
        path: '/project',
        name: 'project',
        component: ProjectView
      },
      {
        path: '/about/post/:id',
        name: 'ViewPost',
        component: PostView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, _from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        next();
      }else{
        alert("Please Login First!")
        next('/')
      }
    });
  } else {
    next();
  }
});

export default router

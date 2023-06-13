import { createRouter, createWebHistory } from 'vue-router'
import Tokens from "../views/Tokens.vue"
import Header from "../views/Header.vue";
import Home from  "../views/Home.vue"
import Message from "../views/Message.vue";
import User from "../views/User.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Header,
      redirect:'/home',
      children:[
        {
          path:'home',
          name: 'home',
          component:Home,
        },
        {
          path:'message',
          name: 'message',
          component:Message,
        },
        {
          path:'user',
          name: 'user',
          component:User,
        },
        {
          path:'tokens',
          name: 'tokens',
          component:Tokens,
        },

      ]
    },
  ]
})

export default router

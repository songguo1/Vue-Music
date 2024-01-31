import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home/Home.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"Layout",
    component:Layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/topic',
        name: 'Topic',
        component:()=>import("../views/Topic.vue")
      },
      {
        path: '/mine',
        name: 'Mine',
        component: ()=>import("../views/Mine.vue")
      },
      {
        path: '/search',
        name: 'Search',
        component: ()=>import("../views/Search.vue")
      }
    ]
  },
  {
    path:"/more/:type",
    name:"More",
    component: ()=> import("../views/Home/MusicMore.vue")
  },
  {
    path:"/details/:id",
    name:"Details",
    component: ()=> import("../views/Home/MusicDetails.vue")
  },
  {
    path:"/player/:id/:name/:image",
    name:"Player",
    component:()=>import("../views/Home/Player.vue")
  }
]

const router = new VueRouter({
  mode:'hash',
  base:process.env.BASE_URL,//这一行代码的意思是设置 Vue 应用的基础路径。process.env.BASE_URL 是一个环境变量，通常在 Vue CLI 项目中设置，用于指定应用的基础路径。

  // 在开发过程中，基础路径是非常重要的，因为它决定了应用中各种资源（如 CSS、图片等）的加载路径。通过设置基础路径，你可以确保这些资源能够正确地加载和显示。
  
  // 例如，假设你的应用部署在 https://example.com/my-app/ 下，你可以将 process.env.BASE_URL 设置为 /my-app/。这样，Vue 应用中的各种资源都会基于这个基础路径加载，例如 /my-app/assets/img/logo.png。
  
  // 需要注意的是，在生产环境中，你可能需要将基础路径设置为应用的根路径，即 /，以确保资源能够正确加载。但在开发过程中，为了方便起见，你可能会将基础路径设置为应用所在的具体路径。
  routes,
  linkActiveClass:"active"
})

export default router

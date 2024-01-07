import { createRouter, createWebHistory } from "vue-router";
import NavBar from '../components/NavBar.vue';
import Home from '../views/Home.vue';
import SetCreation from '../views/SetCreation.vue';
import BrowseContent from '../views/BrowseContent.vue';
import DefaultLayout from '../components/DefaultLayout.vue';


const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/createSet",
          name: "createSet",
          component: SetCreation,
        },
        {
          path: "/browseContent",
          name: "browseContent",
          component: BrowseContent,
        }
      ]
    },
    {
   
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
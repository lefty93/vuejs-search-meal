import { createRouter, createWebHistory } from "vue-router";
import { Home, MealsByIngredient, MealsByLetter, MealsByName } from "../views";
import DefaultLayout from "../components/DefaultLayout.vue";


const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
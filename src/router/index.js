import { createRouter, createWebHistory } from "vue-router";
import { Home, MealsByIngredient, MealsByLetter, MealsByName, MealDetails } from "../views";
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
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
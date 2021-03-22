import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: () => import("../views/Recipes.vue"),
    params: true,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/recipe/:id",
    name: "RecipeDetails",
    component: () => import("../views/RecipeDetails.vue"),
    params: true,
  },
  {
    path: "/editRecipe/:id",
    name: "EditRecipe",
    component: () => import("../views/EditRecipe.vue"),
    params: true,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "Recipes" && savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 250);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 250);
      });
    }
  },
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (
    !(to.name === "Login" || to.name === "Register") &&
    !store.state.loggedUser
  ) {
    next("/");
  } else if (
    (to.name === "Login" || to.name === "Register") &&
    store.state.loggedUser
  ) {
    next("/home");
  } else {
    next();
  }
});

export default router;

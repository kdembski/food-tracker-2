import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import axios from "axios";
export default new Vuex.Store({
  state: {
    loggedUser: "",
    loading: false,
    recipes: [],
    ingredients: [],
  },
  mutations: {
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setIngredients(state, ingredients) {
      state.ingredients = ingredients;
    },
    setRecipeIngredients(state, data) {
      var recipe = state.recipes.find((recipe) => {
        return recipe.recipe_id == data.recipe_id;
      });
      Vue.set(recipe, "ingredients", data.ingredients);
      var kcal = 0;
      data.ingredients.forEach((ingredient) => {
        kcal += ingredient.amount + ingredient.kcal_per_unit;
      });
      kcal = Math.floor(kcal);
      Vue.set(recipe, "kcal", kcal);
    },
    setRecipeSteps(state, data) {
      var recipe = state.recipes.find((recipe) => {
        return recipe.recipe_id == data.recipe_id;
      });
      Vue.set(recipe, "steps", data.steps);
    },
    setRecipe(state, data) {
      var index = state.recipes.findIndex((recipe) => {
        return recipe.recipe_id == data.recipe_id;
      });
      console.log(index);
      if (index != -1) {
        state.recipes[index] = data;
      } else {
        state.recipes.push(data);
      }
    },
    deleteRecipe(state, recipe) {
      var index = state.recipes.indexOf(recipe);
      state.recipes.splice(index, 1);
    },
  },
  actions: {
    async loginUser({ commit }, user) {
      commit("setLoading", true);
      commit("setLoggedUser", user);
      var response = await axios.get(`http://localhost:5000/ingredients`);
      commit("setIngredients", response.data);
      axios
        .get(`http://localhost:5000/recipes/${this.state.loggedUser.user_id}`)
        .then((response) => {
          commit("setRecipes", response.data);
          if (response.data.length == 0) {
            commit("setLoading", false);
          } else {
            this.state.recipes.forEach((recipe, index, array) => {
              axios
                .get(
                  `http://localhost:5000/recipe_ingredients/${recipe.recipe_id}`
                )
                .then((response) => {
                  var data = {
                    ingredients: response.data,
                    recipe_id: recipe.recipe_id,
                  };
                  commit("setRecipeIngredients", data);
                });
              axios
                .get(`http://localhost:5000/recipe_steps/${recipe.recipe_id}`)
                .then((response) => {
                  var data = {
                    steps: response.data,
                    recipe_id: recipe.recipe_id,
                  };
                  commit("setRecipeSteps", data);
                  if (index === array.length - 1) {
                    setTimeout(() => {
                      commit("setLoading", false);
                    }, 1000);
                  }
                });
            });
          }
        });
    },
    getRecipe({ commit }, recipeId) {
      axios.get(`http://localhost:5000/recipe/${recipeId}`).then((response) => {
        commit("setRecipe", response.data);
        axios
          .get(`http://localhost:5000/recipe_ingredients/${recipeId}`)
          .then((response) => {
            var data = {
              ingredients: response.data,
              recipe_id: recipeId,
            };
            commit("setRecipeIngredients", data);
          });
        axios
          .get(`http://localhost:5000/recipe_steps/${recipeId}`)
          .then((response) => {
            var data = {
              steps: response.data,
              recipe_id: recipeId,
            };
            commit("setRecipeSteps", data);
            setTimeout(() => {
              commit("setLoading", false);
            }, 100);
          });
      });
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      paths: ["loggedUser", "recipes", "ingredients"],
      storage: window.sessionStorage,
    }),
  ],
});

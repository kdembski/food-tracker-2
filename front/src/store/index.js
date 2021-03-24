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
    //ger logged user details from db
    setLoggedUser(state, user) {
      state.loggedUser = user;
    },
    //change loading state
    setLoading(state, loading) {
      state.loading = loading;
    },
    //set user recipes list
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    //set global ingredients list
    setIngredients(state, ingredients) {
      state.ingredients = ingredients;
    },
    //set ingredient in recipe
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
    //set steps in recipe
    setRecipeSteps(state, data) {
      var recipe = state.recipes.find((recipe) => {
        return recipe.recipe_id == data.recipe_id;
      });
      Vue.set(recipe, "steps", data.steps);
    },
    //set single reccipe
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
    //delete recipe
    deleteRecipe(state, recipe) {
      var index = state.recipes.indexOf(recipe);
      state.recipes.splice(index, 1);
    },
  },
  actions: {
    //login user
    async loginUser({ commit, dispatch }, user) {
      try {
        commit("setLoading", true);
        commit("setLoggedUser", user);
        //get global ingredients
        var response = await axios.get(`http://localhost:5000/ingredients`);
        commit("setIngredients", response.data);
        //get all user recipes
        axios
          .get(`http://localhost:5000/recipes/${this.state.loggedUser.user_id}`)
          .then((response) => {
            commit("setRecipes", response.data);
            //if recipes length is 0
            if (response.data.length == 0) {
              commit("setLoading", false);
            } else {
              //get user recipes ingredients and steps

              this.state.recipes.forEach((recipe, index, array) => {
                var data = {
                  recipeId: recipe.recipe_id,
                  callback: () => {
                    if (index === array.length - 1) {
                      setTimeout(() => {
                        commit("setLoading", false);
                      }, 1000);
                    }
                  },
                };
                dispatch("getRecipeIngredientsAndSteps", data);
              });
            }
          });
      } catch (err) {
        console.log(err);
      }
    },

    //get recipe ingredients and steps
    getRecipeIngredientsAndSteps({ commit }, data) {
      try {
        var recipeId = data.recipeId;
        var callback = data.callback;
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
            callback();
          });
      } catch (err) {
        console.log(err);
      }
    },

    //get recipe by id from db
    getRecipe({ commit, dispatch }, recipeId) {
      try {
        axios
          .get(`http://localhost:5000/recipe/${recipeId}`)
          .then((response) => {
            commit("setRecipe", response.data);
            var data = {
              recipeId: recipeId,
              callback: () => {
                setTimeout(() => {
                  commit("setLoading", false);
                }, 100);
              },
            };
            dispatch("getRecipeIngredientsAndSteps", data);
          });
      } catch (err) {
        console.log(err);
      }
    },

    //add recipe to db
    addRecipe({ commit, dispatch }, data) {
      var recipe = data.recipe;
      var callback = data.callback;
      commit("setLoading", true);
      axios
        .post(
          `http://localhost:5000/recipes/${this.state.loggedUser.user_id}`,
          recipe
        )
        .then((response) => {
          //check if there is something in steps or ingredients
          if (recipe.ingredients.length > 0 || recipe.steps.length > 0) {
            var ingredientsDone = true;
            var stepsDone = true;
            //if ingredients is not empty
            if (recipe.ingredients.length > 0) {
              ingredientsDone = false;
              recipe.ingredients.forEach((ingredient, index, array) => {
                axios
                  .post(`http://localhost:5000/recipe_ingredients`, {
                    ingredient_id: ingredient.ingredient_id,
                    recipe_id: response.data.insertId,
                    amount: ingredient.amount,
                  })
                  .then(() => {
                    if (index == array.length - 1) {
                      ingredientsDone = true;
                      if (stepsDone) {
                        callback();
                        dispatch("getRecipe", response.data.insertId);
                      }
                    }
                  });
              });
            }
            //if steps is not empty
            if (recipe.steps.length > 0) {
              stepsDone = false;
              recipe.steps.forEach((step, index, array) => {
                axios
                  .post(`http://localhost:5000/recipe_steps`, {
                    step_number: step.step_number,
                    recipe_id: response.data.insertId,
                    instructions: step.instructions,
                  })
                  .then(() => {
                    if (index == array.length - 1) {
                      stepsDone = true;
                      if (ingredientsDone) {
                        callback();
                        dispatch("getRecipe", response.data.insertId);
                      }
                    }
                  });
              });
            }
          }
          //if steps and ingredients are empty
          else {
            callback();
            dispatch("getRecipe", response.data.insertId);
          }
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

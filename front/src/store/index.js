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
  },
  actions: {
    loadRecipes({ commit }) {
      commit("setLoading", true);
      return axios
        .get(`http://localhost:5000/recipes/${this.state.loggedUser.user_id}`)
        .then((response) => {
          commit("setRecipes", response.data);
          commit("setLoading", false);
        });
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      paths: ["loggedUser"],
      storage: window.sessionStorage,
    }),
  ],
});

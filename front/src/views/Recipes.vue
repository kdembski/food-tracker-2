<template>
  <div class="recipes">
    <div class="main-container">
      <div>Przepisy ({{ recipes.length }})</div>
      <div class="recipes-list-container">
        <div class="recipe-list">
          <div class="add-new-recipe"></div>
          <div
            v-for="(recipe, index) in recipes"
            :key="index"
            class="recipe-list-item"
          >
            <div class="recipe-list-item-image-container">
              <img
                class="recipe-list-item-image"
                :src="recipe.image"
                :alt="recipe.recipe_name"
              />
            </div>
            <div class="recipe-list-item-name">
              {{ recipe.recipe_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  created() {
    this.$store.dispatch("loadRecipes");
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    },
  },
};
</script>

<style lang="scss">
.recipe-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  max-width: 100%;
  &-item {
    &-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      &-container {
        height: 200px;
      }
    }
  }
}
</style>

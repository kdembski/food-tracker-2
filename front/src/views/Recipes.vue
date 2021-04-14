<template>
  <div class="recipes">
    <!-- search bar -->
    <div class="search-bar" :class="{ hidden: searchBarIsHidden }">
      <div class="main-container h-100">
        <div class="search-input-container">
          <input
            class="search-input"
            type="text"
            placeholder="Wpisz nazwę przepisu..."
            v-model="search"
          />
          <div
            class="search-bar-close-btn"
            @click="searchBarIsHidden = !searchBarIsHidden"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- filters bar -->
    <div class="filters-bar" :class="{ hidden: filtersBarIsHidden }">
      <div class="main-container h-100">
        <div class="filters-container">
          <div class="filter-wrap">
            <div class="filter-header">Czas przygotowania</div>
            <div
              v-for="(filter, index) in filters.prepTime"
              :key="index"
              class="filter"
            >
              <label class="filter-label">
                <input
                  type="checkbox"
                  :value="filter.value"
                  v-model="prepTimeActiveFilters"
                />
                <span></span>
                <p>{{ filter.label }}</p>
              </label>
            </div>
          </div>
          <div class="filter-wrap">
            <div class="filter-header">Ilość kalorii</div>
            <div
              v-for="(filter, index) in filters.kcal"
              :key="index"
              class="filter"
            >
              <label class="filter-label">
                <input
                  type="checkbox"
                  :value="filter.value"
                  v-model="kcalActiveFilters"
                />
                <span></span>
                <p>{{ filter.label }}</p>
              </label>
            </div>
          </div>
          <div class="filter-wrap">
            <div class="filter-header">Rodzaj posiłku</div>
            <div
              v-for="(filter, index) in filters.category"
              :key="index"
              class="filter"
            >
              <label class="filter-label">
                <input
                  type="checkbox"
                  :value="filter.value"
                  v-model="categoryActiveFilters"
                />
                <span></span>
                <p>{{ filter.label }}</p>
              </label>
            </div>
          </div>

          <div
            class="filters-bar-close-btn"
            @click="filtersBarIsHidden = !filtersBarIsHidden"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- recipes -->
    <div class="main-container">
      <div
        class="d-flex justify-content-between align-items-center position-relative"
      >
        <!-- header -->
        <div class="recipes-header">Przepisy</div>
        <!-- buttons -->
        <div class="recipes-header-buttons">
          <div
            class="show-bar-btn"
            @click="searchBarIsHidden = !searchBarIsHidden"
          >
            <div class="circle"><i class="fas fa-search"></i></div>
            <div class="text"><p>Szukaj</p></div>
          </div>
          <div
            class="show-bar-btn"
            @click="filtersBarIsHidden = !filtersBarIsHidden"
          >
            <div class="circle"><i class="fas fa-filter"></i></div>
            <div class="text"><p>Filtruj</p></div>
          </div>
        </div>
      </div>
      <!-- recipes list -->
      <div class="recipes-list-container">
        <div class="recipes-list">
          <!-- add new recipe -->
          <div class="add-new-recipe" @click="$router.push('/editRecipe/add')">
            <div class="add-new-recipe-image">
              <i class="fas fa-plus"></i>
            </div>
            <div class="add-new-recipe-name">Dodaj nowy przepis</div>
          </div>
          <recipes-item
            v-for="(recipe, index) in filteredRecipes"
            :key="recipe.recipe_id + index"
            :recipe="recipe"
            :recentlyAdded="recipeAdded && index == filteredRecipes.length - 1"
          >
          </recipes-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipesItem from "../components/recipesItem.vue";
export default {
  components: { recipesItem },
  name: "Recipes",
  data() {
    return {
      searchBarIsHidden: true,
      filtersBarIsHidden: true,
      filters: {
        prepTime: [
          {
            value: {
              min: 0,
              max: 9,
            },

            label: "< 10 min.",
          },
          {
            value: {
              min: 10,
              max: 30,
            },

            label: "10 min. - 30 min.",
          },
          {
            value: {
              min: 30,
              max: 60,
            },

            label: "30 min. - 60 min.",
          },
          {
            value: {
              min: 61,
              max: 9999,
            },

            label: "60 min. <",
          },
        ],
        kcal: [
          {
            value: { min: 0, max: 99 },

            label: "< 100 kcal.",
          },
          {
            value: { min: 100, max: 300 },

            label: "100 kcal - 300 kcal",
          },
          {
            value: { min: 300, max: 500 },

            label: "300 kcal - 500 kcal",
          },
          {
            value: { min: 500, max: 700 },

            label: "500 kcal - 700 kcal",
          },
          {
            value: { min: 701, max: 9999 },

            label: "700 kcal <",
          },
        ],
        category: [
          {
            value: 1,

            label: "śniadanie",
          },
          {
            value: 2,

            label: "obiad",
          },
          {
            value: 3,

            label: "kolacja",
          },
        ],
      },
      prepTimeActiveFilters: [],
      kcalActiveFilters: [],
      categoryActiveFilters: [],
      search: "",
      recipeAdded: false,
    };
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    },
    filteredRecipes: {
      get: function() {
        let recipes = this.recipes;
        recipes = recipes.filter((recipe) => {
          return recipe.recipe_name
            .toLowerCase()
            .match(this.search.toLowerCase());
        });
        if (
          this.prepTimeActiveFilters.length > 0 ||
          this.kcalActiveFilters.length > 0 ||
          this.categoryActiveFilters.length > 0
        ) {
          recipes = recipes.filter((recipe) => {
            var prepTimeBool = true;
            if (this.prepTimeActiveFilters.length > 0) {
              prepTimeBool = this.prepTimeActiveFilters.some((filter) => {
                return (
                  recipe.preparation_time >= filter.min &&
                  recipe.preparation_time <= filter.max
                );
              });
            }
            var kcalBool = true;
            if (this.kcalActiveFilters.length > 0) {
              kcalBool = this.kcalActiveFilters.some((filter) => {
                return recipe.kcal >= filter.min && recipe.kcal <= filter.max;
              });
            }
            var categoryList = Array.from(recipe.category.toString());
            var categoryBool = true;

            if (this.categoryActiveFilters.length > 0) {
              categoryBool = this.categoryActiveFilters.some((filter) => {
                return categoryList.some((category) => {
                  return category == filter;
                });
              });
            }

            return prepTimeBool && kcalBool && categoryBool;
          });
        }
        return recipes;
      },
    },
  },
  mounted() {
    if (this.$route.params.success) {
      this.recipeAdded = true;
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        this.$route.params.success = false;
        this.recipeAdded = false;
      }, 4000);
    }
  },
};
</script>

<style lang="scss">
//recipes
.recipes-header {
  font-size: 35px;
  font-weight: 700;
  color: $primaryGrey;
  max-height: 40px;
}
.recipes-header-buttons {
  display: flex;
  position: relative;
  right: -60px;
  .show-bar-btn {
    display: flex;
    position: relative;
    cursor: pointer;
    &:first-child {
      right: -40px;
    }
    & .circle {
      @include flex-center;
      position: relative;
      z-index: 1;
      width: 62px;
      height: 62px;
      border-radius: 31px;
      box-shadow: inset 0 0 0 2px $primaryYellow;
      background-color: white;
      color: $primaryYellow;
      font-size: 18px;
      transition: all 0.3s ease-in-out;
      & i {
        position: relative;
        top: 1px;
      }
    }
    & .text {
      position: relative;
      z-index: 0;
      left: -60px;
      max-height: 60px;
      border-radius: 30px;
      width: 60px;
      transition: width 0.3s ease-in-out;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
      font-size: 20px;
      letter-spacing: 3px;
      padding-left: 60px;
      color: $lightGrey;
      font-weight: 500;
      overflow: hidden;
      @include flex-center;
      & p {
        opacity: 0;
        margin: 0;
        transition: opacity 0.2s ease-in-out;
      }
    }
    &:hover {
      & .text {
        width: 200px;
        & p {
          opacity: 1;
        }
      }
      & .circle {
        box-shadow: inset 0 0 0 31px $lightYellow;
        color: $primaryGrey;
      }
    }
  }
}
.recipes-list-container {
  margin-top: 1.5rem;
}
.recipes-list {
  display: grid;
  gap: 2rem;
  row-gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
}
//add new recipe
.add-new-recipe {
  cursor: pointer;
  &-image {
    @include flex-center;
    height: 250px;
    border: 1px solid $lighterGrey;
    font-size: 60px;
    color: $lightGrey;
    background-color: rgb(250, 250, 250);
    transition: all 0.15s ease-in-out;
    &:hover {
      background-color: rgb(240, 240, 240);
      color: $primaryGrey;
    }
  }
  &-name {
    font-size: 22px;
    font-weight: 300;
    color: $lightGrey;
    text-align: center;
    min-height: 66px;
    margin: 1rem;
  }
}
//search bar
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 205px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
  &.hidden {
    transform: translateY(-100%);
  }
}
.search-input-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}
.search-input {
  background-color: transparent;
  width: 100%;
  font-size: 40px;
  font-weight: 300;
  color: white;
  border: none;
  outline: none;
}
.search-bar-close-btn {
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 30px;
  color: $lightGrey;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
  }
}
//filters bar
.filters-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
  &.hidden {
    transform: translateY(-100%);
  }
}
.filters-container {
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.filter-header {
  color: white;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
}
.filter {
  color: white;
  & label {
    display: flex;
    margin: 0 0 8px 0;
    cursor: pointer;
    &:hover {
      & p {
        color: $lightYellow;
      }
      & span {
        background-color: $lightYellow;
      }
    }
    & p {
      margin: 0 0 0 12px;
      font-weight: 300;
      font-size: 14px;
    }
    & input {
      visibility: hidden;
      position: absolute;
      &:checked {
        & ~ span {
          background-color: $primaryYellow;
        }
        & ~ p {
          color: $primaryYellow;
        }
      }
    }
    & span {
      position: relative;
      top: 5px;
      background-color: white;
      width: 10px;
      height: 10px;
    }
  }
}
.filters-bar-close-btn {
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 30px;
  color: $lightGrey;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
  }
}
//media
@media (max-width: 1200px) {
  .recipes-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 992px) {
  .recipes-list {
    gap: 1rem;
    row-gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  .filters-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 576px) {
  .recipes-list {
    gap: 0.5rem;
    grid-template-columns: repeat(1, 1fr);
  }
  .recipes-header {
    font-size: 30px;
  }
  .recipes-header-buttons {
    left: 0;
    .show-bar-btn {
      left: 0;
      & .text {
        display: none;
      }
      & .circle {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        font-size: 16px;
        margin-left: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15) inset 0 0 0 2px
          $primaryYellow;
      }
    }
  }
  .recipes-list-container {
    margin-top: 1rem;
  }
  .search-input {
    font-size: 25px;
  }
  .search-bar {
    height: 150px;
  }
}
@media (max-width: 450px) {
  .filters-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

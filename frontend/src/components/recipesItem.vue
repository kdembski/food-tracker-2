<template>
  <div class="recipes-list-item" @click="pushToRecipeDetails(recipe.recipe_id)">
    <div class="recipes-list-item-image-container">
      <!-- image -->
      <img class="recipes-list-item-image" v-lazy="imgObj" />
      <div class="recipes-list-item-details">
        <!-- rating -->
        <div class="rating">
          <i class="fas fa-star"></i>
          <p>{{ recipe.rating }}/10</p>
        </div>
        <!-- prep time -->
        <div class="prep-time">
          <i class="fas fa-clock"></i>
          <p>{{ recipe.preparation_time }} min.</p>
        </div>
        <!-- kcal -->
        <div class="kcal">
          <i class="fas fa-fire-alt"></i>
          <p>{{ recipe.kcal }} kcal</p>
        </div>
      </div>
      <transition name="opacity-transition">
        <div v-if="recentlyAdded" class="recently-added form-success">
          <i class="fas fa-check-circle"></i>
          Dodano pomyślnie
        </div>
      </transition>
    </div>
    <!-- name -->
    <div
      class="recipes-list-item-name text-overflow-ellipsis-2"
      v-tooltip="{
        content: recipe.recipe_name,
        delay: { show: 1000, hide: 100 },
      }"
    >
      {{ recipe.recipe_name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "recipesItem",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    recentlyAdded: {
      type: Boolean,
    },
  },
  data() {
    return {
      imgObj: {
        src: this.recipe.image,
        error: require("../assets/placeholder.png"),
        loading: require("../assets/loading.png"),
      },
    };
  },
  methods: {
    pushToRecipeDetails(recipeId) {
      this.$router.push(`/recipe/${recipeId}`);
    },
  },
};
</script>
<style lang="scss">
.recipes-list {
  &-item {
    min-height: 348px;
    cursor: pointer;
    &-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border: 1px solid $lighterGrey;
      &-container {
        height: 250px;
        position: relative;
        z-index: -1;
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }
      }
    }
    &-details {
      @include flex-center;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      font-size: 25px;
      color: white;
      z-index: 1;
      & .rating,
      & .prep-time,
      & .kcal {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% / 3);
        transform: translateY(15%);
        opacity: 0;
        transition: all 0.2s ease-in-out;
        margin-top: 0.4rem;
        & p {
          font-size: 16px;
          margin: 0;
          margin-top: 0.3rem;
        }
      }
    }
    &-name {
      font-size: 22px;
      font-weight: 300;
      color: $lightGrey;
      text-align: center;
      margin: 1rem;
    }
    &:hover {
      & .recipes-list-item-image-container {
        position: relative;
        &::after {
          opacity: 1;
        }
      }
      & .recipes-list-item-details {
        & .rating,
        & .prep-time,
        & .kcal {
          transform: translateY(0);
          opacity: 1;
        }
        & .rating {
          transition: all 0.2s 0.1s ease-in-out;
        }
        & .prep-time {
          transition: all 0.2s 0.1s ease-in-out;
        }
        & .kcal {
          transition: all 0.2s 0.1s ease-in-out;
        }
      }
    }
  }
}

.recently-added.form-success {
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(220, 255, 180, 0.7);
  font-size: 22px;
  color: rgba(0, 160, 0, 0.8);
  font-weight: 900;
  & i {
    font-size: 150px;
    color: rgba(0, 160, 0, 0.8);
    margin-right: 0;
  }
}
@keyframes image-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

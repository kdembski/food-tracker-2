<template>
  <div class="main-container">
    <!-- header -->
    <div class="recipe-header row m-0 mt-lg-4">
      <div class="recipe-details col-lg-5 ">
        <!-- name -->
        <div class="recipe-details-name">
          {{ recipe.recipe_name }}
        </div>
        <div class="recipe-details-icons">
          <!-- category -->
          <div
            class="recipe-details-category"
            v-tooltip="{
              content: 'Na jaki posiłek przepis się nadaje',
              delay: { show: 200, hide: 10 },
            }"
          >
            <div class="icon">
              <i class="fas fa-utensils"></i>
            </div>
            <div class="text">
              <div v-for="(category, index) in categoryList" :key="index">
                <p>{{ category }}</p>
              </div>
            </div>
          </div>
          <!-- prep time -->
          <div
            class="recipe-details-preptime"
            v-tooltip="{
              content: 'Czas przygotowania przepisu',
              delay: { show: 200, hide: 10 },
            }"
          >
            <div class="icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="text">
              <p>{{ recipe.preparation_time }} min.</p>
            </div>
          </div>
          <!-- kcal -->
          <div
            class="recipe-details-kcal"
            v-tooltip="{
              content: 'Ilość kalorii na jedną procję',
              delay: { show: 200, hide: 10 },
            }"
          >
            <div class="icon">
              <i class="fas fa-fire-alt"></i>
            </div>
            <div class="text">
              <p>{{ recipe.kcal }} kcal</p>
            </div>
          </div>
          <!-- rating -->
          <div class="recipe-details-rating">
            <div class="stars">
              <div v-for="index in 5" :key="index">
                <i v-if="recipe.rating / 2 >= index" class="fas fa-star"></i>
                <i
                  v-else-if="index == (recipe.rating + 1) / 2"
                  class="fas fa-star-half-alt"
                ></i>
                <i v-else class="far fa-star"></i>
              </div>
            </div>
            <div class="text">
              <p>{{ recipe.rating }} / 10</p>
            </div>
          </div>
        </div>
        <!-- buttons -->
        <div class="recipe-details-edit-buttons">
          <div
            class="edit-button"
            @click="$router.push(`/editRecipe/${recipe.recipe_id}`)"
          >
            Edytuj
          </div>
          <div class="delete-button" @click="deleteRecipeModal = true">
            Usuń
          </div>
          <div class="duplicate-button" @click="duplicateRecipe">
            Duplikuj
          </div>
        </div>
        <!-- recipe deleted alert -->
        <transition name="recipe-deleted-transition">
          <div v-if="recipeDeleted" class="recipe-deleted">
            <i class="far fa-times-circle"></i>
          </div>
        </transition>
        <!-- recipe duplicated alert -->
        <transition name="recipe-duplicated-transition">
          <div v-if="recipeDuplicated" class="recipe-duplicated">
            <i class="fas fa-sticky-note first"></i>
            <i class="fas fa-sticky-note second"></i>
          </div>
        </transition>
      </div>
      <!-- image -->
      <div class="recipe-details-image-container col-lg-7">
        <div
          class="recipe-details-image"
          :style="{ 'background-image': 'url(' + image + ')' }"
        ></div>
      </div>
    </div>
    <div class="recipe-content row m-0 mt-lg-5">
      <!-- ingredients -->
      <div class="recipe-ingredients col-lg-5">
        <!-- header -->
        <div class="ingredients-header">
          <div>Składniki</div>
          <!-- portions -->
          <div class="portions-container">
            <div
              class="portions-button"
              @click="decreasePortionsNumber"
              :class="{ disabled: portionsNumber == 1 }"
            >
              <i class="fas fa-minus"></i>
            </div>
            <div
              class="portions-number"
              v-tooltip="{
                content: 'Liczba porcji',
                delay: { show: 200, hide: 10 },
              }"
            >
              <i class="fas fa-user-friends"></i>{{ portionsNumber }}
            </div>
            <div
              class="portions-button"
              @click="increasePortionsNumber"
              :class="{ disabled: portionsNumber == 9 }"
            >
              <i class="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <!-- ingredient -->
        <div
          class="ingredients-item"
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
        >
          <!-- label -->
          <label class="ingredient-label">
            <!-- checkbox -->
            <input type="checkbox" class="ingredient-checkbox" />
            <!-- checkmaark -->
            <div class="ingredient-checkmark">
              <i class="fas fa-check"></i>
            </div>
            <!-- name -->
            <div class="ingredient-name">
              {{ ingredient.ingredient_name }}
            </div>
            <!-- amount nad unit -->
            <div class="ingredient-amount">
              {{ ingredient.amount * portionsNumber }}
              <div
                class="ingredient-unit"
                v-tooltip="{
                  content: ingredient.unit_name,
                  delay: { show: 200, hide: 10 },
                }"
              >
                {{ ingredient.shortcut }}
              </div>
            </div>
          </label>
        </div>
      </div>
      <!-- steps -->
      <div class="recipe-steps col-lg-7">
        <!-- header -->
        <div class="steps-header">
          Krok po kroku
          <div class="step-tip">
            (kliknij na krok, aby oznaczyć go jako wykonany)
          </div>
        </div>
        <!-- step -->
        <div class="steps-item" v-for="(step, index) in steps" :key="index">
          <!-- label -->
          <label class="step-label">
            <!-- checkbox -->
            <input type="checkbox" class="step-checkbox" />
            <!-- number -->
            <div class="step-number">{{ step.step_number }}</div>
            <!-- instructions -->
            <div class="step-text">{{ step.instructions }}</div>
          </label>
        </div>
      </div>
    </div>
    <!-- delete recipe modal -->
    <transition name="opacity-transition">
      <div v-if="deleteRecipeModal" class="delete-recipe-modal-overlay">
        <div class="delete-recipe-modal">
          <!-- modal header -->
          <div class="delete-recipe-modal-header">
            <i class="fas fa-exclamation-circle"></i>
            <div>
              Czy na pewno chcesz usunąć
              <b> "{{ recipe.recipe_name }}" </b>
              ?
            </div>
          </div>
          <!-- modal buttons -->
          <div class="delete-recipe-modal-buttons">
            <div class="accept" @click="deleteRecipe">Tak</div>
            <div class="cancel" @click="deleteRecipeModal = false">
              Nie
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RecipeDetails",
  data() {
    return {
      portionsNumber: 1,
      deleteRecipeModal: false,
      recipeDeleted: false,
      recipeDuplicated: false,
    };
  },
  methods: {
    //increase portions number
    increasePortionsNumber() {
      if (this.portionsNumber < 9) {
        this.portionsNumber++;
      }
    },
    //decrease portions number
    decreasePortionsNumber() {
      if (this.portionsNumber > 1) {
        this.portionsNumber--;
      }
    },
    //delete recipe
    deleteRecipe() {
      var recipe = JSON.parse(JSON.stringify(this.recipe));
      this.deleteRecipeModal = false;
      this.recipeDeleted = true;
      setTimeout(() => {
        try {
          axios
            .delete(`http://localhost:5000/recipes/${recipe.recipe_id}`)
            .then(() => {
              this.$store.commit("deleteRecipe", recipe);
              this.$router.push("/recipes");
            });
        } catch (error) {
          console.log(error);
        }
      }, 300);
    },
    //duplicate recipe
    duplicateRecipe() {
      var data = {
        recipe: this.recipe,
        callback: () => {
          this.$router.push({
            name: "Recipes",
            params: { success: true },
          });
        },
      };
      this.recipeDuplicated = true;
      setTimeout(() => {
        this.$store.dispatch("addRecipe", data);
      }, 900);
    },
  },
  computed: {
    recipe: function() {
      return this.$store.state.recipes.find((recipe) => {
        return recipe.recipe_id == this.$route.params.id;
      });
    },
    categoryList: function() {
      var array = [];
      var category = this.recipe.category.toString();
      for (let i = 0; i < category.length; i++) {
        if (category[i] == 0) {
          array.push("Brak kategorii");
        }
        if (category[i] == 1) {
          array.push("Śniadanie");
        }
        if (category[i] == 2) {
          array.push("Obiad");
        }
        if (category[i] == 3) {
          array.push("Kolacja");
        }
        if (array.length == 3) {
          let array = ["Wszystko"];
          return array;
        }
      }
      return array;
    },
    image: function() {
      if (this.recipe.image == "") {
        return require("../assets/placeholder.png");
      } else return this.recipe.image;
    },
    steps: function() {
      var array = this.recipe.steps
        .slice()
        .sort((a, b) => a.step_number - b.step_number);
      return array;
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-header {
  display: flex;
  position: relative;
  margin: 1rem 0 0 0;
}
.recipe-details-image {
  display: flex;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  border: 1px solid $lighterGrey;
  &-container {
    padding: 0 0 0 3rem;
  }
}
.recipe-details-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.5rem 2rem 5rem 2rem;
}
//recipe deleted alert
.recipe-deleted {
  position: absolute;
  @include flex-center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: rgba(200, 0, 0, 0.8);
  font-size: 30vh;
  &-transition {
    &-enter {
      opacity: 0;
      transform: scale(1.5);
    }
    &-leave-to {
      opacity: 0;
      transform: scale(1);
    }
    &-enter-active {
      transition: all 0.25s ease-in-out;
    }
    &-leave-active {
      transition: all 0.25s ease-in-out;
    }
  }
}
//recipe duplicated alert
.recipe-duplicated {
  position: absolute;
  @include flex-center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: rgba(0, 140, 0, 0.8);
  font-size: 20vh;
  & .first {
    transform: translateX(10vh);
    animation: first-animation 0.45s 0.25s ease-in-out forwards;
  }
  & .second {
    opacity: 0;
    transform: translateX(-10vh) scale(0.1);
    animation: second-animation 0.45s 0.25s ease-in-out forwards;
  }
  &-transition {
    &-enter {
      opacity: 0;
    }
    &-leave-to {
      opacity: 0;
    }
    &-enter-active {
      transition: all 0.25s ease-in-out;
    }
    &-leave-active {
      transition: all 0.25s ease-in-out;
    }
  }
}
@keyframes first-animation {
  from {
    transform: translateX(10vh);
  }
  to {
    transform: translateX(-2vh);
  }
}
@keyframes second-animation {
  from {
    opacity: 0;
    transform: translateX(-10vh) scale(0.1);
  }
  to {
    opacity: 1;
    transform: translateX(2vh) scale(1);
  }
}
//details
.recipe-details {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  position: relative;
  //name
  &-name {
    font-size: 45px;
    font-weight: 500;
    color: $primaryGrey;
    line-height: 110%;
    text-align: center;
  }
  //prep time, kcal, category
  &-preptime,
  &-kcal,
  &-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .text {
      font-size: 22px;
      letter-spacing: -2px;
      font-weight: 300;
      color: $lightGrey;
      & p {
        margin: 0;
        text-align: center;
      }
    }
    & .icon {
      display: flex;
      align-items: center;
      font-size: 40px;
      color: $lightGrey;
      margin-bottom: 0.5rem;
    }
  }
  //rating
  &-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .stars {
      display: flex;
      align-items: center;
      font-size: 28px;
      color: $lightGrey;
      margin-bottom: 0.25rem;
    }
    & .text {
      font-size: 22px;
      letter-spacing: -2px;
      font-weight: 300;
      color: $lightGrey;
      & p {
        margin: 0;
        text-align: center;
      }
    }
  }
  //edit buttons
  &-edit-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    & .edit-button,
    & .delete-button,
    & .duplicate-button {
      cursor: pointer;
      color: $primaryYellow;
      padding: 0.5rem 2rem;
      border-radius: 50px;
      font-size: 20px;
      font-weight: 500;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
      background-color: white;
      margin-right: 1.5rem;
      &:hover {
        background-color: $lightYellow;
        color: $primaryGrey;
      }
    }
    & .duplicate-button {
      margin-right: 0;
    }
  }
}
//portions
.portions {
  &-container {
    display: flex;
  }
  &-button {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: $lightGrey;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      color: $primaryYellow;
    }
    &.disabled {
      color: $lighterGrey;
      pointer-events: none;
    }
  }
  &-number {
    padding: 0 1rem;
    font-size: 24px;
    color: $primaryGrey;
    & i {
      margin-right: 0.5rem;
    }
  }
}
//ingredients
.recipe-ingredients {
  padding: 0;
}
.ingredients-header {
  font-size: 35px;
  color: $primaryGrey;
  font-weight: 500;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ingredient {
  &-name {
    width: 70%;
    transition: all 0.15s ease-in-out;
  }
  &-amount {
    display: flex;
    justify-content: flex-end;
    min-width: 30%;
    transition: all 0.15s ease-in-out;
  }
  &-unit {
    margin-left: 0.5rem;
  }
  &-label {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: $lightGrey;
    font-weight: 300;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  &-checkbox {
    visibility: hidden;
    position: absolute;
    &:checked {
      & ~ .ingredient-checkmark {
        box-shadow: inset 0 0 0 13px $primaryYellow;
        & i {
          opacity: 1;
        }
      }
      & ~ .ingredient {
        &-name,
        &-amount,
        &-unit {
          color: $lighterGrey;
        }
      }
    }
  }
  &-checkmark {
    @include flex-center;
    min-width: 26px;
    min-height: 26px;
    background-color: white;
    box-shadow: inset 0 0 0 2px $lighterGrey;
    border-radius: 3px;
    margin-right: 1rem;
    transition: all 0.15s ease-in-out;
    & i {
      color: white;
      opacity: 0;
      font-size: 15px;
      transition: all 0.15s ease-in-out;
    }
  }
}
//steps
.recipe-steps {
  padding: 0 0 0 3rem;
}
.steps-header {
  font-size: 35px;
  color: $primaryGrey;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 90%;
  & .step-tip {
    font-size: 16px;
    color: $lightGrey;
    font-weight: 300;
  }
}
.steps-item {
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 0;
  }
}
.step {
  &-number {
    @include flex-center;
    position: relative;
    min-width: 50px;
    min-height: 50px;
    border-radius: 25px;
    background-color: $primaryYellow;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-right: 2rem;
    &::after {
      @include flex-center;
      font-family: "Font Awesome 5 Free";
      content: "\f00c";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      border-radius: 25px;
      background-color: rgb(0, 180, 0);
      transition: all 0.3s ease-in-out;
      transform: scale(1.5);
    }
  }
  &-text {
    color: $lightGrey;
    font-size: 25px;
    font-weight: 300;
    transition: all 0.2s ease-in-out;
  }
  &-checkbox {
    visibility: hidden;
    position: absolute;
    &:checked {
      & ~ .step-number {
        &:after {
          opacity: 1;
          transform: scale(1.05);
        }
      }

      & ~ .step-text {
        color: rgb(140, 220, 140);
      }
    }
  }
  &-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}

//delete recipe modal
.delete-recipe-modal {
  width: 400px;
  height: 250px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  background-color: white;
  opacity: 0;
  //border-radius: 5px;
  animation: modal-animation 0.25s 0.2s ease-in-out forwards;
  &-overlay {
    @include flex-center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#000000, 0.6);
    z-index: 1000;
  }
  &-header {
    @include flex-center;
    color: $primaryGrey;
    height: 70%;
    font-size: 19px;
    font-weight: 300;
    padding: 1rem;
    border-bottom: 1px solid $lighterGrey;
    & i {
      font-size: 100px;
      color: rgb(220, 0, 0);
      margin-right: 1rem;
    }
  }
  &-buttons {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    & .accept,
    & .cancel {
      @include flex-center;
      width: 130px;
      height: 40px;
      font-size: 18px;
      font-weight: 700;
      color: $primaryGrey;
      background-color: $lighterGrey;
      transition: all 0.15s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $primaryGrey;
        background-color: $lightYellow;
      }
    }
  }
}
//media
@media (max-width: 1500px) {
  .recipe-details-icons {
    padding: 5.5rem 1rem 5rem 1rem;
  }
}
@media (max-width: 1200px) {
  .recipe-details {
    padding: 0.5rem 0;
    &-name {
      font-size: 40px;
    }
    &-preptime,
    &-kcal,
    &-category {
      & .text {
        font-size: 20px;
      }
      & .icon {
        font-size: 30px;
      }
    }
    &-rating {
      & .stars {
        font-size: 20px;
      }
      & .text {
        font-size: 20px;
      }
    }
  }
  .recipe-details-icons {
    padding: 3.5rem 1rem 3rem 1rem;
  }
}
@media (max-width: 992px) {
  .recipe-details-image {
    height: 300px;
  }
  .recipe-details-icons {
    padding: 2.5rem 5rem;
  }
  .recipe-details-image {
    &-container {
      padding: 2rem 0 0 0;
    }
  }
  .recipe-steps {
    padding: 2rem 0 0 0;
  }
  .recipe-ingredients {
    padding: 2rem 0 0 0;
  }
  .recipe-details {
    &-preptime,
    &-kcal,
    &-category {
      & .text {
        font-size: 22px;
      }
      & .icon {
        font-size: 40px;
      }
    }
    &-rating {
      & .stars {
        font-size: 28px;
      }
      & .text {
        font-size: 22px;
      }
    }
  }
}
@media (max-width: 768px) {
  .recipe-details-icons {
    width: 100%;
    padding: 2.5rem 2rem;
  }
  .recipe-details {
    &-preptime,
    &-kcal,
    &-category {
      & .text {
        font-size: 20px;
      }
      & .icon {
        font-size: 35px;
      }
    }
    &-rating {
      & .stars {
        font-size: 24px;
      }
      & .text {
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 576px) {
}
@media (max-width: 500px) {
  .recipe-details {
    padding: 0;
    &-name {
      font-size: 25px;
    }
    &-preptime,
    &-kcal,
    &-category {
      & .text {
        font-size: 17px;
        letter-spacing: -1px;
      }
      & .icon {
        font-size: 25px;
      }
    }
    &-rating {
      & .stars {
        font-size: 18px;
        letter-spacing: -5px;
      }
      & .text {
        font-size: 18px;
      }
    }
    &-edit-buttons {
      & .edit-button,
      & .delete-button,
      & .duplicate-button {
        padding: 0.3rem 1.25rem;
        font-size: 16px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
        margin-right: 0.75rem;
      }
      & .duplicate-button {
        margin-right: 0;
      }
    }
  }
  .recipe-details-image {
    height: 250px;
  }
  .recipe-details-icons {
    padding: 1.5rem 0.25rem;
  }
  .recipe-details-image {
    &-container {
      padding: 1.5rem 0 0 0;
    }
  }
  .recipe-steps {
    padding: 1rem 0 0 0;
  }
  .recipe-ingredients {
    padding: 1rem 0 0 0;
  }
  .ingredients-header,
  .steps-header {
    font-size: 30px;
  }
  .step-number {
    min-width: 40px;
    min-height: 40px;
    border-radius: 20px;
    margin-right: 1rem;
  }
  .step-text {
    font-size: 22px;
  }
  .ingredient-label {
    font-size: 18px;
  }

  .delete-recipe-modal {
    width: 300px;
    height: 250px;
    &-header {
      font-size: 16px;
      padding: 1rem;
      & i {
        font-size: 60px;
        margin-right: 0.5rem;
      }
    }
    &-buttons {
      padding: 0.5rem;
      & .accept,
      & .cancel {
        width: 110px;
        font-size: 16px;
      }
    }
  }
}
</style>

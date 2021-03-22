<template>
  <div class="main-container">
    <div class="form-container changed">
      <!-- form -->
      <form class="form" @submit.prevent="confirm" novalidate="true">
        <div class="row m-0">
          <!-- recipe details -->
          <div class="col-lg-5 p-0">
            <!-- header -->
            <div class="form-header">
              <i class="fas fa-arrow-left" @click="pushRouterBack"></i
              >{{ header }}
            </div>
            <!-- name -->
            <custom-input
              inputType="text"
              :focusFunction="clearErrors"
              :errorBool="nameError"
              :errorText="nameErrorMessage"
              labelText="Nazwa przepisu"
              v-model="recipe.recipe_name"
            ></custom-input>
            <!-- prep time -->
            <custom-input
              inputType="number"
              :focusFunction="clearErrors"
              :errorBool="prepTimeError"
              :errorText="prepTimeErrorMessage"
              labelText="Czas przygotowania (min)"
              v-model="recipe.preparation_time"
            ></custom-input>
            <!-- image link -->
            <custom-input
              inputType="text"
              :focusFunction="clearErrors"
              :errorBool="false"
              errorText=""
              labelText="Link do zdjęcia"
              v-model="recipe.image"
            ></custom-input>
            <!-- category -->
            <div class="category">
              <!-- label -->
              <label class="category-label">
                <!-- checkbox -->
                <input
                  type="checkbox"
                  class="category-checkbox"
                  value="1"
                  v-model="category"
                />
                <!-- checkmaark -->
                <div class="category-checkmark">
                  <i class="fas fa-check"></i>
                </div>
                <!-- name -->
                <div class="category-name">
                  Śniadanie
                </div>
              </label>
              <!-- label -->
              <label class="category-label">
                <!-- checkbox -->
                <input
                  type="checkbox"
                  class="category-checkbox"
                  value="2"
                  v-model="category"
                />
                <!-- checkmaark -->
                <div class="category-checkmark">
                  <i class="fas fa-check"></i>
                </div>
                <!-- name -->
                <div class="category-name">
                  Obiad
                </div>
              </label>
              <!-- label -->
              <label class="category-label">
                <!-- checkbox -->
                <input
                  type="checkbox"
                  class="category-checkbox"
                  value="3"
                  v-model="category"
                />
                <!-- checkmaark -->
                <div class="category-checkmark">
                  <i class="fas fa-check"></i>
                </div>
                <!-- name -->
                <div class="category-name">
                  Kolacja
                </div>
              </label>
            </div>
            <!-- rating -->
            <div class="rating">
              <input
                type="radio"
                name="rating"
                id="rating-10"
                value="10"
                v-model="recipe.rating"
              />
              <label for="rating-10"></label>
              <input
                type="radio"
                name="rating"
                id="rating-9"
                value="9"
                v-model="recipe.rating"
              />
              <label for="rating-9"></label>
              <input
                type="radio"
                name="rating"
                id="rating-8"
                value="8"
                v-model="recipe.rating"
              />
              <label for="rating-8"></label>
              <input
                type="radio"
                name="rating"
                id="rating-7"
                value="7"
                v-model="recipe.rating"
              />
              <label for="rating-7"></label>
              <input
                type="radio"
                name="rating"
                id="rating-6"
                value="6"
                v-model="recipe.rating"
              />
              <label for="rating-6"></label>
              <input
                type="radio"
                name="rating"
                id="rating-5"
                value="5"
                v-model="recipe.rating"
              />
              <label for="rating-5"></label>
              <input
                type="radio"
                name="rating"
                id="rating-4"
                value="4"
                v-model="recipe.rating"
              />
              <label for="rating-4"></label>
              <input
                type="radio"
                name="rating"
                id="rating-3"
                value="3"
                v-model="recipe.rating"
              />
              <label for="rating-3"></label>
              <input
                type="radio"
                name="rating"
                id="rating-2"
                value="2"
                v-model="recipe.rating"
              />
              <label for="rating-2"></label>
              <input
                type="radio"
                name="rating"
                id="rating-1"
                value="1"
                v-model="recipe.rating"
              />
              <label for="rating-1"></label>
            </div>
          </div>
          <!-- image -->
          <div class="col-lg-7 p-0 pl-lg-5 mt-4 mt-lg-0">
            <img v-lazy="imgObj" class="recipe-image" :key="recipe.image" />
          </div>
        </div>
        <div class="row m-0">
          <!-- ingredients -->
          <div class="col-lg-5 p-0 mt-4">
            <!-- ingredients header -->
            <div class="ingredient-header">Składniki</div>
            <!-- ingredients list -->
            <div class="ingredients-list">
              <transition-group name="list-transition">
                <div
                  v-for="(ingredient, index) in recipe.ingredients"
                  :key="index"
                  class="ingredient"
                >
                  <!-- ingredient name -->
                  <div class="ingredient-name">
                    {{ ingredient.ingredient_name }}
                    <div
                      class="ingredient-select-btn"
                      @click="
                        editIngredientModal = true;
                        editedIngredientIndex = index;
                      "
                    >
                      <i class="fas fa-list"></i>
                    </div>
                  </div>
                  <!-- ingredient amount -->
                  <div class="ingredient-amount">
                    <custom-input
                      inputType="number"
                      :focusFunction="clearErrors"
                      :errorBool="ingredientErrors[index].bool"
                      :errorText="ingredientErrors[index].message"
                      labelText="Ilość"
                      v-model="ingredient.amount"
                    ></custom-input>
                    <!-- ingredient unit -->
                    <div class="ingredient-unit">{{ ingredient.shortcut }}</div>
                    <!-- ingredient delete button -->
                    <div
                      class="ingredient-delete-btn"
                      @click="deleteIngredient(index)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </div>
                  </div>
                </div>
              </transition-group>

              <!--  ingredient add button -->
              <div class="ingredient-add-btn" @click="addIngredient">
                <i class="fas fa-plus"></i>Dodaj składnik
              </div>
            </div>
          </div>
          <!-- steps -->
          <div class="col-lg-7 p-0 pl-lg-5 mt-4">
            <!-- steps header -->
            <div class="step-header">Krok po kroku</div>
            <!-- steps list -->
            <div class="steps-list">
              <transition-group name="list-transition">
                <div
                  v-for="(step, index) in recipe.steps"
                  :key="index"
                  class="step"
                >
                  <!-- steps instrucitons -->
                  <div class="step-text">
                    <!-- steps number -->
                    <div class="step-number">{{ step.step_number }}</div>
                    <custom-input
                      inputType="text"
                      :focusFunction="clearErrors"
                      :errorBool="stepErrors[index].bool"
                      :errorText="stepErrors[index].message"
                      labelText="Instrukcje"
                      v-model="step.instructions"
                    ></custom-input>
                  </div>
                  <!-- arrow buttons -->
                  <div class="arrow-buttons-container">
                    <i
                      class="fas fa-arrow-up"
                      :class="{ disabled: index == 0 }"
                      @click="pushStepUp(index)"
                    ></i>
                    <i
                      class="fas fa-arrow-down"
                      :class="{ disabled: index == recipe.steps.length - 1 }"
                      @click="pushStepDown(index)"
                    ></i>
                  </div>
                </div>
              </transition-group>

              <div class="step-buttons-container">
                <!-- add step button -->
                <div class="step-add-btn" @click="addStep">
                  <i class="fas fa-plus"></i>Dodaj krok
                </div>
                <!-- delete step button -->
                <div class="step-delete-btn" @click="deleteStep">
                  <i class="fas fa-trash-alt"></i>Usuń krok
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- buttons -->
        <div class="buttons-container row">
          <input type="submit" class="form-btn changed" value="Akceptuj" />
          <div class="form-btn changed" @click="pushRouterBack">Anuluj</div>
        </div>
      </form>
    </div>
    <!-- select ingredient modal -->
    <transition name="opacity-transition">
      <div
        v-if="editIngredientModal || addIngredientModal"
        class="select-ingredient-modal-overlay"
      >
        <div class="select-ingredient-modal">
          <!-- modal header -->
          <div class="select-ingredient-modal-header">
            Wybierz składnik
            <transition name="error-transition">
              <div
                v-if="selectIngredientError"
                class="select-ingredient-modal-error"
              >
                <i class="fas fa-exclamation-circle"></i>
                Musisz wybrać składnik
              </div>
            </transition>
          </div>
          <div
            class="select-ingredient-modal-close-btn"
            @click="
              editIngredientModal = false;
              addIngredientModal = false;
              selectIngredientError = false;
              selectedIngredient = '';
            "
          >
            <i class="fas fa-times"></i>
          </div>
          <!-- modal list container-->
          <div class="select-ingredient-modal-list-container">
            <!-- modal search bar -->
            <div class="select-ingredient-modal-search-bar">
              <i class="fas fa-search"></i>
              <input
                type="text"
                placeholder="Wpisz nazwę składnika"
                v-model="ingredientSearch"
              />
            </div>
            <!-- modal list -->
            <div class="select-ingredient-modal-list">
              <!-- list ingredient -->
              <transition-group name="list-transition">
                <label
                  class="select-ingredient-modal-list-ingredient"
                  v-for="(ingredient, index) in filteredIngredientsList"
                  :key="index"
                >
                  <!-- ingredient input -->
                  <input
                    type="radio"
                    name="ingredient"
                    class="select-ingredient-modal-list-ingredient-checkbox"
                    :value="ingredient"
                    v-model="selectedIngredient"
                  />
                  <!-- ingredient name -->
                  <div class="select-ingredient-modal-list-ingredient-name">
                    {{ ingredient.ingredient_name }}
                  </div>
                  <!-- ingredient unit -->
                  <div class="select-ingredient-modal-list-ingredient-unit">
                    {{ ingredient.unit_name }}
                  </div>
                </label>
              </transition-group>
            </div>
          </div>
          <!-- modal footer -->
          <div class="select-ingredient-modal-footer">
            <div
              class="select-ingredient-modal-select-btn form-btn"
              @click="selectIngredient"
            >
              Wybierz
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import customInput from "../components/customInput.vue";
export default {
  components: { customInput },
  name: "EditRecipe",
  data() {
    return {
      nameError: false,
      nameErrorMessage: "",
      prepTimeError: false,
      prepTimeErrorMessage: "",
      ingredientErrors: [],
      stepErrors: [],
      recipe: "",
      header: "",
      category: [],
      selectedIngredient: "",
      selectIngredientError: false,
      editedIngredientIndex: "",
      editIngredientModal: false,
      addIngredientModal: false,
      ingredientSearch: "",
      deletedIngredients: [],
      deletedSteps: [],
    };
  },
  methods: {
    //confirm form
    confirm() {
      this.clearErrors();
      //validate name
      if (this.recipe.recipe_name == "") {
        this.nameError = true;
        this.nameErrorMessage = "Musisz podać nazwę przepisu";
        this.scrollIntoView(document.getElementsByClassName("form-header")[0]);
        return false;
      }
      //validate prep time
      if (this.recipe.preparation_time == "") {
        this.prepTimeError = true;
        this.prepTimeErrorMessage = "Musisz podać czas przygotowania przepisu";
        this.scrollIntoView(document.getElementsByClassName("form-header")[0]);
        return false;
      } else if (this.recipe.preparation_time < 0) {
        this.prepTimeError = true;
        this.prepTimeErrorMessage =
          "Czas przygotowania przepisu nie może być mniejszy od 0, no bo niby jak?";
        this.scrollIntoView(document.getElementsByClassName("form-header")[0]);
        return false;
      } else if (this.recipe.preparation_time > 999) {
        this.prepTimeError = true;
        this.prepTimeErrorMessage = "Serio gotujesz coś aż tak długo?";
        this.scrollIntoView(document.getElementsByClassName("form-header")[0]);
        return false;
      }
      //validate ingredients
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        if (!this.recipe.ingredients[i].amount) {
          this.ingredientErrors[i].bool = true;
          this.ingredientErrors[i].message = "Podaj ilość";
          this.scrollIntoView(
            document.getElementsByClassName("ingredient-amount")[i]
          );
          return false;
        } else if (this.recipe.ingredients[i].amount < 0) {
          this.ingredientErrors[i].bool = true;
          this.ingredientErrors[i].message = "Nie może być mniejsze od 0";
          this.scrollIntoView(
            document.getElementsByClassName("ingredient-amount")[i]
          );
          return false;
        } else if (this.recipe.ingredients[i].amount > 9999) {
          this.ingredientErrors[i].bool = true;
          this.ingredientErrors[i].message = "Za dużo";
          this.scrollIntoView(
            document.getElementsByClassName("ingredient-amount")[i]
          );
          return false;
        }
      }
      //validate steps
      for (let i = 0; i < this.recipe.steps.length; i++) {
        if (this.recipe.steps[i].instructions == "") {
          this.stepErrors[i].bool = true;
          this.stepErrors[i].message = "Podaj instrukcje";
          this.scrollIntoView(document.getElementsByClassName("step-text")[i]);
          return false;
        }
      }
      this.recipe.category = this.category.join("");
      //add or edit recipe
      if (this.$route.params.id === "add") {
        this.addRecipe();
      } else {
        this.editRecipe();
      }
    },
    //add recipe
    addRecipe() {
      this.$store.commit("setLoading", true);
      axios
        .post(
          `http://localhost:5000/recipes/${this.$store.state.loggedUser.user_id}`,
          this.recipe
        )
        .then((response) => {
          //check if there is something in steps or ingredients
          if (
            this.recipe.ingredients.length > 0 ||
            this.recipe.steps.length > 0
          ) {
            var ingredientsDone = true;
            var stepsDone = true;
            //if ingredients is not empty
            if (this.recipe.ingredients.length > 0) {
              ingredientsDone = false;
              this.recipe.ingredients.forEach((ingredient, index, array) => {
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
                        this.$router.push({
                          name: "Recipes",
                          params: { success: true },
                        });
                        this.$store.dispatch(
                          "getRecipe",
                          response.data.insertId
                        );
                      }
                    }
                  });
              });
            }
            //if steps is not empty
            if (this.recipe.steps.length > 0) {
              stepsDone = false;
              this.recipe.steps.forEach((step, index, array) => {
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
                        this.$router.push({
                          name: "Recipes",
                          params: { success: true },
                        });
                        this.$store.dispatch(
                          "getRecipe",
                          response.data.insertId
                        );
                      }
                    }
                  });
              });
            }
          }
          //if steps and ingredients are empty
          else {
            this.$router.push({
              name: "Recipes",
              params: { success: true },
            });
            this.$store.dispatch("getRecipe", response.data.insertId);
          }
        });
    },
    editRecipe() {
      var recipeId = this.recipe.recipe_id;
      this.$store.commit("setLoading", true);
      axios
        .put(`http://localhost:5000/recipes/${recipeId}`, this.recipe)
        .then(() => {
          //check if there is something in steps or ingredients
          if (
            this.recipe.ingredients.length > 0 ||
            this.recipe.steps.length > 0 ||
            this.deletedIngredients.length > 0 ||
            this.deletedSteps > 0
          ) {
            var ingredientsDone = true;
            var stepsDone = true;
            var deletedIngredientsDone = true;
            var deletedStepsDone = true;
            //if ingredients is not empty
            if (this.recipe.ingredients.length > 0) {
              ingredientsDone = false;
              this.recipe.ingredients.forEach((ingredient, index, array) => {
                //if ingredient is new
                if (ingredient.recipe_ingredient_id == -1) {
                  axios
                    .post(`http://localhost:5000/recipe_ingredients`, {
                      ingredient_id: ingredient.ingredient_id,
                      recipe_id: recipeId,
                      amount: ingredient.amount,
                    })
                    .then(() => {
                      if (index == array.length - 1) {
                        ingredientsDone = true;
                        if (
                          stepsDone &&
                          deletedIngredientsDone &&
                          deletedStepsDone
                        ) {
                          this.pushRouterBack();
                          this.$store.dispatch("getRecipe", recipeId);
                        }
                      }
                    });
                }
                //if ingredient is alredy in database
                else {
                  axios
                    .put(
                      `http://localhost:5000/recipe_ingredients/${ingredient.recipe_ingredient_id}`,
                      {
                        ingredient_id: ingredient.ingredient_id,
                        recipe_id: recipeId,
                        amount: ingredient.amount,
                      }
                    )
                    .then(() => {
                      if (index == array.length - 1) {
                        ingredientsDone = true;
                        if (
                          stepsDone &&
                          deletedIngredientsDone &&
                          deletedStepsDone
                        ) {
                          this.pushRouterBack();
                          this.$store.dispatch("getRecipe", recipeId);
                        }
                      }
                    });
                }
              });
            }
            //if deleted ingredients is not empty
            if (this.deletedIngredients.length > 0) {
              deletedIngredientsDone = false;
              this.deletedIngredients.forEach((ingredient, index, array) => {
                axios
                  .delete(
                    `http://localhost:5000/recipe_ingredients/${ingredient.recipe_ingredient_id}`
                  )
                  .then(() => {
                    if (index == array.length - 1) {
                      deletedIngredientsDone = true;
                      if (stepsDone && ingredientsDone && deletedStepsDone) {
                        this.pushRouterBack();
                        this.$store.dispatch("getRecipe", recipeId);
                      }
                    }
                  });
              });
            }
            //if deleted steps is not empty
            if (this.deletedSteps.length > 0) {
              deletedStepsDone = false;
              this.deletedSteps.forEach((step, index, array) => {
                axios
                  .delete(`http://localhost:5000/recipe_steps/${step.step_id}`)
                  .then(() => {
                    if (index == array.length - 1) {
                      deletedStepsDone = true;
                      if (
                        stepsDone &&
                        ingredientsDone &&
                        deletedIngredientsDone
                      ) {
                        this.pushRouterBack();
                        this.$store.dispatch("getRecipe", recipeId);
                      }
                    }
                  });
              });
            }
            //steps is not empty
            if (this.recipe.steps.length > 0) {
              //if steps is not empty
              stepsDone = false;
              this.recipe.steps.forEach((step, index, array) => {
                //if step is new
                if (step.step_id == -1) {
                  axios
                    .post(`http://localhost:5000/recipe_steps`, {
                      step_number: step.step_number,
                      recipe_id: recipeId,
                      instructions: step.instructions,
                    })
                    .then(() => {
                      if (index == array.length - 1) {
                        stepsDone = true;
                        if (
                          ingredientsDone &&
                          deletedIngredientsDone &&
                          deletedStepsDone
                        ) {
                          this.pushRouterBack();
                          this.$store.dispatch("getRecipe", recipeId);
                        }
                      }
                    });
                }
                //if step already in database
                else {
                  axios
                    .put(`http://localhost:5000/recipe_steps/${step.step_id}`, {
                      step_number: step.step_number,
                      recipe_id: recipeId,
                      instructions: step.instructions,
                    })
                    .then(() => {
                      if (index == array.length - 1) {
                        stepsDone = true;
                        if (
                          ingredientsDone &&
                          deletedIngredientsDone &&
                          deletedStepsDone
                        ) {
                          this.pushRouterBack();
                          this.$store.dispatch("getRecipe", recipeId);
                        }
                      }
                    });
                }
              });
            }
          }
          //if steps and ingredients are empty
          else {
            this.$store.dispatch("getRecipe", recipeId);
            this.pushRouterBack();
          }
        });
    },
    //scroll into view
    scrollIntoView(target) {
      var yOffset = -100;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    },
    //set errors to false
    clearErrors() {
      this.nameError = false;
      this.nameErrorMessage = "";
      this.prepTimeError = false;
      this.prepTimeMessage = "";
      this.ingredientErrors.forEach((error) => {
        error.bool = false;
        error.message = "";
      });
      this.stepErrors.forEach((error) => {
        error.bool = false;
        error.message = "";
      });
    },
    //select ingredient
    selectIngredient() {
      if (this.selectedIngredient == "") {
        this.selectIngredientError = true;
        setTimeout(() => {
          this.selectIngredientError = false;
        }, 1000);
      } else {
        if (this.editIngredientModal) {
          this.recipe.ingredients[
            this.editedIngredientIndex
          ].ingredient_name = this.selectedIngredient.ingredient_name;
          this.recipe.ingredients[
            this.editedIngredientIndex
          ].ingredient_id = this.selectedIngredient.ingredient_id;
          this.recipe.ingredients[
            this.editedIngredientIndex
          ].unit_name = this.selectedIngredient.unit_name;
          this.recipe.ingredients[
            this.editedIngredientIndex
          ].shortcut = this.selectedIngredient.shortcut;
          this.editIngredientModal = false;
        }
        if (this.addIngredientModal) {
          var ingredient = {
            ingredient_name: this.selectedIngredient.ingredient_name,
            ingredient_id: this.selectedIngredient.ingredient_id,
            unit_name: this.selectedIngredient.unit_name,
            shortcut: this.selectedIngredient.shortcut,
            recipe_ingredient_id: -1,
          };
          this.recipe.ingredients.push(ingredient);
          this.ingredientErrors.push({ bool: false, message: "" });
          this.addIngredientModal = false;
        }
        this.selectedIngredient = "";
        this.selectIngredientError = false;
      }
    },
    //add ingredient
    addIngredient() {
      this.addIngredientModal = true;
    },
    //delete ingredient
    deleteIngredient(index) {
      this.deletedIngredients.push(this.recipe.ingredients[index]);
      this.recipe.ingredients.splice(index, 1);
      this.ingredientErrors.pop();
      this.clearErrors();
    },
    //add step
    addStep() {
      this.recipe.steps.push({
        step_id: -1,
        step_number: (() => {
          if (this.recipe.steps.length > 0) {
            return (
              this.recipe.steps[this.recipe.steps.length - 1].step_number + 1
            );
          } else return 1;
        })(),

        instructions: "",
      });
      this.stepErrors.push({ bool: false, message: "" });
    },
    //delete step
    deleteStep() {
      this.deletedSteps.push(this.recipe.steps[this.recipe.steps.length - 1]);
      this.recipe.steps.pop();
      this.stepErrors.pop();
      this.clearErrors();
    },
    //swap step with one above it
    pushStepUp(index) {
      [
        this.recipe.steps[index].instructions,
        this.recipe.steps[index - 1].instructions,
      ] = [
        this.recipe.steps[index - 1].instructions,
        this.recipe.steps[index].instructions,
      ];
    },
    //swap step with one below it
    pushStepDown(index) {
      [
        this.recipe.steps[index].instructions,
        this.recipe.steps[index + 1].instructions,
      ] = [
        this.recipe.steps[index + 1].instructions,
        this.recipe.steps[index].instructions,
      ];
    },
    //push router back
    pushRouterBack() {
      if (this.$route.params.id == "add") {
        this.$router.push("/recipes");
      } else {
        this.$router.push(`/recipe/${this.$route.params.id}`);
      }
    },
  },
  computed: {
    //set image src
    imgObj: function() {
      return {
        src: this.recipe.image,
        error: require("../assets/placeholder.png"),
        loading: require("../assets/loading.gif"),
      };
    },
    //get ingredient list from store
    ingredientsList: function() {
      return JSON.parse(JSON.stringify(this.$store.state.ingredients));
    },
    //filter ingredient list
    filteredIngredientsList: function() {
      return this.ingredientsList.filter((ingredient) => {
        return ingredient.ingredient_name
          .toLowerCase()
          .match(this.ingredientSearch.toLowerCase());
      });
    },
  },
  created() {
    //set recipe
    this.recipe = (() => {
      if (this.$route.params.id == "add")
        return {
          category: 0,
          image: "",
          ingredients: [],
          preparation_time: "",
          rating: 0,
          recipe_id: 0,
          recipe_name: "",
          steps: [],
          user_id: "",
        };
      else {
        return JSON.parse(
          JSON.stringify(
            this.$store.state.recipes.find((recipe) => {
              return recipe.recipe_id == this.$route.params.id;
            })
          )
        );
      }
    })();
    //set header
    this.header = (() => {
      if (this.$route.params.id == "add") return "Dodaj przepis";
      else return "Edytuj przepis";
    })();
    //set default ingredient erros
    this.ingredientErrors = this.recipe.ingredients.map(() => {
      return { bool: false, message: "" };
    });
    //set default steps errors
    this.stepErrors = this.recipe.steps.map(() => {
      return { bool: false, message: "" };
    });
    //set categories
    this.category = this.recipe.category.toString().split("");
    //sort steps
    this.recipe.steps = this.recipe.steps
      .slice()
      .sort((a, b) => a.step_number - b.step_number);
  },
};
</script>

<style lang="scss" scoped>
.form-container.changed {
  width: 100%;
  box-shadow: unset;
  padding: 0 !important;
}
.form-header {
  & i {
    margin-right: 1.5rem;
    color: $lightGrey;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
  }
}
.recipe-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border: 1px solid $lighterGrey;
}
//rating
.rating {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  & input {
    display: none;
  }
  & > label {
    cursor: pointer;
    position: relative;
    margin: 0;
    max-width: 25px;
    padding-left: 8px;
    &::after {
      display: inline-block;
      position: relative;
      z-index: -1;
      font-family: "Font Awesome 5 Free";
      content: "\f089";
      color: $lighterGrey;
      font-weight: 900;
      font-size: 31px;
      transition: 0.1s ease-in-out;
    }
    &:nth-child(4n + 2) {
      transform: rotateY(180deg);
    }
  }
  & > input:checked ~ label::after,
  & > input:checked ~ label ~ label::after {
    color: $primaryYellow;
  }
  & label:hover::after,
  & label:hover ~ label::after {
    color: $lightYellow !important;
  }
}
//category
.category {
  display: flex;
  justify-content: center;
  margin-top: -0.5rem;
  &-label {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: $lightGrey;
    font-weight: 300;
    margin-bottom: 1rem;
    cursor: pointer;
    &:last-child {
      & .category-name {
        margin-right: 0;
      }
    }
  }
  &-checkbox {
    visibility: hidden;
    position: absolute;
    &:checked {
      & ~ .category-checkmark {
        box-shadow: inset 0 0 0 13px $primaryYellow;
        & i {
          opacity: 1;
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
    margin-right: 0.5rem;
    transition: all 0.15s ease-in-out;
    & i {
      color: white;
      opacity: 0;
      font-size: 15px;
      transition: all 0.15s ease-in-out;
    }
  }
  &-name {
    margin-right: 1.5rem;
  }
}
.buttons-container {
  display: flex;
  justify-content: space-around;
  margin: 0;
  margin-top: 4rem;
  width: 100%;
}
.form-btn.changed {
  cursor: pointer;
  left: 0;
  width: 30%;
}

//ingredients
.ingredient {
  display: flex;
  align-items: center;
  &-header {
    font-size: 30px;
    font-weight: 500;
    color: $primaryGrey;
    margin-bottom: 2rem;
  }
  &-name {
    display: flex;
    align-items: center;
    width: 60%;
    font-size: 20px;
    font-weight: 300;
    color: $primaryGrey;
    margin: 0 1rem 3rem 0;
  }
  &-amount {
    display: flex;
    align-items: center;
    width: 40%;
  }
  &-unit {
    margin: 0 1rem 3rem 1rem;
  }
  &-select-btn,
  &-delete-btn {
    font-size: 22px;
    color: $primaryGrey;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
  }
  &-delete-btn {
    margin-bottom: 3rem;
  }
  &-select-btn {
    margin-left: 1rem;
  }
  &-add-btn {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: $primaryGrey;
    transition: 0.1s ease-in-out;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
    & i {
      font-size: 25px;
      margin-right: 0.5rem;
    }
  }
}
//steps
.step {
  display: flex;
  &-header {
    font-size: 30px;
    font-weight: 500;
    color: $primaryGrey;
    margin-bottom: 2rem;
  }
  &-number {
    font-size: 40px;
    font-weight: 400;
    margin: 0 1rem 3rem 0;
    display: flex;
    align-items: center;
  }
  &-text {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &-buttons-container {
    display: flex;
  }
  &-delete-btn,
  &-add-btn {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: $primaryGrey;
    transition: 0.1s ease-in-out;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
    & i {
      font-size: 25px;
      margin-right: 0.5rem;
    }
  }
  &-delete-btn {
    margin-left: 2rem;
  }
}
.arrow-buttons-container {
  margin: 0 0 3rem 1rem;
  & i {
    color: $primaryGrey;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
    &.disabled {
      color: $lighterGrey;
      pointer-events: none;
    }
  }
}
//select ingredient modal
.select-ingredient-modal {
  background-color: white;
  height: 600px;
  width: 500px;
  box-shadow: $lightShadow;
  position: relative;
  opacity: 0;
  animation: modal-animation 0.3s 0.2s ease-in-out forwards;
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
  &-close-btn {
    position: absolute;
    top: 5px;
    right: 10px;
    color: $lightGrey;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
  }
  &-header {
    @include flex-center;
    height: 15%;
    font-size: 30px;
    font-weight: 500;
    color: $primaryGrey;
  }
  &-error {
    position: absolute;
    display: flex;
    align-items: center;
    top: calc(92.5% - 28.5px);
    left: 1.5rem;
    width: calc(100% - 3rem);
    font-size: 16px;
    font-weight: 300;
    padding: 1rem 1rem;
    background: rgb(255, 180, 180);
    color: rgb(200, 0, 0);
    z-index: 1;
    box-shadow: $lightShadow;
    & i {
      font-size: 25px;
      color: rgb(220, 0, 0);
      margin-right: 0.75rem;
    }
  }
  &-list-container {
    height: 70%;
    padding: 0 1.5rem;
    border-top: 1px solid $lighterGrey;
    border-bottom: 1px solid $lighterGrey;
  }
  &-search-bar {
    height: 45px;
    display: flex;
    align-items: center;
    background-color: $lightestGrey;
    & i {
      margin: 0 0.75rem;
      font-size: 18px;
      color: $lightGrey;
    }
    & input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 16px;
      font-weight: 300;
      color: $primaryGrey;
      &:focus {
        border: none;
        outline: none;
      }
      &::placeholder {
        font-size: 16px;
        font-weight: 300;
        color: $lightGrey;
      }
    }
  }
  &-list {
    max-height: calc(100% - 45px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: $lighterGrey;
    }
    &::-webkit-scrollbar-thumb {
      background: $lightGrey;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: $primaryGrey;
    }
    &-ingredient {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0.75rem;
      margin: 0;
      transition: 0.1s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: $lightestGrey;
      }
      &-unit,
      &-name {
        font-size: 18px;
        font-weight: 300;
        color: $primaryGrey;
        transition: 0.1s ease-in-out;
      }
      &-checkbox {
        display: none;
        &:checked ~ .select-ingredient-modal-list-ingredient-name,
        &:checked ~ .select-ingredient-modal-list-ingredient-unit {
          color: $primaryYellow;
        }
      }
    }
  }
  &-footer {
    @include flex-center;
    height: 15%;
  }
  &-select-btn {
    cursor: pointer;
    width: 200px;
    height: 50%;
    left: 0;
  }
}

//transitions
.list-transition {
  &-leave-to,
  &-enter {
    opacity: 0;
    max-height: 0;
  }
  &-enter-to,
  &-leave {
    opacity: 1;
    max-height: 160px;
  }
  &-enter-active {
    transition: all 0.4s ease-in-out;
  }
  &-leave-active {
    transition: all 0.3s ease-in-out;
  }
}
//media
@media (max-width: 1500px) {
}
@media (max-width: 1200px) {
  .ingredient {
    display: block;
    &-name {
      width: 100%;
      margin: 0 1rem 2rem 0;
    }
    &-amount {
      width: 100%;
    }
  }
}
@media (max-width: 992px) {
  .ingredient {
    display: flex;
    &-name {
      width: 60%;
      margin: 0 1rem 3rem 0;
    }
    &-amount {
      width: 40%;
    }
  }
  .buttons-container {
    margin-top: 3rem;
  }
  .form-btn.changed {
    width: 40%;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 576px) {
}
@media (max-width: 500px) {
  .recipe-image {
    height: 250px;
  }
  .ingredient {
    display: block;
    &-header {
      margin-bottom: 1rem;
    }
    &-name {
      width: 100%;
      margin: 0 1rem 2rem 0;
    }
    &-amount {
      width: 100%;
    }
  }

  .category {
    justify-content: space-around;
    &-label {
      font-size: 16px;
      &:last-child {
        & .category-name {
          padding-top: 2px;
          margin-right: 0;
        }
      }
    }
    &-name {
      padding-top: 2px;
    }
    &-checkmark {
      margin-right: 0.25rem;
    }
    &-name {
      margin-right: 0.75rem;
    }
  }
  .select-ingredient-modal {
    width: 100%;
  }
}
@media (max-height: 600px) {
  .select-ingredient-modal {
    height: 100%;
    &-overlay {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
}
</style>

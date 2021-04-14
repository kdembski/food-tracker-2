// import express
import express from "express";

// import function from controller
import {
  getRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeIngredients,
  addRecipeIngredient,
  updateRecipeIngredient,
  deleteRecipeIngredient,
  getRecipeSteps,
  addRecipeStep,
  updateRecipeStep,
  deleteRecipeStep,
} from "../controllers/recipes.js";
import { registerUser, loginUser } from "../controllers/users.js";
import { getIngredients } from "../controllers/ingredients.js";
import {
  getDay,
  addDayMeal,
  updateDayMeal,
  deleteDayMeal,
} from "../controllers/calendar.js";

// init express router
const router = express.Router();

//recipes routes
router.get("/recipes/:user_id", getRecipes);

router.get("/recipe/:recipe_id", getRecipeById);

router.post("/recipes/:user_id", addRecipe);

router.put("/recipes/:recipe_id", updateRecipe);

router.delete("/recipes/:recipe_id", deleteRecipe);

// recipe ingredients routes
router.get("/recipe_ingredients/:recipe_id", getRecipeIngredients);

router.post("/recipe_ingredients", addRecipeIngredient);

router.put("/recipe_ingredients/:recipe_ingredient_id", updateRecipeIngredient);

router.delete(
  "/recipe_ingredients/:recipe_ingredient_id",
  deleteRecipeIngredient
);

//steps routes
router.get("/recipe_steps/:recipe_id", getRecipeSteps);

router.post("/recipe_steps", addRecipeStep);

router.put("/recipe_steps/:step_id", updateRecipeStep);

router.delete("/recipe_steps/:step_id", deleteRecipeStep);

//users routes
router.post("/register", registerUser);

router.get("/login/:user_name", loginUser);

//ingredients routes
router.get("/ingredients", getIngredients);

//calendar routes
router.get("/calendar/:user_id%:day%:month%:year", getDay);

router.post("/calendar", addDayMeal);

router.put("/calendar/:date_id", updateDayMeal);

router.delete("/calendar/:date_id", deleteDayMeal);

// export default router
export default router;

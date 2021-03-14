// import express
import express from "express";

// import function from controller
import {
  getRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipes.js";
import { registerUser, loginUser } from "../controllers/users.js";

// init express router
const router = express.Router();

//recipes routes
router.get("/recipes/:user_id", getRecipes);

router.get("/recipes/:recipe_id", getRecipeById);

router.post("/recipes/:user_id", addRecipe);

router.put("/recipes/:recipe_id", updateRecipe);

router.delete("/recipes/:recipe_id", deleteRecipe);

//users routes
router.post("/register", registerUser);

router.get("/login/:user_name", loginUser);

// export default router
export default router;

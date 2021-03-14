// Import function from Product Model
import {
  getRecipesFromDB,
  getRecipeByIdFromDB,
  addRecipeIntoDB,
  updateRecipeInDB,
  deleteRecipeFromDB,
} from "../models/recipesModel.js";

// get all recipes
export const getRecipes = (req, res) => {
  getRecipesFromDB(req.params.user_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single recipe
export const getRecipeById = (req, res) => {
  getRecipeByIdFromDB(req.params.recipe_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// add recipe
export const addRecipe = (req, res) => {
  const data = req.body;
  const id = req.params.user_id;
  addRecipeIntoDB(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update recipe
export const updateRecipe = (req, res) => {
  const data = req.body;
  const id = req.params.recipe_id;
  updateRecipeInDB(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete recipe
export const deleteRecipe = (req, res) => {
  const id = req.params.recipe_id;
  deleteRecipeFromDB(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

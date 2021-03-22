import {
  getRecipesFromDB,
  getRecipeByIdFromDB,
  addRecipeIntoDB,
  updateRecipeInDB,
  deleteRecipeFromDB,
  getRecipeIngredientsFromDB,
  addRecipeIngredientIntoDB,
  updateRecipeIngredientInDB,
  deleteRecipeIngredientFromDB,
  getRecipeStepsFromDB,
  addRecipeStepIntoDB,
  updateRecipeStepInDB,
  deleteRecipeStepFromDB,
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
  const id = req.params.recipe_id;
  getRecipeByIdFromDB(id, (err, results) => {
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

// get recipe ingredients
export const getRecipeIngredients = (req, res) => {
  getRecipeIngredientsFromDB(req.params.recipe_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// add recipe ingredient
export const addRecipeIngredient = (req, res) => {
  addRecipeIngredientIntoDB(req.body, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update recipe ingredient
export const updateRecipeIngredient = (req, res) => {
  const data = req.body;
  const id = req.params.recipe_ingredient_id;
  updateRecipeIngredientInDB(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete recipe ingredient
export const deleteRecipeIngredient = (req, res) => {
  const id = req.params.recipe_ingredient_id;
  deleteRecipeIngredientFromDB(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get recpie steps
export const getRecipeSteps = (req, res) => {
  getRecipeStepsFromDB(req.params.recipe_id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// add recipe step
export const addRecipeStep = (req, res) => {
  addRecipeStepIntoDB(req.body, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update recipe step
export const updateRecipeStep = (req, res) => {
  const data = req.body;
  const id = req.params.step_id;
  updateRecipeStepInDB(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete recipe step
export const deleteRecipeStep = (req, res) => {
  const id = req.params.step_id;
  deleteRecipeStepFromDB(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

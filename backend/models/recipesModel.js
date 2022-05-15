// import connection
import db from "../config/database.js";

// get all recipes
export const getRecipesFromDB = (user_id, result) => {
  db.query(
    "SELECT * FROM recipes WHERE user_id = ?",
    [user_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// get recipes details
export const getRecipeByIdFromDB = (recipe_id, result) => {
  db.query(
    "SELECT * FROM recipes WHERE recipe_id = ?",
    [recipe_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// add recipe
export const addRecipeIntoDB = (data, user_id, result) => {
  db.query(
    "INSERT INTO recipes SET recipe_name = ?, preparation_time = ?, rating = ?, image = ?, category = ?, user_id = ?",
    [
      data.recipe_name,
      data.preparation_time,
      data.rating,
      data.image,
      data.category,
      user_id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// update recipe
export const updateRecipeInDB = (data, recipe_id, result) => {
  db.query(
    "UPDATE recipes SET recipe_name = ?, preparation_time = ?, rating = ?, image = ?, category = ? WHERE recipe_id = ?",
    [
      data.recipe_name,
      data.preparation_time,
      data.rating,
      data.image,
      data.category,
      recipe_id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete recipe
export const deleteRecipeFromDB = (recipe_id, result) => {
  db.query(
    "DELETE FROM recipes WHERE recipe_id = ?",
    [recipe_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//get recipe ingredients
export const getRecipeIngredientsFromDB = (recipe_id, result) => {
  db.query(
    "SELECT * FROM recipes_ingredients_view WHERE recipe_id = ?",
    [recipe_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// add recipe ingredient
export const addRecipeIngredientIntoDB = (data, result) => {
  db.query(
    "INSERT INTO recipes_ingredients SET recipe_id = ?, ingredient_id = ?, amount = ?",
    [data.recipe_id, data.ingredient_id, data.amount],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// update recipe ingredient
export const updateRecipeIngredientInDB = (
  data,
  recipe_ingredient_id,
  result
) => {
  db.query(
    "UPDATE recipes_ingredients SET ingredient_id = ?, amount = ? WHERE recipe_ingredient_id = ?",
    [data.ingredient_id, data.amount, recipe_ingredient_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete recipe ingredient
export const deleteRecipeIngredientFromDB = (recipe_ingredient_id, result) => {
  db.query(
    "DELETE FROM recipes_ingredients WHERE recipe_ingredient_id = ?",
    [recipe_ingredient_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//get recipe steps
export const getRecipeStepsFromDB = (recipe_id, result) => {
  db.query(
    "SELECT * FROM recipes_steps WHERE recipe_id = ?",
    [recipe_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// add recipe step
export const addRecipeStepIntoDB = (data, result) => {
  db.query(
    "INSERT INTO recipes_steps SET step_number = ?, instructions = ?, recipe_id = ?",
    [data.step_number, data.instructions, data.recipe_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// update recipe step
export const updateRecipeStepInDB = (data, step_id, result) => {
  db.query(
    "UPDATE recipes_steps SET step_number = ?, instructions = ? WHERE step_id = ?",
    [data.step_number, data.instructions, step_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete recipe step
export const deleteRecipeStepFromDB = (step_id, result) => {
  db.query(
    "DELETE FROM recipes_steps WHERE step_id = ?",
    [step_id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

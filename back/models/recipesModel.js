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
      data.product_name,
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
      data.product_name,
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

import { getIngredientsFromDB } from "../models/ingredientsModel.js";

// get all ingredinets
export const getIngredients = (req, res) => {
  getIngredientsFromDB((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// import connection
import db from "../config/database.js";

// get all ingredients
export const getIngredientsFromDB = (result) => {
  db.query("SELECT * FROM ingredients_view", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

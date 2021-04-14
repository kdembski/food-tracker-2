// import connection
import db from "../config/database.js";

// get day from db
export const getDayFromDB = (day, month, year, id, result) => {
  db.query(
    "SELECT * FROM calendar_day_view WHERE day = ? AND month = ? AND year = ? AND user_id = ?",
    [day, month, year, id],
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

// add day meal into db
export const addDayMealIntoDB = (data, result) => {
  db.query(
    "INSERT INTO calendar SET day = ?, month = ?, year = ?, meal_number = ?, recipe_id = ?, user_id = ?",
    [
      data.day,
      data.month,
      data.year,
      data.meal_number,
      data.recipe_id,
      data.user_id,
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

// update day meal
export const updateDayMealInDB = (data, date_id, result) => {
  db.query(
    "UPDATE calendar SET recipe_id = ? WHERE date_id = ?",
    [data.recipe_id, date_id],
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

// delete day meal
export const deleteDayMealFromDB = (date_id, result) => {
  db.query(
    "DELETE FROM calendar WHERE date_id = ?",
    [date_id],
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

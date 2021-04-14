import {
  getDayFromDB,
  addDayMealIntoDB,
  updateDayMealInDB,
  deleteDayMealFromDB,
} from "../models/calendarModel.js";

// get day
export const getDay = (req, res) => {
  const id = req.params.user_id;
  const day = req.params.day;
  const month = req.params.month;
  const year = req.params.year;
  getDayFromDB(day, month, year, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// add day meal
export const addDayMeal = (req, res) => {
  const data = req.body;
  addDayMealIntoDB(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update day meal
export const updateDayMeal = (req, res) => {
  const data = req.body;
  const id = req.params.date_id;
  updateDayMealInDB(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete day meal
export const deleteDayMeal = (req, res) => {
  const id = req.params.date_id;
  deleteDayMealFromDB(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

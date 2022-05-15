import { addUserIntoDB, getUserFromDB } from "../models/usersModel.js";

// register user
export const registerUser = (req, res) => {
  const data = req.body;
  addUserIntoDB(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const loginUser = (req, res) => {
  const username = req.params.user_name;
  getUserFromDB(username, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

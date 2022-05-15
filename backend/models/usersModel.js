// import connection
import db from "../config/database.js";

// add user
export const addUserIntoDB = (data, result) => {
  db.query(
    "INSERT INTO users SET user_name = ?, password = ?",
    [data.user_name, data.password],
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

// get user
export const getUserFromDB = (username, result) => {
  db.query(
    "SELECT * FROM users WHERE user_name = ?",
    [username],
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

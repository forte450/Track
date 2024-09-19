const db = require('../config/db');

const insertFormData = (data, callback) => {
  const query = "INSERT INTO forms (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [data.name, data.email, data.message], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = { insertFormData };

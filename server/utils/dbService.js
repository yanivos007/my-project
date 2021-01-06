const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'project',
  connectionLimit: 100,
});

module.exports.executeQuery = (queryString, params) => {
  return new Promise((resolve, reject) => {
    pool.query(queryString, params, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
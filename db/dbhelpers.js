// complete and fix the dbhelpers
const db = require('../db');

const helpers = {
  getProductsHelper: (callback) => {
    let queryStr = `SELECT * FROM entry`
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  postProductsHelper: (data, callback) => {
    let queryStr = `INSERT INTO entry(item, min_cost, curr_bid, ends_in, image) VALUES('${data.item}',${data.min_cost},${data.curr_bid},${data.ends_in},'${data.image}')`
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  updateProductHelper: (id, data, callback) => {
    let queryStr = `UPDATE entry SET item = '${data.item}', min_cost = ${data.min_cost}, curr_bid = ${data.curr_bid}, ends_in = ${data.ends_in}, image = '${data.image}' WHERE id = ${id}`
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  deleteProductHelper: (id, callback) => {
    let queryStr = `DELETE FROM entry WHERE id = ${id}`
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}



module.exports = helpers;

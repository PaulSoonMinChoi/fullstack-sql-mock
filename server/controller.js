// Controller here
// complete building out the controller
const dbHelpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    dbHelpers.getProductsHelper((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },
  post: (req, res) => {
    dbHelpers.postProductsHelper(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('SUCCESSFUL POST');
      }
    })
  },
  put: (req, res) => {
    dbHelpers.updateProductHelper(req.params.id, req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('SUCCESSFUL UPDATE');
      }
    })
  },
  delete: (req, res) => {
    dbHelpers.deleteProductHelper(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('SUCCESSFUL DELETE');
      }
    })
  }
}

module.exports = controller
// Controller here
// complete building out the controller


const controller = {
  get: (req, res) => {
    res.status(200).send('HELLO FROM GET REQUEST')
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = controller
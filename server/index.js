const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router');
const port = 3000;
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use('/', express.static(path.join(__dirname, '../client/dist')));

  //routes
server.use('/api', router);

  server.listen(port, () => console.log('Connected to port: 3000'))
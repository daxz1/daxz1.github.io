const express = require('express');
const logger = require('morgan');
const fetch = require("node-fetch");
const server = express();
const PORT = 4000;

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(PORT, () => {
  console.log(`BACKEND LISTENING ON ${PORT}`);
})

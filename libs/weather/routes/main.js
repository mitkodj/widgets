var express = require('express');
var router = express.Router();

module.exports = function(controller){

  /* POST users data. */
  router.post('/', controller.getWeather);

  return router;

};
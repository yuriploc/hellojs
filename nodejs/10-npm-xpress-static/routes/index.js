/* global console */
var express = require('express');
var router = express.Router();
var url = require('url');

  router.get('/', function(req, res) {
    // descomente linha 12 de app.js e comente linha 9
    res.send('hahahaha!');
  });

module.exports = router;

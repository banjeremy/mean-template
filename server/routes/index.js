'use strict';

var express = require('express'),
    router  = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'Oh hai' });
});

module.exports = router;

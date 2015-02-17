'use strict';

var express = require('express'),
    router  = express.Router(),
    user   = require('../components/user/user.controller');

router.get('/', function(req, res) {
  res.json({ message: 'Oh hai' });
});

router.route('/users')
  .get(user.all)
  .post(user.create);

router.route('/users/:userId')
  .get(user.find)
  .put(user.update)
  .delete(user.delete);

module.exports = router;

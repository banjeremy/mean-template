'use strict';

var User = require('./user.model');

exports.all = function(req, res) {
  var users = User.all();
  res.json(users);
};

exports.create = function(req, res) {

};

exports.find = function(req, res) {

};

exports.update = function(req, res) {

};

exports.delete = function(req, res) {

};

'use strict';

var User = require('./user.model');

exports.all = function(req, res) {
  User.all(function(err, users){
    res.json(users);
  });
};

exports.create = function(req, res) {

};

exports.find = function(req, res) {

};

exports.update = function(req, res) {

};

exports.delete = function(req, res) {

};

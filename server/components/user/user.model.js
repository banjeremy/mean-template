'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName:  String,
  email:     String
});

/*
 * Statics
 */
userSchema.statics.findByEmail = function(email, cb) {
  this.findOne({email: email}, cb);
};

/*
 * Instance Methods
 */
userSchema.methods.name = function(cb) {
  return this.firstName + ' ' + this.lastName;
};

module.exports = mongoose.model('User', userSchema);

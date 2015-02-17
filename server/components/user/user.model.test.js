/* globals describe, it, beforeEach, before, afterEach */
'use strict';

var expect = require('chai').expect,
    User = require('./user.model'),
    mongoose = require('mongoose'),
    user = null;

describe('User', function(){
  before(function(done){
    mongoose.connect('mongodb://localhost/mean-template-test', done);
  });

  beforeEach(function(done){
    user = new User({
      firstName: 'Jeremy',
      lastName: 'Jones',
      email: 'banjeremy@gmail.com'
    });
    user.save(done);
  });

  afterEach(function(done){
    user.remove(done);
  });

  describe('#constructor', function(){
    it('creates a new User', function(){
      expect(user).to.exist;
      expect(user.firstName).to.equal('Jeremy');
      expect(user.lastName).to.equal('Jones');
      expect(user.email).to.equal('banjeremy@gmail.com');
    });
  });

  describe('.findByEmail', function(){
    it('finds a user by email', function(done){
      User.findByEmail('banjeremy@gmail.com', function(err, result){
        expect(result).to.exist;
        expect(result.firstName).to.equal('Jeremy');
        done();
      });
    });
  });
});

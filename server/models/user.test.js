/* globals describe, it, beforeEach */
'use strict';

var expect = require('chai').expect,
    User = require('./user'),
    user = null;

describe('User', function(){
  beforeEach(function(){
    user = new User();
  });

  describe('#constructor', function(){
    it('creates a new User', function(){
      user = new User({
        name: 'Jeremy Jones',
        email: 'banjeremy@gmail.com'
      });

      expect(user.name).to.equal('Jeremy Jones');
      expect(user.email).to.equal('banjeremy@gmail.com');
    });
  });
});

'use strict';

var User = function(user){
  this.name = user.name;
  this.email = user.email;
};

User.all = function() {
  return [
    new User({name: 'Kayla', email: 'kjones@gmail.com'}),
    new User({name: 'Jeremy', email: 'jjones@gmail.com'})
  ];
};

module.exports = User;

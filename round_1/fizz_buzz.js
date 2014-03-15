'use strict';

var _ = require('underscore');

var some_anonymous_helper_function = function(some, parameters) {
  if('something') {
    return 'something';
  }

  return 'whatever';
};

module.exports = {
  some_function_that_gets_exported: function(some_parameter) {
    return 'something';
  }
};

function non_anonymous_helper_function(other, parameters) {
  var an_array = [ 1, 2, 3 ];
  _(an_array).each(function(a_number) {
    console.log('The number is: ', a_number);
  });
}


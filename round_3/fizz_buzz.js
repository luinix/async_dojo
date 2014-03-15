'use strict';

var fs = require('fs');
var Q = require('q');

module.exports = {
  do_something_async: function(some_parameter) {
    return some_file_reading_async_operation(some_parameter);
  }
};

function some_file_reading_async_operation(parameter) {
  var deferred = Q.defer();
  var filepath = __dirname + '/input_files/file_a';
  
  fs.readFile(filepath, 'utf8', function(error, lines) {
    if(error) {
      deferred.reject(error);
    }

    var we_can_parse_as_json = JSON.parse(lines);
    deferred.resolve(we_can_parse_as_json);
  });

  return deferred.promise;
}


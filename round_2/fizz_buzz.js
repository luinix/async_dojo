'use strict';

var fs = require('fs');

module.exports = {
  do_something_async: function(some_parameter, callback) {
    some_file_reading_async_operation(some_parameter, callback);
  }
};

function some_file_reading_async_operation(parameter, callback) {
  var filepath = __dirname + '/input_files/file_a';
  
  fs.readFile(filepath, 'utf8', function(error, lines) {
    var we_can_parse_as_json = JSON.parse(lines);
    callback(error, we_can_parse_as_json);
  });
}

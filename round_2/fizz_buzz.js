'use strict';

var fs = require('fs');

module.exports = {
  do_something_async: function(some_parameter, callback) {
    var result = some_operation_on_parameter(some_parameter);
    var error;

    if('something_went_wrong' === true) {
      error = 'my_error_message';
    }

    callback(error, result);
  }
};

function some_operation_on_parameter(parameter) {
  var filepath = __dirname + '/input_files/files_to_read';
  fs.readFile(filepath, 'utf8', function(error, lines) {
    console.log('We are reading a file for no reason');
    _(lines).each(function(line){
      console.log('Here is a line: ', line);
    });
  });
}

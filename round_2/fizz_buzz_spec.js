'use strict';

describe('Fizz buzz kata round 2', function () {
  var fizz_buzz;

  beforeEach(function () {
    fizz_buzz = require('./fizz_buzz.js');
  });

  afterEach(function () {
  });

  describe('Some description', function(){
    it('should do some async stuff', function(done){
      fizz_buzz.do_something_async('some parameter', function(error, output){
        expect('and run this callback').toBeDefined();

        if(error) {
          done('we should call "done" with an error message to warn jasmine that our asyn test is finished with a epic failure')
        }

        expect('or we call "done" without parameter to warn jasmine that our async test is finished successfully').toBeDefined();
        done();
      });
    });
  });
});

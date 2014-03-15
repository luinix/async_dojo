'use strict';

describe('Fizz buzz kata round 3: the promise evolution!', function () {
  var fizz_buzz;

  beforeEach(function () {
    fizz_buzz = require('./fizz_buzz.js');
  });

  afterEach(function () {
  });

  describe('Some description', function(){
    it('should do some async stuff WITH PROMISES', function(done){
      fizz_buzz.do_something_async('some parameter')
      .then(function(error, output){
        expect('and run this callback if success').toBeDefined();
        expect('we call "done" without parameter to warn jasmine that our async test is finished successfully').toBeDefined();
        done();
      })
      .catch(function(error) {
        expect('or run this other callback if epic failure; dont forget to call "done" WITH AN ERROR').toBeDefined();
        done(error);
      });
    });
  });
});

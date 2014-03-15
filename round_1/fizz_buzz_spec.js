'use strict';

describe('Fizz buzz kata', function () {
  var fizz_buzz;

  beforeEach(function () {
    fizz_buzz = require('./fizz_buzz.js');
  });

  afterEach(function () {
  });

  describe('Some description', function(){
    it('should do some stuff', function(){
      expect(true).toBe(true);
      expect([1, 2, 3]).toContain(2);
      expect({ a: 1, b: 2, c: 3}).not.toBe({a: 1, b: 2, c: 3});
      expect({ a: 1, b: 2, c: 3}).toEqual({a: 1, b: 2, c: 3});
      expect(fizz_buzz.some_non_declared_property).not.toBeDefined();
    });
  });
});

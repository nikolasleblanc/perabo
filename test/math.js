var mocha = require('mocha');
var assert = require('chai').assert;

var pipe = require("../index");

var mathOps = require("../util/mathOps");

describe("Test pipe (math)", function() {
  it('should return 12', function(done) {
    assert.equal(pipe(mathOps.sum, mathOps.double)(1, 2, 3), 12);
    done();
  });
  it('should return 24', function(done) {
    assert.equal(pipe(mathOps.sum, mathOps.double)(1, 2, 3, 1, 2, 3), 24);
    done();
  });
  it('should return 72', function(done) {
    assert.equal(pipe(mathOps.sum, mathOps.double, mathOps.triple)(1, 2, 3, 1, 2, 3), 72);
    done();
  });
  it('should return 73', function(done) {
    assert.equal(pipe(mathOps.sum, mathOps.double, mathOps.triple, mathOps.increment)(1, 2, 3, 1, 2, 3), 73);
    done();
  });
  it('should return 75', function(done) {
    assert.equal(pipe(mathOps.sum, mathOps.double, mathOps.triple, mathOps.increment, mathOps.increment, mathOps.increment)(1, 2, 3, 1, 2, 3), 75);
    done();
  });
  it('should return 150', function(done) {
    assert.equal(pipe(mathOps.sum, mathOps.double, mathOps.triple, mathOps.increment, mathOps.increment, mathOps.increment, mathOps.double)(1, 2, 3, 1, 2, 3), 150);
    done();
  });
});




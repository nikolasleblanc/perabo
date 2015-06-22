var mocha = require('mocha');
var assert = require('chai').assert;

var pipe = require("../index");

var arrOps = require("../util/arrOps");

describe("Test pipe (arrays)", function() {
  it('should return [6, 4, 2]', function(done) {
    assert.deepEqual(pipe(arrOps.reverseArray, arrOps.doubleEachItem)([1, 2, 3]), [6, 4, 2]);
    done();
  });
  it('should return [7, 5, 3]', function(done) {
    assert.deepEqual(pipe(arrOps.reverseArray, arrOps.doubleEachItem, arrOps.incrementEachItem)([1, 2, 3]), [7, 5, 3]);
    done();
  });
  it('should return [14, 10, 6]', function(done) {
    assert.deepEqual(pipe(arrOps.reverseArray, arrOps.doubleEachItem, arrOps.incrementEachItem, arrOps.doubleEachItem)([1, 2, 3]), [14, 10, 6]);
    done();
  });
  it('should return 30', function(done) {
    assert.deepEqual(pipe(arrOps.reverseArray, arrOps.doubleEachItem, arrOps.incrementEachItem, arrOps.doubleEachItem, arrOps.sumEachItem)([1, 2, 3]), 30);
    done();
  });
})



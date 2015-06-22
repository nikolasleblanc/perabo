module.exports = {
  sum: function() {
    // returns the sum of all integers passed as arguments
    var total = Array.prototype.slice.call(arguments).reduce(function(a, b) {
      return a + b;
    });
    return total;
  },
  double: function() {
    // returns the double of the passed integer
    var total = Array.prototype.slice.call(arguments)*2;
    return total;
  },
  triple: function() {
    // returns the triple of the passed integer
    var total = Array.prototype.slice.call(arguments)*3;
    return total;
  },
  increment: function() {
    // returns the the passed integer incremented by 1
    var total = parseInt(Array.prototype.slice.call(arguments))+1;
    return total;
  }
}
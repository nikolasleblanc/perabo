module.exports = {
  reverseArray: function() {
    // reverses all elements in array
    var arr = Array.prototype.slice.call(arguments)[0].reverse();
    return arr;
  },
  doubleEachItem: function() {
    // doubles each element in array
    var arr = Array.prototype.slice.call(arguments)[0].map(function(item) {
      return item*2;
    });
    return arr;
  },
  incrementEachItem: function() {
    // increments each element in array
    var arr = Array.prototype.slice.call(arguments)[0].map(function(item) {
      return item+1;
    });
    return arr;
  },
  sumEachItem: function() {
    // returns the sum of all elements in array
    var arr = Array.prototype.slice.call(arguments)[0].reduce(function(a, b) {
      return a + b;
    });
    return arr;
  }
}
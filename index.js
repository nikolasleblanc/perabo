// Many thanks to:
// http://tech.pro/tutorial/2010/functional-javascript-part-3-apply-call-and-the-arguments-object

// calling pipe(f1, f2, f3..., fn)(args...)
// same as fn(...(f3(f2(f1(args...))))).

module.exports = function() {
  // Build array of functions from arguments passed to pipe
  var funcs = Array.prototype.slice.call(arguments);

  return function() {
    var args = arguments; // keep jshint happy

    // loop through and evaluate each function in pipe
    for (var i = 0, len = funcs.length; i < len; i++) {
      // store returned results for next function in pipe
      args = [funcs[i].apply(this, args)];
    }

    return args[0];
  };
};


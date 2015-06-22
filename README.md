# Perabo

## Description

Takes any number of functions as arguments and returns a new function that will pass its argument to the first function, then pass the result to the second, continuing this process until all functions have been called and a final value is returned.

## Installation

```
npm install perabo --save
```

## Usage

```
var perabo = require('perabo');

perabo(foo, bar)(1, 2, 3)

// would be the same as
bar(foo(1, 2, 3));

// similarly
perabo(foo, bar, baz)(1, 2, 3)

// would be the same as
baz(bar(foo(1, 2, 3)));
```
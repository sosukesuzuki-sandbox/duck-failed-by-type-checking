goog.module("b");

const a = goog.require("a");

const foo = a.Bar("foobar");

console.log(foo);

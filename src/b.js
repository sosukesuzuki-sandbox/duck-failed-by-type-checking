goog.module("b");

const a = goog.require("a");

const foo = a.Bar(33333);

console.log(foo);

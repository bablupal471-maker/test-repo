const assert = require('node:assert/strict');
const add = require('./add');

assert.equal(add(2, 3), 5);
assert.equal(add(-2, 3), 1);
assert.equal(add(0, 0), 0);

console.log('add() unit tests passed');
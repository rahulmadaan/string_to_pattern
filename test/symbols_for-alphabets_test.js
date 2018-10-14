let lib = require('../lib/symbol_for_alphabets.js');
let assert = require('assert');

const symbol_for_alphabets_height_1 = function (expectedOutput, output) { 
  assert.equal(lib.first(expectedOutput),output);
}
symbol_for_alphabets_height_1(0,'*****');
console.log('Test Passed');

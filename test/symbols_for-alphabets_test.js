let lib = require('../lib/symbol_for_alphabets.js');
let assert = require('assert');

const symbol_for_alphabets_height_1 = function (expectedOutput, actualOutput) { 
  assert.equal(lib.first(expectedOutput),actualOutput);
}

// for only one set of symbols in one function
symbol_for_alphabets_height_1(0,'*****');

// for two sets of symbols in one function
symbol_for_alphabets_height_1(0,'*****');
symbol_for_alphabets_height_1(1,'*****');





console.log('Test Passed');

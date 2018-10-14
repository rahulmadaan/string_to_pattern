let lib = require('../lib/symbol_for_alphabets.js');
let assert = require('assert');

const symbol_for_alphabets_height_1 = function (expectedOutput, actualOutput) { 
  assert.equal(lib.first(expectedOutput),actualOutput);
}
const symbol_for_alphabets_height_2 = function (expectedOutput, actualOutput) { 
  assert.equal(lib.second(expectedOutput),actualOutput);
}
const symbol_for_alphabets_height_3 = function (expectedOutput, actualOutput) { 
  assert.equal(lib.third(expectedOutput),actualOutput);
}
const symbol_for_alphabets_height_4 = function (expectedOutput, actualOutput) { 
  assert.equal(lib.fourth(expectedOutput),actualOutput);
}
const symbol_for_alphabets_height_5 = function (expectedOutput, actualOutput) { 
  assert.equal(lib.fifth(expectedOutput),actualOutput);
}

// for only one set of symbols in one function
symbol_for_alphabets_height_1(0,'*****');

// for two sets of symbols in one function
symbol_for_alphabets_height_1(0,'*****');
symbol_for_alphabets_height_1(1,'*****');

// for two sets of symbols from different functions
symbol_for_alphabets_height_1(0,'*****');
symbol_for_alphabets_height_2(0,'*   *');

// one whole character
symbol_for_alphabets_height_1(0,'*****');
symbol_for_alphabets_height_2(0,'*   *');
symbol_for_alphabets_height_3(0,'*****');
symbol_for_alphabets_height_4(0,'*   *');
symbol_for_alphabets_height_5(0,'*   *');



console.log('Test Passed');

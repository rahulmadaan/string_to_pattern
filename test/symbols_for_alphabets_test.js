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


// two different characters
symbol_for_alphabets_height_1(2,'*****');
symbol_for_alphabets_height_2(2,'*    ');
symbol_for_alphabets_height_3(2,'*    ');
symbol_for_alphabets_height_4(2,'*    ');
symbol_for_alphabets_height_5(2,'*****');

symbol_for_alphabets_height_1(5,'*****');
symbol_for_alphabets_height_2(5,'*    ');
symbol_for_alphabets_height_3(5,'*****');
symbol_for_alphabets_height_4(5,'*    ');
symbol_for_alphabets_height_5(5,'*    ');

// five more characters and get random symbol set from them (B,J,L,S,E)
symbol_for_alphabets_height_5(4,'*****');
symbol_for_alphabets_height_3(4,'*****');

symbol_for_alphabets_height_5(11,'*****');
symbol_for_alphabets_height_3(9,'   * ');

symbol_for_alphabets_height_1(9,'*****');
symbol_for_alphabets_height_2(11,'*    ');

symbol_for_alphabets_height_4(18,'    *');
symbol_for_alphabets_height_2(5,'*    ');


// five more characters and get random symbol set from them (D,G,H,I,K)
symbol_for_alphabets_height_1(3,'**** ');
symbol_for_alphabets_height_3(10,'**   ');

symbol_for_alphabets_height_5(8,'*****');
symbol_for_alphabets_height_4(7,'*   *');

symbol_for_alphabets_height_2(6,'*    ');

//six more characters and get random symbol set (M,N,O,P,Q,R)
symbol_for_alphabets_height_1(14,' *** ');
symbol_for_alphabets_height_3(16,'**  *');

symbol_for_alphabets_height_5(13,'*   *');
symbol_for_alphabets_height_4(12,'*   *');

symbol_for_alphabets_height_2(17,'*   *');
symbol_for_alphabets_height_2(15,'*   *');


console.log('Test Passed');

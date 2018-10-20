// calls the function in symbols_for_alphabet library and returns 
// the set of symbols required to draw pattern for any
// given string
let lib = require('./symbol_for_alphabets.js');
let heightOne = lib.first;
let heightTwo = lib.second;
let heightThree = lib.third;
let heightFour = lib.fourth;
let heightFive = lib.fifth;

const returnSymbol = function (characterIndex) { 
  let outputArray = [];
  function_list = [heightOne,heightTwo,heightThree,heightFour,heightFive];
  let currentLine='';
  for(value of function_list) {
    currentLine='';
    for(index of characterIndex) {
      currentLine = currentLine + value(index);
      currentLine = currentLine + '   ';
    }
    outputArray.push(currentLine);
  }
  return outputArray;
}
exports.returnSymbol=returnSymbol;

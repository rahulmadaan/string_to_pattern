// checks the index of input character 
let { charToIndex } = require('./charToIndex.js');
let { returnSymbol } = require('./returnSymbol.js');
const whichCharacterToPrint = function (inputString) { 
  let getIndex = charToIndex(inputString);
  return returnSymbol(getIndex);
}
exports.whichCharacterToPrint=whichCharacterToPrint;

let {whichCharacterToPrint} = require('../lib/whichCharacterToPrint.js');
// main program file for printing symbols for characters

const charToSymbol = function (inputString) { 
  outputArray = whichCharacterToPrint(inputString.toUpperCase());
  return outputArray.join('\n');

}
const main = function () { 
  inputString = process.argv[2];
  console.log(charToSymbol(inputString));
}
main();

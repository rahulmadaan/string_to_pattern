// library for converting symbol to its index

const charToIndex = function (inputString) { 
  let characterIndex=[];
  for(let index=0 ; index<inputString.length; index++ ) { 
      characterIndex[index] = inputString[index].toUpperCase().charCodeAt(0) - 65;
  }
  return characterIndex;
}
exports.charToIndex=charToIndex;

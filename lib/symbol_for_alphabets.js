// have set of symbols to represent a character

const symbol_height_1 = function (index) {
  let alphabet=[];
  alphabet[0]='*****'; // A
  alphabet[1]='*****'; // B
  alphabet[2]='*****'; // C
  alphabet[5]='*****'; // F
  return alphabet[index];
}

const symbol_height_2 = function (index) {
  let alphabet=[];
  alphabet[0]='*   *'; // A
  alphabet[2]='*    '; // C
  alphabet[5]='*    '; // F
  return alphabet[index];
}

const symbol_height_3 = function (index) {
  let alphabet=[];
  alphabet[0]='*****'; // A
  alphabet[2]='*    '; // C
  alphabet[5]='*****'; // F
  return alphabet[index];
}
const symbol_height_4 = function (index) {
  let alphabet=[];
  alphabet[0]='*   *'; // A
  alphabet[2]='*    '; // C
  alphabet[5]='*    '; // F
  return alphabet[index];
}
const symbol_height_5 = function (index) {
  let alphabet=[];
  alphabet[0]='*   *'; // A
  alphabet[2]='*****'; // C
  alphabet[5]='*    '; // F
  return alphabet[index];
}
exports.first=symbol_height_1;
exports.second=symbol_height_2;
exports.third=symbol_height_3;
exports.fourth=symbol_height_4;
exports.fifth=symbol_height_5;

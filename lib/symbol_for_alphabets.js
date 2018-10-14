// have set of symbols to represent a character

const symbol_height_1 = function (index) {
  let alphabet=[];
  alphabet[0]='*****'; // A
  alphabet[1]='*****'; // B
  alphabet[2]='*****'; // C
  alphabet[3]='**** '; // D
  alphabet[4]='*****'; // E
  alphabet[5]='*****'; // F
  alphabet[6]='*****'; // G
  alphabet[7]='*   *'; // H
  alphabet[8]='*****'; // I
  alphabet[9]='*****'; // J
  alphabet[10]='*   *'; // K
  alphabet[11]='*    '; // L
  alphabet[12]='*   *'; // M
  alphabet[13]='*   *'; // N
  alphabet[14]=' *** '; // O
  alphabet[15]='*****'; // P
  alphabet[16]=' *** '; // Q
  alphabet[17]='**** '; // R
  alphabet[18]='*****'; // S
  return alphabet[index];
}

const symbol_height_2 = function (index) {
  let alphabet=[];
  alphabet[0]='*   *'; // A
  alphabet[1]='*  *'; // B
  alphabet[2]='*    '; // C
  alphabet[3]='*   * '; // D
  alphabet[4]='*    '; // E
  alphabet[5]='*    '; // F
  alphabet[6]='*    '; // G
  alphabet[7]='*   *'; // H
  alphabet[8]='  *  '; // I
  alphabet[9]='   * '; // J
  alphabet[10]='* *  '; // K
  alphabet[11]='*    '; // L
  alphabet[12]='** **'; // M
  alphabet[13]='**  *'; // N
  alphabet[14]='*   *'; // O
  alphabet[15]='*   *'; // P
  alphabet[16]='*   *'; // Q
  alphabet[17]='*   *'; // R
  alphabet[18]='*    '; // S
  return alphabet[index];
}

const symbol_height_3 = function (index) {
  let alphabet=[];
  alphabet[0]='*****'; // A
  alphabet[1]='***'; // B
  alphabet[2]='*    '; // C
  alphabet[3]='*   *'; // D
  alphabet[4]='*****'; // E
  alphabet[5]='*****'; // F
  alphabet[6]='* ***'; // G
  alphabet[7]='*****'; // H
  alphabet[8]='  *  '; // I
  alphabet[9]='   * '; // J
  alphabet[10]='**   '; // K
  alphabet[11]='*    '; // L
  alphabet[11]='*    '; // L
  alphabet[12]='* * *'; // M
  alphabet[13]='* * *'; // N
  alphabet[14]='*   *'; // O
  alphabet[15]='*****'; // P
  alphabet[16]='**  *'; // Q
  alphabet[17]='**** '; // R
  alphabet[18]='*****'; // S
  return alphabet[index];
}
const symbol_height_4 = function (index) {
  let alphabet=[];
  alphabet[0]='*   *'; // A
  alphabet[1]='*  *'; // B
  alphabet[2]='*    '; // C
  alphabet[3]='*   *'; // D
  alphabet[4]='*****'; // E
  alphabet[5]='*    '; // F
  alphabet[6]='*   *'; // G
  alphabet[7]='*   *'; // H
  alphabet[8]='  *  '; // I
  alphabet[9]='*  * '; // J
  alphabet[10]='* *  '; // K
  alphabet[11]='*    '; // L
  alphabet[12]='*   *'; // M
  alphabet[13]='*  **'; // N
  alphabet[14]='*   *'; // O
  alphabet[15]='*    '; // P
  alphabet[16]=' *** '; // Q
  alphabet[17]='* *  '; // R
  alphabet[18]='    *'; // S
  return alphabet[index];
}
const symbol_height_5 = function (index) {
  let alphabet=[];
  alphabet[0]='*   *'; // A
  alphabet[1]='*****'; // B
  alphabet[2]='*****'; // C
  alphabet[3]='**** '; // D
  alphabet[4]='*****'; // E
  alphabet[5]='*    '; // F
  alphabet[6]='*****'; // G
  alphabet[7]='*****'; // H
  alphabet[8]='*****'; // I
  alphabet[9]='**** '; // J
  alphabet[10]='*   *'; // K
  alphabet[11]='*****'; // L
  alphabet[12]='*   *'; // M
  alphabet[13]='*   *'; // N
  alphabet[14]=' *** '; // O
  alphabet[15]='*    '; // P
  alphabet[16]='   * '; // Q
  alphabet[17]='*   *'; // R
  alphabet[18]='*****'; // S
  return alphabet[index];
}

exports.first=symbol_height_1;
exports.second=symbol_height_2;
exports.third=symbol_height_3;
exports.fourth=symbol_height_4;
exports.fifth=symbol_height_5;

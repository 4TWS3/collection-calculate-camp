'use strict';


var get_integer_interval = require('./get_integer_interval.js');
function get_letter_interval_2(number_a, number_b) {
  let intArry = get_integer_interval(number_a, number_b);
   let letterMap = {0:'',1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',13:'m',
                   14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',21:'u',22:'v',23:'w',24:'x',25:'y',26:'z'};
  let fromCodeToChar = function fromCodeToChar(code){
     if(code % 26 ===0 && code !== 0){
      let ret = fromCodeToChar(Math.floor(code/26) -1)+'z';
      return ret;
    }
    else if(code <= 26) return letterMap[code];
    else {
      return fromCodeToChar( Math.floor(code/26) ) + letterMap[code % 26]
    }
  }

  return intArry.map(item => {
    return  fromCodeToChar(item);
  });
}

module.exports = get_letter_interval_2;


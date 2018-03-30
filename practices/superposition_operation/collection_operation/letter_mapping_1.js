'use strict';

function is_even(curr) {
  return curr % 2 === 0;
}

function even_to_letter(collection) {
  return collection.reduce((retArr,curr) => {
    if(is_even(curr))
      {
        let baseCode = 'a'.charCodeAt() -1 ;
        retArr.push(String.fromCharCode(curr+ baseCode));
      }
    return retArr;
  },[ ])
}

module.exports = even_to_letter;

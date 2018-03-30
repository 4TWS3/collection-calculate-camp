'use strict';

function even_to_letter(collection) {
  return collection.reduce((retArr,curr) => {
    if(curr % 2 === 0)
      {
        let baseCode = 97 -1 ;
        retArr.push(String.fromCharCode(curr+ baseCode));
      }
    return retArr;
  },[ ])
}

module.exports = even_to_letter;

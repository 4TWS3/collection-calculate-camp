'use strict';

function average_to_letter(collection) {
  let length = collection.length;
   if(length === undefined) return null;
  let sum = collection.reduce((accu,curr) =>{
    return accu+curr;
  });

  return String.fromCharCode(Math.ceil(sum/collection.length) + 96) ;
}

module.exports = average_to_letter;


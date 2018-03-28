'use strict';

function choose_divisible_integer(collection_a, collection_b) {
 return collection_a.filter(it => {
   let ret = false;
   for(let i = 0; i< collection_b.length;i++) {
     if(it % collection_b[i] === 0) {
       ret = true;
       break;
     }
   }
   return ret;

 });
}

module.exports = choose_divisible_integer;

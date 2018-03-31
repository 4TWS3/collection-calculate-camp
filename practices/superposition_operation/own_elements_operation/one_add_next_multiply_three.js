'use strict';
function one_add_next_multiply_three(collection){
  //return [12,24,36,48,60,72,84,96,108,120];
  const length = collection.length;
  return collection.reduce((ret,curr,index,arr) =>{
    if(index === (length-1)) return ret;
    else {
      ret.push(3*(curr+arr[index+1]))
      return ret ;
    }

  },[ ]);
}
module.exports = one_add_next_multiply_three;

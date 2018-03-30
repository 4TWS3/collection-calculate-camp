'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.reduce((retArr,curr)=>{
    if(curr % 2 !== 0 ){
      retArr.push(curr*3+2);
    }
    return retArr;

  },[ ])
}

module.exports = hybrid_operation_to_uneven;


'use strict';

function hybrid_operation(collection) {
  return collection.reduce((accu,curr) => {

    return accu += (curr*3 +2)  ;
  },0)

}

module.exports = hybrid_operation;


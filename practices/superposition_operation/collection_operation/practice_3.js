'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.reduce((accu,curr) =>{
    return (curr % 2 !== 0)? accu += (curr *3+5): accu;
  },0)

}

module.exports = hybrid_operation_to_uneven;


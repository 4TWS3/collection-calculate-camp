'use strict';
function flattern(collection) {
  if(collection.length === 1) {
    return (Array.isArray(collection[0])) ? flattern(collection[0]):[collection[0]]
  }
  else if (!Array.isArray(collection[0])) {
    return [collection[0]].concat(flattern(collection.slice(1)));
  }
  else {
    return (flattern(collection[0])).concat(flattern(collection.slice(1)));
  }
}


function double_to_one(collection) {

  return flattern(collection);
}

module.exports = double_to_one;

'use strict';

function flatten(collection) {
  if(collection.length === 1) {
    return (Array.isArray(collection[0])) ? flatten(collection[0]):[collection[0]]
  }
  else if (!Array.isArray(collection[0])) {
    return [collection[0]].concat(flatten(collection.slice(1)));
  }
  else {
    return (flatten(collection[0])).concat(flatten(collection.slice(1)));
  }
}
module.exports = flatten;

'use strict';

var flatten = require('../util/flatten');
var removeDuplicate = require('../util/removeDuplicate');
function double_to_one(collection) {
  return removeDuplicate( flatten( collection));
}

module.exports = double_to_one;

'use strict';

var flatten = require('../util/flatten');

function double_to_one(collection) {

  return flatten(collection);
}

module.exports = double_to_one;

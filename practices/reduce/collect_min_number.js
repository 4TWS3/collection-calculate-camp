'use strict';

function collect_min_number(collection) {
  return collection.reduce((pre,curr) => Math.min(pre,curr));
}

module.exports = collect_min_number;


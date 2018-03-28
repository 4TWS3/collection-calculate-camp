'use strict';

function collect_max_number(collection) {
 return collection.reduce((pre,curr) => Math.max(pre,curr));
}

module.exports = collect_max_number;

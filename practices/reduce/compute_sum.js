'use strict';

function calculate_elements_sum(collection) {
 return collection.reduce((accu,curr) => accu + curr)
}

module.exports = calculate_elements_sum;


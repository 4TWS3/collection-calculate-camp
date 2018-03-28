'use strict';

function compute_average(collection) {
  if(collection.length === 0)
    new Error('parameter canot be empty');
 let sum = collection.reduce((pre,curr) => pre + curr);
 return sum /collection.length;
}

module.exports = compute_average;


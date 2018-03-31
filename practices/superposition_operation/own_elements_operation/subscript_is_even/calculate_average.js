'use strict';
var calculate_average = function(collection){
  let sum = 0;
  let length = collection.length;
  if(!length) return 0;
  for(let i = 1; i<length; i=i+2) {
    sum += collection[i];
  }
  return (sum / Math.floor(length /2));

};
module.exports = calculate_average;

'use strict';
const calculateMedianNumber = require('../../../util/calculateMedianNumber');

var calculate_median = function(collection){
  let size = collection.length;
  if(!size) return 0;
  let collection_odd_even = collection.reduce((ret,curr,index,arr) => {
    if(index % 2 === 0) ret[0].push(curr);
    else ret[1].push(curr);
    return ret;
  },[[],[]])
  if(size%2===0) return calculateMedianNumber(collection_odd_even[1]);
  return calculateMedianNumber(collection_odd_even[0]);
};

module.exports = calculate_median;


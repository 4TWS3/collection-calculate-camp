'use strict';


var computeMediaNumber = require('../util/calculateMedianNumber');

function compute_chain_median(collection) {
  let arr = collection.split('->');
  let nums = arr.map(it=> parseInt(it));
  let ret = computeMediaNumber(nums);
  return ret;

}

module.exports = compute_chain_median;

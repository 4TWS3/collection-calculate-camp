'use strict';
const cumputeMedianNumber = require('../../util/calculateMedianNumber');
const fromCodeToChar=require('../../util/fromCodeToChar');
function median_to_letter(collection) {
  let median = Math.ceil(cumputeMedianNumber(collection)) ;
  return fromCodeToChar(median);
}

module.exports = median_to_letter;

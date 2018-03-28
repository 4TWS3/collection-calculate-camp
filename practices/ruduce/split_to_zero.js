'use strict';
function computeDigit(flt) {
   return flt.toString().split('.')[1].length;
}
function spilt_to_zero(number, interval) {
  let ret = [number]
  let digits = computeDigit(number);
   while (true) {
   number -= interval;
   ret = ret.concat(parseFloat(number.toFixed(digits)));

   if(parseFloat(number.toFixed(digits)) == 0 || number < 0) break;

 }
  return ret;
}

module.exports = spilt_to_zero;

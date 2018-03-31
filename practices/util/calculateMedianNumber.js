'use strict';
function computeMediaNumber(nums) {
  let ret;
  nums.sort((a,b)=> {
    if(a > b) return 1;
    if(a <b) return -1;
    return 0;
  });

  let length = nums.length;

  if (length % 2 === 0) {
    ret = (parseInt(nums[length / 2 - 1]) + parseInt(nums[length / 2])) / 2.0;
  }
  else {
    ret = parseInt(nums[(length - 1) / 2]);
  }
  return ret;
}
module.exports = computeMediaNumber;

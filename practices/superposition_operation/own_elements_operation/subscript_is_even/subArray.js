
Array.prototype.getSubArray = function getSubArray(cb) {
  let ret = [];
  this.forEach((it,idx) => {
    if(cb(it,idx)) {
      ret.push(it);
    }
  });
  return ret;
};
Array.prototype.getSubArrayOnEvenPosition = function () {
  return this.getSubArray(isPostionEven)
};
Array.prototype.getSubArrayOnOddPosition = function () {
  return this.getSubArray(isPostionOdd)
};
let isPostionEven = function (it, idx) {
  return !(idx % 2 === 0);
}
let isPostionOdd = function (it, idx) {
  return (idx % 2 === 0);
}
Array.prototype.getSubArrayIsEven = function () {
  return this.getSubArray(isEven)
};
let isEven = function (it, idx) {
  return !(id % 2 === 0);
}



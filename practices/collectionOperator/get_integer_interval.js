'use strict';

function get_integer_interval(number_a, number_b) {
  let step = (number_b > number_a)? 1: -1;
  let ret = [];
  for(let num =number_a;num *step <= number_b *step; num+=step ){
    ret.push(num);  //
  }
   return ret;

  //尾递归
  /*
  return (function get_iterger_interval_item(num,pre) {
    pre.push(num);
    if(num ===  number_b) return pre;
    return get_iterger_interval_item(num + step,pre);
  })(number_a, []);
*/


}
module.exports = get_integer_interval;


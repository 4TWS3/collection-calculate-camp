'use strict';
require('./subArray');
var even_group_calculate_average = function(collection){
  return process(collection)
    .get_even_position_item()
    .group_even_item_by_digit()
    .calculate_averages()
    .averages;
};

function process(collection) {
  let _colletion = [];
  let _group_even_and_digit = { };
  let _averages =[ ];
  return {
    get_even_position_item: function () {
      _colletion = collection.getSubArrayOnEvenPosition();
      return this;
    },
    group_even_item_by_digit:function () {
      _colletion.reduce((ret,curr) => {
        let digi_num = Math.ceil(Math.log10(curr));
        if(curr % 2 === 0) {
          ret[digi_num] = ret[digi_num] || [];
          ret[digi_num].push(curr)
        };
        return ret;
      },_group_even_and_digit);
      return this;
    },
    calculate_averages: function () {
      let keys = Object.keys(_group_even_and_digit);
      if (!keys.length) _averages.push(0);
      Object.keys(_group_even_and_digit) .forEach((key) => {
         _averages.push(calculate_avg(_group_even_and_digit[key])) ;
      });
      return this;
    },
    averages:_averages,
  }
}

function calculate_avg(array) {
  return array.reduce((avg,curr,index,arr) => {
    let size = arr.length;
    if(index === size-1) return (avg + curr)/size;
    return avg += curr;
  },0)
}

module.exports = even_group_calculate_average;

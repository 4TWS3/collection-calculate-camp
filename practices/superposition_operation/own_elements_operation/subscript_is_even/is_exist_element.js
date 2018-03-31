'use strict';
require('./subArray');

var is_exist_element = function(collection,element){
  let ret = collection.getSubArrayOnOddPosition();
  return (ret.indexOf(element) > -1);
};
module.exports = is_exist_element;

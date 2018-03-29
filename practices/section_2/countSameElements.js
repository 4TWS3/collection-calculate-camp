function countSameElement(collection, resultItem = ['key', 'count']) {
  let countArr = [];
  let countMap = count_elements(collection);
  let keyName= resultItem[0];
  let countName = resultItem[1];
  countMap.forEach((value, key) => {
    if(value !== 1) {
      let obj = { };
      obj[keyName] = key;
      obj[countName] = value;
      countArr.push( obj );
    }
  });
  console.log(countMap);
  return countArr;
}

function count_elements(collection) {
  return collection.reduce((pre, curr) => {
    let map = deal_shortcut_expression(curr);
    let count = map.count;
    curr = map.element;
   if (pre.get(curr)) {
      pre.set(curr, pre.get(curr) + count );
    }
    else {
      pre.set(curr, count);
    }
    return pre;
  }, new Map());
}
function deal_shortcut_expression(str) {
  let map = { }
  let reg = new RegExp(/(\w+)\W+(\d+)\W*/);
  let arr;
  if((arr = reg.exec(str))!== null) {
    map.element = arr[1];
    map.count = parseInt(arr[2]);
  }
  else {
    map.element = str;
    map.count = 1;
  }
 return map;

}

module.exports = {deal_shortcut_expression,countSameElement};



var deal_shortcut_expression = require('./countSameElements').deal_shortcut_expression;
// let ret = countSameEle([1,2,2,3,3,3,4,4,4,4]);
// console.log(ret);

let map = deal_shortcut_expression('c[10]')
console.log(map);

map = deal_shortcut_expression("h[3]");
console.log(map);

 map = deal_shortcut_expression('t-2')
console.log(map);

map = deal_shortcut_expression('t:2')
console.log(map);

map = deal_shortcut_expression('c')
console.log(map);



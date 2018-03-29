
var countSameElements = require('../countSameElements').countSameElement;
function count_same_elements(collection) {
  return countSameElements(collection,['name','summary']);
}

module.exports = count_same_elements;

var getSameElements = require('../getSameElements');
function collect_same_elements(collection_a, object_b) {
  let ca =collection_a.map(it => it.key);
  return getSameElements(ca,object_b.value);
}

module.exports = collect_same_elements;

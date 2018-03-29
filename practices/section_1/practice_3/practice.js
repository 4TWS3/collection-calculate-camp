var getSameElements = require('../getSameElements');
function collect_same_elements(collection_a, object_b) {
  return getSameElements(collection_a, object_b.value);
}

module.exports = collect_same_elements;

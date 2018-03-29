var getSameElements = require('../getSameElements');

function collect_same_elements(collection_a, collection_b) {
  return getSameElements(collection_a, collection_b[0]);
}

module.exports = collect_same_elements;

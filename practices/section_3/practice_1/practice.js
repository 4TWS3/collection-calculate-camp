var helpFunction = require('../util/help');

function create_updated_collection(collection_a, object_b) {
  let cb = (it) => it -= 1;
  return helpFunction(collection_a, object_b, cb);
}

module.exports = create_updated_collection;

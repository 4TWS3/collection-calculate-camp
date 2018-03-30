function helpFunction(collection_a, object_b, cb) {
  let keyArray = object_b.value;
  let ret = collection_a.map(item => {
    if (keyArray.indexOf(item.key) > -1) {
      item.count = cb(item.count);}
    return item;
  });
  return ret;
}
module.exports =  helpFunction;

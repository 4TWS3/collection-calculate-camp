function create_updated_collection(collection_a, object_b) {
  let keyArray =object_b.value;
  let ret =  collection_a.map(item => {
    if(keyArray.indexOf(item[key]) > -1) {
      item[count] -= 1;
    }
  });
  console.log(ret);
  return ret;
}

module.exports = create_updated_collection;

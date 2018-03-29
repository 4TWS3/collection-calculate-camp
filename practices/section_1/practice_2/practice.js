function collect_same_elements(collection_a, collection_b) {
  return collection_a.reduce((pre,curr) => {
    if(collection_b[0].indexOf(curr) >= 0) {
      return pre.concat(curr);
    }
    else
      return pre;
  },[])
}

module.exports = collect_same_elements;

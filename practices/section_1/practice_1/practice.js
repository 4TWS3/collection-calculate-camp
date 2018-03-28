function collect_same_elements(collection_a, collection_b) {
  return collection_a.reduce((pre,curr,index,arr) => {
    if(collection_b.indexOf(curr) >= 0) {
      return pre.concat(curr);
    }
    else
      return pre;
  },[])
}

module.exports = collect_same_elements;

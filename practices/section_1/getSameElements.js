function getSameElements(collection_a, collection_b) {
  return collection_a.reduce((pre, curr) => {
    if (collection_b.indexOf(curr) >= 0) {
      return pre.concat(curr);
    }
    else
      return pre;
  }, [])
}

module.exports = getSameElements;

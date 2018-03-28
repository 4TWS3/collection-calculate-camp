'use strict';

function choose_even(collection) {
  return collection.filter(it => {
    return (it % 2 === 0);
  });
}

module.exports = choose_even;

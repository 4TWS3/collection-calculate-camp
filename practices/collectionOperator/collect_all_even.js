'use strict';

const Number_Utils = require("../util/number_util");

function collect_all_even(collection) {
  return collection.filter((it => Number_Utils.is_event(it)));
}

module.exports = collect_all_even;

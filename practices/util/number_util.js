'use strict';

const Number_Utils = {
  is_event: function (num) {
    if((typeof num) !== 'number') return false;
    return num % 2 === 0;
  },
};

module.exports = Number_Utils;

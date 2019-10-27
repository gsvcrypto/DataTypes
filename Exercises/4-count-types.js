'use strict';

/*const array = [true, 'hello', 5, 12, -200, false, false, 'word', 0.8,
  'any string', 44, true, false, 99, 'bye'];/**/

const countTypesInArray = array => {
  const hash = {};
  for (const e of array) {
    const v = typeof e;
    hash[v] ? hash[v]++ : hash[v] = 1;
  }
  return hash;
};

//countTypesInArray(array);

module.exports = { countTypesInArray };
